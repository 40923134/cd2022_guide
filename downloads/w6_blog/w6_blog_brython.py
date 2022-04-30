from browser import html
from browser import document

brython_div = document["brython_div"]

# 根據 href 與 content 將 html 元件中的 anchor 插入頁面
def makeLink(href, content):
    brython_div <= html.A(content, href=href)
    brython_div <= html.BR()

# 將 2a 學號、帳號與組別的網址設為 studlist_url
aorb = "2a"
studlist_url = "https://mde.tw/studlist/2022spring/" + aorb + ".txt"
# 利用 open() 與 read() 讀出資料
data = open(studlist_url).read()
# 若要 debug 可以查驗所取得的 data 內容
#print(data)
# 利用 split() 函式, 使用每一行的跳行符號\n切割所讀回的資料
# 切割後的 stud 為數列 (list)
stud = data.split("\n")
# 列出去頭(標題)與去尾(空白行)的數列查驗
#print(stud[1:-1])
count = 0
# blog name w6_studno.html
member = []
# 利用 for 迴圈逐一取出數列中的元素(每位學員的資料)
for i in stud[1:-1]:
    #print(i)
    studno, github, grp = i.split("\t")
    #print(studno, github, grp)
    #print(type(grp))
    stud_url = "https://" + github + ".github.io/cd2022/blog/w6_" + studno + ".html"
    url_title = studno + " w6 blog"
    try:
        blog_content = open(stud_url).read()
        makeLink(stud_url, url_title)
    except:
        print(studno + " 尚無 w6 blog!")
    #makeLink(stud_url, url_title)
    # 因為有人沒有組別或沒有登記 github 帳號
    if grp != "" and github != "":
        if grp == "1":
            #print(studno)
            count += 1
    else:
        print("尚未分組者:", studno)
        
print("done")
