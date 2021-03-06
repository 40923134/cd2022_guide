# 2b w3 grouping program, 與 2a 處理架構相同
from browser import html
from browser import document
import random

brython_div = document["brython_div"]

# 根據 href 與 content 將 html 元件中的 anchor 插入頁面
def makeLink(href, content):
    brython_div <= html.A(content, href=href)
    #brython_div <= html.BR()

# 2a
#course_num = "0752"
# 2b
course_num = "0764"

reg_url = "https://nfulist.herokuapp.com/?semester=1102&courseno="+ course_num + "&column=True"
reg_data = open(reg_url).read().split("\n")[:-1]
#print(reg_data)
aorb = "b"
url = "https://mde.tw/studlist/2022spring/2b.txt"
course = "cd2022"
# 從 url 讀取資料後, 以跳行符號分割資料進入數列後
# 去除數列中的第一筆與最後一筆資料後可得每位學員所填的資料
data = open(url).read().split("\n")[1:-1]
#print(data)
# 再以 \t 分割每位學員的資料, 
#可以取得每位學員的學號, github 帳號與組別
big = []
num_github = {}
num_grp = {}
for i in data:
    stud_no, github, grp_no = i.split("\t")
    #print(stud_no, github, grp_no)
    # 因為納入新成員, 所以 big 必須之後才可組成
    #big.append([stud_no, github, grp_no])
    if github != "":
        num_github[stud_no] = github
    else:
        num_github[stud_no] = stud_no
    num_grp[stud_no] = grp_no
#print(num_grp)
# 根據最新註冊資料更新 studlist 中的內容
for i in reg_data:
    # 納入新加選的學員或從 data 中移除已經退選者
    # 假如最新修課學員學號並不在原名單中, 則屬加選者
    if not(i in num_github):
        #print(i)
        # 先以學號作為帳號, 分組欄位空白
        num_github[i] = i
        num_grp[i] = ""
# 因為隨後查詢 num_github 與 num_grp 會以 reg_data 為主
# 在實作中可以無需從 num_github 或 num_grp 中移除退選者
for i in data:
    # 表示該 i 學號已經退選
    if not(i in reg_data):
        # 將 i 學號分別從 num_gihub 與 num_grp 移除
        try:
            del num_github[i]
            del num_grp[i]
        except:
            # 表示沒有退選者
            pass
#print(num_github)
for i in reg_data:
    big.append([i, num_github[i], num_grp[i]])
#print(big)
# 根據每一 element 的第三個 element sort
big.sort(key = lambda x: x[2])
# big 已經按照組別排序
#print(big)
ungrouped = []
grouped = []
for i in big:
    if i[2] == "":
        ungrouped.append(i[0])
    else:
        # 將組別放到第一位置
        grouped.append([i[2], i[0]])
#print(grouped)
#print(ungrouped)
d = {}
# 逐一檢視 grouped 數列
for i in grouped:
    # 若該組序已存在 d dict 中,
    # 則以 extend() 納入除組序之外的組員學號
    if i[0] in d:
        d[i[0]].extend(i[1:])
        #print("i[0] in d:",i[0], "d:", d)
    else:
        # 若已納分組的 element 中之組序為全新組序,
        # 則將該已納分組的 element 放入 dict 首位元素
        # 準備透過 extend() 納入其他組員學號
        d[i[0]] = i
        #print("i i[0] not in d:", i, "d:", d)
#print("finally d:", d, "d.values():", d.values())
group_member = list(d.values())
# 針對 2a.txt 處理第一時間大組人數超過 8 人者
# 將亂數留下 8 名成員, 其餘組員納入 ungrouped 數列
# grouped 重新回歸空數列
grouped = []
for i in group_member:
    # 連同組序大於 9 表示組員總數大於 8
    if len(i) > 9:
        temp_member = i[1:]
        # 以 shuffle 處理 temp_member
        # 目的在隨機留下 8 位組員, 其餘納入 ungrouped
        random.shuffle(temp_member)
        # i[0] 為組序, temp_member[:8] 為前 8 位組員
        grouped.append([i[0]] + temp_member[:8])
        ungrouped = ungrouped + temp_member[8:]
    else:
        grouped.append(i)
#print(grouped)
#print(ungrouped)
d = {}
# 逐一檢視 grouped 數列
for i in grouped:
    # 若該組序已存在 d dict 中,
    # 則以 extend() 納入除組序之外的組員學號
    if i[0] in d:
        d[i[0]].extend(i[1:])
        #print("i[0] in d:",i[0], "d:", d)
    else:
        # 若已納分組的 element 中之組序為全新組序,
        # 則將該已納分組的 element 放入 dict 首位元素
        # 準備透過 extend() 納入其他組員學號
        d[i[0]] = i
        #print("i i[0] not in d:", i, "d:", d)
#print("finally d:", d, "d.values():", d.values())
group_member = list(d.values())
# group_member 第一位為組序, 隨後為組員學號
#print(group_member)
random.shuffle(ungrouped)
#print("ungrouped:" + str(len(ungrouped)))
grp = 1
group = []
for i in group_member:
    #print("grp " + str(i[0]) + ": num, " + str(len(i[1:])))
    if len(i[1:]) < 8:
        #print("can take " + str(8 - len(i[1:])) + "members")
        # 若仍有學員未納組, 則可根據缺額補入學員學號
        try:
            #print("add " + str(ungrouped[:8-len(i[1:])]))
            i.extend(list(ungrouped[:8-len(i[1:])]))
            # 拿掉已經分配組別的學員學號
            ungrouped = ungrouped[8-len(i[1:]):]
        except:
            #print("no member to add!")
            pass
    else:
        #print("full")
        pass
    # 根據增量決定組序
    i[0] = str(grp)
    group.append(i)
    grp += 1
# 假如各組已經全部補滿 8 人, 但 ungrouped 仍有學員
# 則依序從第一組依序補滿
ord = 0
#print(len(ungrouped))
if len(ungrouped) > 0:
    for i in ungrouped:
        group[ord].append(i)
        ord += 1
#print(group)
# 根據最新的 group 資料更新 num_grp
# 先清空 num_grp
num_grp.clear()
for i in group:
    # 組序為 element one
    grp_order = i[0]
    stud_list = i[1:]
    for j in stud_list:
        # j 為該組組員學號
        num_grp[j] = grp_order
# 列出已經完成分組的結果, 準備更新至 mdecourse/studlist
newstud = []
print("2" + aorb + "\tgithub 帳號\t組別")
for i in reg_data:
    #print(i)
    # i 為學號
    try:
        print(i + "\t" + num_github[i] + "\t" + num_grp[i])
    except:
        newstud.append(i)
print("new: " + str(newstud))
for i in group:
    brython_div <= "第" + str(i[0]) + "組:" + html.BR()
    grp_repo = course + aorb + "g" + str(i[0])
    for num in i[1:]:
        # num 為各組組員學號
        #print(num)
        studhref = "https://"+ str(num_github[num]) + ".github.io/" + course
        repohref = "https://github.com/"+ str(num_github[num]) +"/"+course
        grphref = "https://"+ str(num_github[num]) + ".github.io/" + grp_repo
        grp_repohref = "https://github.com/"+ str(num_github[num]) +"/" + grp_repo       
        brython_div <= "repo: "
        makeLink(repohref, str(num))
        brython_div <= " www: "
        makeLink(studhref, str(num))
        brython_div <= " " + grp_repo + "-repo: "
        makeLink(grp_repohref, str(num))
        brython_div <= " " + grp_repo + "-www: "
        makeLink(grphref, str(num))
        brython_div <= html.BR()
print("done")