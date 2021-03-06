from browser import html
from browser import document
import random

brython_div = document["brython_div"]

# 根據 href 與 content 將 html 元件中的 anchor 插入頁面
def makeLink(href, content):
    brython_div <= html.A(content, href=href)
    #brython_div <= html.BR()

aorb = "a"
url = "https://mde.tw/studlist/2022spring/2a.txt"
course = "cd2022"
# 從 url 讀取資料後, 以跳行符號分割資料進入數列後
# 去除數列中的第一筆與最後一筆資料後可得每位學員所填的資料
# 因為 2a.txt 採用 Windows 跳行符號, 必須使用 \r\n
# 2b.txt 跳行符號為 \n
nextline = "\r\n"
data = open(url).read().split(nextline)[1:-1]
#print(len(data))
#print(data)
# 再以 \t 分割每位學員的資料, 
#可以取得每位學員的學號, github 帳號與組別
big = []
num_github = {}
for i in data:
    stud_no, github, grp_no = i.split("\t")
    #print(stud_no, github, grp_no)
    big.append([stud_no, github, grp_no])
    if github != "":
        num_github[stud_no] = github
    else:
        num_github[stud_no] = stud_no
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
# 針對新的分組與未分組數列, 重新求 group_member
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
# 準備以隨機方式將未分組組員納入未滿 8 名組員之組別
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
            for j in range(8-len(i[1:])):
                i.append(ungrouped[j])
                ungrouped.remove(ungrouped[j])
            #print(ungrouped)
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
