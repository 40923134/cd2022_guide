var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲:  https://github.com/mdecycu/cd2022_guide \n 網站:  https://mde.tw/cd2022_guide \n 課程倉儲與網站: \n https://github.com/mdecycu/cd2022 \n https://mde.tw/cd2022 \n 網路設定: \n 由於目前電腦輔助設計室中的電腦只要將網路連接到系上的主幹 (因為課程要全面在純 IPv6 網段上運作), 直接連外, 電腦中就會有蠕蟲程式啟動攻擊(Why?, 如何找到攻擊源頭?), 造成操作系統所安裝的防毒軟體為了防堵惡意攻擊而關閉網路連線. \n 為因應上述問題, 可以在切換至連外網段後, 將系統的代理主機自動偵測關閉, 且自行設定能夠支援 IPv6 與 IPv4 的代理主機, 並且關閉網路卡的 IPv4 網路協定, 就可以避開惡意軟體的攻擊. \n 若要在開機後, 防毒軟體啟動前, 以批次檔案的執行, 自動完成上述三項設定, 可以參考: \n 電腦輔助設計室  IPv6 網路設定 \n 分組: \n 利用 Ethercalc 收集各班學員的 Github 帳號與組別, 存入  https://github.com/mdecycu/studlist/tree/main/2022spring \n 各學員若 github 帳號有更動, 可以自行至  https://github.com/mdecycu/studlist \xa0 倉儲, 以 pull requests 進行修改. \n 以 2b 為例, 每一大組 8 人, 且分為兩個 4 人小組, 目前可以透過  http://mde.tw/studlist/2022spring/2b.txt  讀取. 且透過  read_data_from_nfulist.py  可以在近端讀取各班學員的 github 帳號與組別. \n 目前碰到的問題是: \n 能不能透過隨機方式自動幫尚未納組的學員分組? \n 能不能直接在網站上顯示出各學員的 cd2022 課程倉儲與網站? \n 參考:  grp_2022 ,  2a 分組程式練習 ,  2b 分組程式練習 \n 下載課程工具: \n 協同產品設計實習課程將會用到 NX1980, 若在電腦輔助設計室, 可以直接從  http://wcm.cycu.org:88/  下載. \n NX12 版 (2017.10) 之後的版號: \n 2019.01: NX1847 開始啟動 Continuous Release \n 2019.06: NX1872 啟動每半年釋出一個累加 27 的 Series 版次號. \n 2019.12: NX1899 = NX1872 + 27 \n 2020.06: NX1926 = NX1899 + 27 \n 2020.12: NX1953 = NX1926 + 27 \n 2021.06: NX1980 = NX1953 + 27 \n 2021.12: NX2007 = NX1980 + 27 \n 2022.06: NX2034 = NX2007 + 27 \n 讀取各學員每週工作內容: \n 當完成分組後, 且各學員已經透過各自 Github 帳號下的 cd2022 倉儲開始執行課程任務後, 能否透過程式逐日或逐週讀取各學員的工作內容? \n 課程第一階段要求: \n 每一個大組都要設法提供 solvespace, NX1980 格式的  uarm  (Onshape 格式) 機械手臂零組件. \n cd2022_uarm_nx12_imported.7z \n \n \n \n \n Please enable JavaScript to view the  comments powered by Disqus.', 'tags': '', 'url': 'About.html'}, {'title': 'IPv6', 'text': '電腦輔助設計室  IPv6 網路設定 \n 手機、筆電或平板可以透過 810WIFI 無線網路接點連線, 取得系網 IPv6 連外網址與 IPv4 NAT 內部網址. \n 智慧財產局學校行政與電算中心篇 \n 如何避免惡意軟體的侵害 ? \n 問題: \n 為何不使用 NAT 機制, 而讓電腦輔助設計室中的電腦直接連上外部網路? \n 因為與 IPv4 協定比較, IPv6 協定安全性較高, 且直接連外可取得較大頻寬, 無需採 port mapping 就可啟動 IPv6 協定伺服器. \n 使用 IPv6 連網有哪些好處? 有沒有壞處? \n 好處如上, 而壞處是若要連線到只支援 IPv4 協定的網站, 需要透過雙協定支援的 Proxy, 其中包括 http(s) 與 git. \n 如何使用批次檔案完成 IPv6 網路設定, 避開惡意軟體的網路攻擊? \n 請參考  IPv6 網路設定  說明. \n', 'tags': '', 'url': 'IPv6.html'}, {'title': 'template and SSH', 'text': '以下教學影片說明如何利用  https://github.com/wcm2022/wcm2022  倉儲作為 template, 建立個人與分組的倉儲. 並且利用 putty 與 GIT_SSH 變數的設定, 採用 SSH 網路協定對 Github 上的倉儲進行改版: \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'template and SSH.html'}, {'title': 'Grouping', 'text': 'cd2022  課程由學員自行分組, 每四人為一小組, 每兩小組組成一大組. \n 所有課程指定內容可由各小組組員討論 (每週至少開會一次, 且將小組討論過程與結論放入各小組分組倉儲) 後, 在個人所負責的項目執行完成後, 先納入個人 cd2022 倉儲後, 再依照組序整合至該小組組長的協同倉儲 (例如: 甲班第一大組的第一小組倉儲名稱將為: cd2022ag1-1, 甲班第一大組的第二小組倉儲名稱將為: cd2022ag1-2). \n 各大組成員每兩週在上課之前必須至少開會一次, 且將大組討論過程與結論放入各大組分組倉儲後 (例如: 甲班第一大組的倉儲名稱將為: cd2022ag1), 比較並統整各小組所完成的內容後, 將協同設計結果納入各大組的分組倉儲, 且各大組每兩週將利用課程時間進行網際協同分組簡報. \n 問題: \n 為什麼需要定期進行分組簡報? \n The Importance of Presentation Skills in Institutions of Higher Learning.pdf \n The 7 Main Reasons Why People Give Presentations.pdf \n 以下 Brython 程式可讀取各大組的學員分組資料後, 直接在網頁中列出各學員 cd2022 倉儲與網頁連結、各小組協同倉儲與網頁連結、以及各大組協同倉儲與網頁連結. \n 請注意: 各組學員 github 帳號下除建有個人 cd2022 倉儲外, 還必須 fork 大組倉儲 (例如: 甲班第一大組的倉儲名稱將為: cd2022ag1) 並在各大組進行網際協同分組簡報前, 與所屬大組的分組協同倉儲內容保持同步. \n grp_2022.py  ( run ) \n w4_2a_get_grp1_num_of_members.txt \n w4 2a 分組結果 \n', 'tags': '', 'url': 'Grouping.html'}, {'title': 'Pull requests', 'text': 'cd2022  (cd 為 collaborative design 縮寫) 協同產品設計實習課程的修課學員名單、Github 帳號與大組分組組別資料, 以 Tab (即 \\t) 隔開 ( 2a.txt  與  2b.txt ), 採用倉儲儲存, 再透過 Github Pages, 能讓任何成員從全球資訊網介面: \n http://mde.tw/studlist/2022spring/2a.txt \n http://mde.tw/studlist/2022spring/2b.txt \n 讀取資料內容. \n 採用 Github 存放各班學員相關資料的好處, 是可以讓學員自行透過 Pull Requests 的方式協同管理資料內容, 除能讓資料始終保持正確外版本. 當學員的 Github 帳號或組別有異動時, 能夠自行維護並留下改版紀錄. \n 協同產品設計流程中最重要的概念是: 如何運用各種永續的方法, 讓產品設計的各階段工具與終端產品, 皆能採有效率的方式因應可能遭遇的變化. \n \n 利用 wcm2022 帳號修改  https://github.com/mdecycu/studlist  中的組別資料, 作為 pull request 範例. \n 動態網頁嵌入 Wink 影片的參考 html:  2a_w3_studlist_pull_requests_wink_html.txt \n 以下影片說明如何利用 Pull Requests 對沒有協同管理權限的 github 倉儲進行改版後, 要求合併內容: \n \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n \n 以下影片說明如何透過逆向 Pull Requests 讓各學員帳號下的分組倉儲與組長帳號下的協同倉儲內容保持同步: \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Pull requests.html'}, {'title': 'Revealjs', 'text': 'https://revealjs.com/  是一個 Javascript 程式框架, 可用來建立全球資訊網上的簡報. \n 將 reveal.js 納入分組倉儲的真正目的, 是能直接在統一的 GitHub 提交推送過程中, 持續查核各組員對於協同產品開發流程的貢獻度. \n 至於為何要利用 markdown 格式, 在 Leo Editor 中轉為 index.html 進行展示, 是希望在組員改版間避開以 html 格式處理衝突的難度. \n 課程中所採的各種方法並非限制, 而是在衡量協同利弊得失後的可行方法之一.你們可以就各種工具在協同產品設計流程中的應用. 進行討論及實作, 然後查驗所採行的方法是否也能: \n \n 持續改進 \n 保有各組員的改版紀錄 \n 方便處理合併及展示 \n 具永續性及可應變性 \n \n https://github.com/hakimel/reveal.js  引用了許多 Javascript 程式庫, 這些程式庫的改版非常頻繁, 經常造成改版頻率相對緩慢的  cmsimde  經常收到來自 Github 的改版通知. \n 因此在利用  cmsimde  建立 cd2022 課程網站與大分組網站時, 若要直接使用 Reveal.js 建立線上簡報, 就必須將\xa0 cmsimde  的 reveal 目錄內容保持在最新的 Reveal.js 版本. \n https://github.com/mdecycu/cmsimde_site  就是用於開發  cmsimde  的倉儲. cmsimde_site 的 main 分支直接將  cmsimde  內容放入 cmsimde 目錄, 可以直接根據需求修改其中的任何內容, 當測試無誤後(尚未使用  unittest ), 將改版內容反應至  cmsimde  後, 將在 cmsimde_site 倉儲中的 submodule 分支中進行測試. \n 由於 cmsimde_site 的 main 分支直接將 cmsimde 當作子目錄, 而 submodule 分支則將 cmsimde 當作子模組. 從 main 分支切換到 submodule, 由於需要同時取下 cmsimde 子模組資料, 因此使用: \n git checkout -f submodule --recurse-submodules \n 而從 submodule 分支切換回 main 分支, 則使用: \n git checkout -f main \n cmsimde  倉儲中的 config/reveal.leo 使用  Leo Editor  編輯各簡報頁面內容. reveal.leo 中包含 demo.html 中的各種簡報應用, 使用者可以從 Leo Editor 專案中取出所需的簡報頁面進行編輯. \n 以下影片說明如何利用 Leo Editor 編輯 config/reveal.leo 網際簡報檔案: \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n \n 以下影片說明如何利用 Leo Editor 編輯 config/pelican.leo 網誌檔案: \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Revealjs.html'}, {'title': 'Meeting', 'text': 'https://www.atlassian.com/blog/teamwork/how-to-run-effective-meetings \n Most of us don’t have formal training in meeting management skills, but anyone can learn to do it well – whether your team is in the office, fully virtual, or hybrid. \n An efficient meeting starts promptly, stays on track due to good time management, includes as few people as possible, and achieves the stated objective. \n An effective meeting brings a thoughtfully selected group of people together for a specific purpose, provides a forum for open discussion, and delivers a tangible result: a decision, a plan, a list of great ideas to pursue, a shared understanding of the work ahead. Not only that, but the result is then shared with others whose work may be affected. \n Successful meetings have a clear purpose. \n Meetings should never be held for the sole purpose of sharing information – that’s what email, chat, and company intranets (e.g., Confluence) are for. Department and company all-hands meetings are a notable exception. They provide a unique chance for people at all levels of the business to hear directly from executives and other decision-makers – and, if you include time for Q&A, vice-versa. \n In the best-case scenario, a meeting’s purpose is to make a decision or create something collaboratively. Project planning, mapping out customer journeys, setting goals, solving a problem, choosing X vs. Y … all these are situations where holding a meeting is probably the most effective way to get it done. \n Effective meetings keep attendees engaged. \n Effective meetings provide a safe space for divergent thinking. \n Effective meetings produce real, shareable results. \n https://www.nytimes.com/guides/business/how-to-run-an-effective-meeting \n Set the Agenda \n Start on Time. End on Time. \n End with an Action Plan \n https://hbr.org/1976/03/how-to-run-a-meeting \n https://slack.com/blog/productivity/run-effective-meetings \n https://www.scoro.com/blog/tips-for-effective-meeting-management/ \n 結論是: 在協同產品設計流程, 該如何開會? \n', 'tags': '', 'url': 'Meeting.html'}, {'title': 'TEX and LaTeX', 'text': '為什麼協同產品設計實習需要採用 TEX 與 LaTeX 輸出技術文件? \n https://github.com/mdecycu/4072pj1/blob/master/.github/workflows/main.yml \n https://dev.to/mrturkmen/latex-with-github-actions-4580   \n https://www.reed.edu/cis/help/LaTeX/intro.html   \n https://ftp.ntou.edu.tw/ctan/info/gentle/gentle.pdf \n http://tug.ctan.org/info/impatient/book.pdf \n https://texdoc.org/serve/TeXbyTopic.pdf/0 \n', 'tags': '', 'url': 'TEX and LaTeX.html'}, {'title': 'Assignments', 'text': '協同產品設計實習課程學員評分要點: \n sustainable (可持續使用, 永續): \n 1 : capable of being sustained (可持續) \n 2a : of, relating to, or being a method of harvesting (獲取成果) or using a resource (運用資源) so that the resource (該資源) is not depleted (不致枯竭) or permanently damaged (永久損壞). \n 2b : of or relating to a lifestyle involving the use of sustainable methods (採取永續的生活方式) \n 在 cd2022 課程 sustainable 代表所採行的解題方式,  為所有分組組員認可是當下環境中, 最佳處理方式與流程, 可作為其他分組學習並能在課程各階段任務中延續使用 . \n resilience (應變能力, 韌性): \n 1 : the capability of a strained body (承受應變物體) to recover its size and shape after deformation caused especially by compressive stress (尤指受到壓縮應力) \n 2 : an ability to recover (回復能力) from or adjust easily (易於調適) to misfortune or change (面臨意外情境或變化) \n 在 cd2022 課程 resilience 代表 各分組成員需具備一定的應變處理能力 . \n 20220302 工作流程: \n \n 將 cadlab 網路連線接到系 backbone (使用純 IPv6 設定後, 為了連結到 IPv4 網站, 必須透過雙協定支援的 proxy server) \n 將兩個隨身碟放入電腦 USB 3.0 插槽 (與 2.0 速度差 10 倍) \n 啟動電腦 \n 在 Windows 10 尚未啟動防毒軟體之前, 以系統管理員身分執行 1_ipv6_network_setup.bat (為了避開蠕蟲惡意的網路攻擊) \n 批次檔案將會開啟 Firefox 連結到 cd2022 課程網頁與倉儲 \n 希望修改 cmsimde 倉儲內容, 以 git clone --recurse-submodules git@github.com:mdecycu/cmsimde.git 取下倉儲資料時, 電腦回報沒有 correct access rights \n 上個步驟表示 putty session github.com 並沒有設定, 可帶出上週在 cdb 從 registry 匯出的 2022_cdb.reg, 直接以滑鼠點擊執行後, 再次執行 git clone --recurse-submodules git@github.com:mdecycu/cmsimde.git 取下 cmsimde 倉儲 \n 但 cmsimde 無法直接產生靜態網頁與動態網頁, 因此以 cmsimde_site 倉儲納入 cmsimde 程式碼, 進行修改後, 將資料回應至 cmsimde \n 需要新增 github 倉儲, 因此必須登入 github.com 建立 cmsimde_site 倉儲 (能不能直接在近端使用 ssh 與程式建立 github 倉儲?) \n 因為要取 2a 學員 github 帳號, 以 ssh 登入 .17 電腦, 啟動 ethercalc \n 由於必須從教務主機取得 2a 學員學號, 經由 heroku 雲端主機取得  https://nfulist.herokuapp.com/?semester=1102&courseno=0752&column=True \n 連接至 cd2022 gitter, 告知擷取 2a github 帳號的 ethercalc 表單連結 \n cd2022 要求每一學員必須在 github 帳號下建立 cd2022 倉儲與網頁, 並且由各小組組長建立 cd2022ag1-1 (為第一組第一小組), 且每位學員在 cd2022ag1-1 都擁有 git push 權限, 或採 pull requests 方式修改小組分組倉儲內容 \n 而每一大組的組長負責建立 cd2022ag1 (為 2a 第一大組為例) 後, 各大組學員對分組倉儲可以擁有 git push 權限, 或各學員採 pull requests 方式修改大分組倉儲內容 \n 各學員在每週會議後, 個人所負責完成的內容或簡報必須先放到個人的 cd2022 倉儲後, 再透過小組協同倉儲練習如何解決組員間提交內容的衝突後, 再整合至各大組的協同倉儲. \n 接著要從 ethercalc 取下 2a 學員的 github 帳號與大組分組資料, 並存入 studlist 倉儲 (能不能用程式協助?) \n \n 2a w2 assignments: \n 1. 在個人帳號下, 使用 最新版的 cmsimde  建立 cd2022: \n 以子模組的方式建立倉儲: \n git submodule add https://github.com/mdecycu/cmsimde.git cmsimde \n 或者直接將 cmsimde 倉儲作為 cmsimde 目錄: \n git clone --recurse-submodules https://github.com/mdecycu/cmsimde.git \n 然後再將沒有 git 版本資料的 cmsimde 目錄放到個人倉儲. \n 2. 根據  https://mde.tw/cd2022_guide/content/Grouping.html \xa0 中的 2b 程式執行, 配合  https://mde.tw/studlist/2022spring/2a.txt  修改為能夠直接在頁面顯示各組員的 cd2022 倉儲與網頁連結, 以及各學員協同大分組倉儲與網頁連結 (例如: cd2022ag1). 3. 能否透過 github api 程式 (也可以逐一進入各班組員 github 帳號, 以手動查驗後, 以表格列出結果), 列出 w2 階段各組員帳號下 cd2022 與 cd2022ag1 (以 2a 第一組組員為例) 是否符合陽春的 cmsimde_site 內容. (例如: 透過  https://github.com/PyGithub/PyGithub ) \n 2bw2: \n 建立個人 cd2022 與 cd2022bg1 (以 2b 第一大組為例) 時, 可以用 import  cmsimde_site  倉儲 (但 history 將會是 mdecycu 而非學員), 或 git submodule add 或直接將 cmsimde 下載  https://github.com/mdecycu/cmsimde/archive/refs/heads/master.zip  後解開為倉儲下的 cmsimde 目錄, 之後再將 up_dir 內容複製到倉儲根目錄. 當評分檢查時, 各大組需繳交全班各學員是否達成任務要求. \n cd2022 w2 任務 1: \n 請各組利用一個小時建立一個欄位以 tab 隔開的 txt 檔案, 欄位標題分別為學號, 個人倉儲, 大分組倉儲排列, 按照各班學員學號順序 ( 2a 修課學員 ,  2b 修課學員 ). 完成後請各大組將結果回應至  2b w2 討論區 .', 'tags': '', 'url': 'Assignments.html'}, {'title': '各週任務', 'text': 'w2 任務: \n 問題緣起: \n 第二週的任務 啟動源頭 來自課程實際分組時所產生的問題. \n 各班利用 Ethercalc 表單同步輸入 github 帳號與組別時, 將資料存入  https://github.com/mdecycu/studlist \xa0 倉儲. \n 經由 Github Pages 設定後, 可由  https://mde.tw/studlist/2022spring/2a.txt  讀取甲班的學員帳號及分組資料 (各欄位以 tab 隔開), 而從  https://mde.tw/studlist/2022spring/2b.txt  則可讀取乙班的學員帳號及分組資料. \n 指定任務: \n 請學員以全球資訊網頁的 URL 讀取各班資料後, 是否能夠以永續便捷的方式取得已經選好組別的 學員學號 、學員 個人倉儲連結 、學員 個人網站 、各組位於學員帳號下的 大組倉儲 以及各學員帳號下各大組的 協同網站 . \n 而針對尚未填入 github 帳號的學員, 以其學號作為其 github 帳號. 針對尚未列出分組序號的學員, 則委由隨機方式編入尚不足 8 名學員的組別, 若各組已經都補滿 8 名學員, 仍餘有尚未分組的學員時, 則採隨機方式從各班第一組依序補入各組後, 分別在個人及大分組的 w2 標題頁面中, 列出各大組與全班的上述要求資料. \n 到了 w4 各班學員分組已經底定, 若採 Brython 方式(全球資訊網前端)將學員資料讀出後進行排序與整合, 可以如  https://mde.tw/cd2022_guide/content/Brython.html  中, 直接在網頁上即時列出與  https://mde.tw/studlist/2022spring/2a.txt  及  https://mde.tw/studlist/2022spring/2b.txt  對應的學員倉儲與網頁連結, 以及各學員帳號下的大組同步倉儲與網頁連結. \n 接下來若要採 CPython (全球資訊網後端或  CLI/GUI  模式)在 Windows 環境中執行運算, 該如何進行? \n w3 任務: \n 問題緣起: \n w2 完成分組後, 各組即進入利用 NX1980 繪製 uArm 機械手臂的協同設計階段, 其中包括手臂兩側的正齒輪減速機設計, 以及各連桿與組立所需要的其他組件設計等 (完成圖如  Onshape 中的 uArm 組立圖 ). \n cd2022_uarm_nx12_imported.7z \n uArm 機械手臂的初步設計目的, 是完成 NX1980 組立圖後, 能轉入 Coppeliasim 環境中進行機電系統組合模擬, 讓操作者透過  Custom UIs 介面 操控四個自由度的 uArm 步進伺服馬達. \n 指定任務: \n 這裡 有 38 個比較接近 NX1980 版本功能的教學影片 ( 連結 ), 請以每一學員分配 5 個影片的原則, 由各學員在 w3 標題頁面中, 根據影片中的教學內容, 以 Wink 影片互相對照的方式採 NX1980 執行操作進行整理, 完成後請將所負責的 Wink 教學影片嵌入個人與大分組的 w3 標題頁面中. \n w4 各班上課時段前 , 請各小組與大組成員分別開會討論後, 採協同設計流程執行上述任務, 並準備在 w4 上課時段中直接利用網頁簡報呈現各大組的執行流程與結果.', 'tags': '', 'url': '各週任務.html'}, {'title': 'w6 任務', 'text': '2a w6 blog 查驗 \n 2a_stage1.txt \n 2a_stage2.txt \n 2a_stage3.txt \n 2b w6 blog 查驗 \n 2b_stage1.txt \n 2b_stage2.txt \n 以下影片說明如何利用 Leo Editor 編輯 config/pelican.leo 網誌檔案: \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w6 任務.html'}, {'title': 'w7 任務', 'text': '2a w7 summary 查驗  ( 2a 有網誌者 ) \n 2b w7 summary 查驗  ( 2b 有網誌者 ) \n 為了讓各組設計中的 uArm 機械手臂 ( cd2022_uarm_nx12_imported.7z ) 能夠透過 Pick and Place 控制流程參與  Tic-Tat-Toe 遊戲 , 本週將進行下列實習任務: \n 請利用隨身程式系統編譯  https://github.com/mdecourse/scarysim  中的 SCARA robot 模擬系統. 完成此 Qt C++ 程式碼的編譯與操作後, 接著請完成 CoppeliaSim 範例中  MTB robot  所進行的  Pick and Place demo . \n 設法以隨身程式系統編譯此程式碼: \n \n git clone  https://github.com/mdecourse/scarysim.git \n 修改 scarysim.pro, 蓋掉第 11 行, 成為 # LIBS\xa0\xa0\xa0\xa0 += -lglut -lGLU \n cd scarysim \n qmake -o Makefile scarysim.pro \n mingw32-make -f Makefile.Release 可以在 release 目錄取得 scarysim.exe \n 因為 scarysim.exe 執行需要 base.obj, arm1.obj, arm2.obj, arm3.obj 等零件外型檔案, 以及對應的 .mtl 材質檔案, 因此可將 scarysim.exe 移至倉儲根目錄, 並且需要 msys64_20210419\\mingw64\\bin 路徑中的 dll 動態連結程式庫配合執行. \n 由於此套程式碼在 Target 模式下, 零組件間會造成干涉, 表示其 Inverse Kinematic 運算並不正確, 請設法修正此錯誤後, 修改其零件尺寸與操作控制方法, 設法模擬 MTB 的  Pick and Place demo  範例. \n 請各組指定組員分別利用 Solvespace、NX12、NX1980、NX2008 與 Onshape 繪製  Pick and Place demo  範例所需的零組件, 並完成 Coppeliasim 4.1.0、4.2.0 與 4.3.0 版的 MTB 機械手臂 Pick and Place 模擬, 完成後請說明在使用不同 MCAD 系統與版次的情況下, 該如何執行協同產品設計專案. \n \n Deliverables : \n \n 各組組員以 Pelican 網誌 (w7_pick_and_place.html) 及 Reveal.js 簡報紀錄個人所完成的內容. \n 各大組以 Pelican 網誌 (w7_pick_and_place.html) 及 Reveal.js 簡報摘要各大組任務執行結果. \n 各大組將所有完成的程式碼、編譯結果、MCAD 零組件檔案以及場景模擬檔案壓縮為 .7z (以 2ag1 大分組為例, 檔案名稱設為w7_pap_cd2022ag1.7z) 後, 送到組長的 @gm 帳號下的  OneDrive  共享區, 設定為只有 @gm 帳號登入者可以下載的共用權限後, 將連結發布在大組的 Pelican 網誌中. \n 各大組以程式方法執行上述任務的量化查驗後, 結合組員自評與互評流程後, 將各組員的評量結果存為 w7_cd2022ag1_evaluation.txt (以 2ag1 為例), 採允許各組組員與 yen@gm 共享下載進行設定. \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w7 任務.html'}, {'title': 'w7_summary', 'text': "2a w7 summary 查驗  ( 2a 有網誌者 ) \n 2b w7 summary 查驗  ( 2b 有網誌者 ) \n 請各大組在分組 blog 區域加入一個 Slug: w7_summary 的工作摘要說明, 將本週課堂上每位組員的工作內容與進度列在網誌中, 並以連結導引至各組員的個人網站中. \n 請各大組在摘要網誌中回答下列問題: \n \n 如何集結各大組組員在各週所完成的工作進度? \n 為何要在大組倉儲中建立 Reveal 投影片與 Pelican Blog? ( git blame 用法 ) \n 可以利用 Leo Editor 延續開發  scarysim  程式功能嗎? (與  VScode  比較, 或者直接在 VScode 中使用 Leo Editor,  leointeg ) \n \n 假如在各大組倉儲的 downloads 目錄中針對每週的任務進行分類, 例如: 建立 downloads/w7 目錄, 讓各組組員利用 users/學號.leo 編寫個人有關的 blog 或其他相關資料的導入或引用, 如此, 就可以在上課階段 (stage1) 或次週上課前 (stage2), 以手動或程式方法集合各組員的 blog, reveal 或 cmsimde 內容, 經過人工查核後, 直接發布在各大組的網頁、網誌或簡報上. \n 協同重點: \n \n 各組員負責維護各自的 users/學號.leo, 每次提交推送並不會產生衝突. \n 經由 users/學號.leo 建立 downloads/w7 目錄中, 各組員根據學號或主題所提交推送的網誌、網頁或簡報片段資料, 若產生衝突, 將會比較容易進行檢查與合併. \n 透過已經處理衝突後的 downloads/w7 目錄資料, 由人工或程式集結各段落內容, 可以減少解決衝突的難度. \n \n Leo Editor 常用大綱標題指令: \n @path \n @edit 檔名 \n @clean 檔名 + sub-outline 中的 @others \n @auto 檔名 \n @button \n @path mardown 表示隨後的 sub-outline 路徑都將位於 markdown 目錄之下. \n @edit myfile.md 表示存檔後, 將在此節點所對應的路徑下, 修改或新建 myfile.md 檔案. \n @clean myfile.md 表示存檔後, 將在此節點所對應的路徑下, 結合其子節點與上層 @others 所在位置的所有內容, 修改或新建 myfile.md 檔案. \n 以下程式片段, 存於節點對應的內容區後, 按下 ctrl + b 可以執行. \n '''Recursively import all python files in a directory and clean the result.'''\n\nc.recursiveImport(\n    dir_ = r'./',\n    kind = '@clean', \n    safe_at_file = False,\n    theTypes =  ['.py']\n) \n Reference: \n https://leoeditor.com/tutorial.html \n", 'tags': '', 'url': 'w7_summary.html'}, {'title': 'w8 任務', 'text': '任務一: 請依照下列步驟編譯 simExtMtb plugin 專案: \n w7_project.7z \n 編譯  simExtMtb  plugin: \n 針對 simExtMtb.pro: \n \n CoppeliaSim 4.1.0 原始碼編譯專案  (登入 @gm OneDrive 後下載). \n E:\\downloads\\cop410\\programming\\simExtMTB>qmake -o Makefile simExtMtb.pro \n E:\\downloads\\cop410\\programming\\simExtMTB>mingw32-make -f Makefile.Release \n 在 release 目錄中取得 simExtMtb.dll, 啟動前放入 Coppeliasim 根目錄. \n \n 任務二: 請各組依照下列零件檔案, 將組員分為三組, 分別以 Solvespace, NX (12, 1980 或 2008) 及 Onshape, 完成各零件工程圖與組合圖後, 將 uarm 組合件轉為 STL 格式後轉入 CoppeliaSim, 並安排以 GUI Slider 方式控制前三軸作動. 各組員需將零組件繪製過程與 CoppeliaSim 操控流程及心得, 寫為 Pelican Blog 與 Reveal.js 簡報, 並在期中考週將個人與分組網誌與簡報流程透過 Wink 製作為 mp4 影片嵌入個人與分組網頁, 流程中的 cmsimde 頁面命名為 H1 midterm, 而網誌命名為 midterm.html, 簡報則採 index.html 命名. \n Onshape 中的 uArm 組立圖 \n cd2022_uarm_nx12_imported.7z \n \n uarm 末端連桿尺寸: \n', 'tags': '', 'url': 'w8 任務.html'}, {'title': 'Solvespace', 'text': '根據  https://mde.tw/cad2021/content/Compile%20Solvespace.html  中的說明, 可以利用  compile_copsim_for_cd2022.7z  (file size: 5 GB, extracted size: 17.3 GB), 完成編譯. \n 自行編譯 Solvespace 的目的是希望透過  https://www.coppeliarobotics.com/helpFiles/en/xmlFormat.htm  與  https://www.coppeliarobotics.com/helpFiles/en/importExport.htm  的資訊, 自行在 Solvespace 中將組立檔案直接轉入 Coppeliasim 的場景檔案. 其中牽涉如何將 Solvespace 組立件中的零件檔案進行分割後, 以  STL 、 URDF  或  SDF  格式直接轉入 Coppeliasim.', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'NX', 'text': 'https://www.plm.automation.siemens.com/global/en/products/nx/   \n https://www.plm.automation.siemens.com/global/en/products/nx/nx-for-design.html   \n https://en.wikipedia.org/wiki/Siemens_NX  ', 'tags': '', 'url': 'NX.html'}, {'title': 'NX12', 'text': 'NX12 於 2017.10 釋出, 完整安裝容量約 18 GB. \n NX 自 NX10 之後支援 NXOpen Python API: \n https://docs.plm.automation.siemens.com/data_services/resources/nx/10/nx_api/en_US/custom/nxopen_python_ref \n https://docs.plm.automation.siemens.com/data_services/resources/nx/12/nx_api/custom/en_US/nxopen_python_ref \n 利用  https://github.com/cjrh/easycython  將 .pyx 轉為 .pyd 後, 由 .py 導入後執行, 可 提升  Python 程式的執行速度. ( 參考 ) \n References: \n cd2022_uarm_nx12_imported.7z \n https://slideplayer.com/slide/11624773/ \n NX Customization and Programming Discussion \n https://docs.plm.automation.siemens.com/data_services/resources/nx/12/nx_api/common/en_US/graphics/fileLibrary/nx/nxopen/nxopen_getting_started_v12.pdf \n https://docs.plm.automation.siemens.com/data_services/resources/nx/12/nx_api/common/en_US/graphics/fileLibrary/nx/snap/SNAP_Getting_Started_v12.pdf \n', 'tags': '', 'url': 'NX12.html'}, {'title': 'NX1980', 'text': "NX1980 於 2021.06 釋出, 完整安裝容量約 28 GB. \n NX1980 參考頁面: \n 有關 Siemens NX 的歷史, 請參考  https://en.wikipedia.org/wiki/Siemens_NX \n https://mde.tw/cd2022/content/NX1980.html \n 假如在系上網段, 可直接從  http://wcm.cycu.org:88  下載. \n http://wcm.cycu.org:88  中目前有三個與可攜 Python 程式有關的檔案, 有何差別, 建立的目的為何? \n 請注意: 以下的 .7z 檔案下載, 只允許在系上網段上下載 . \n compile_copsim_cd2022.7z \xa0(file size: 5 GB, extracted size: 17.3 GB, 包含除了 NX1980 之外的所有課程相關可攜程式套件, 是專門為  cd2022  課程學員打造的套件). \n portable_python_wcm2022.7z  (file size: 513 MB, extracted size: 17.3 G, 這是專門為  wcm2022  課程打造的可攜程式套件, 適合選修學員下載後在任何 Windows 10 中以隨身碟啟動後操作) \n drive.7z  (file size: 2.6 MB, extracted size: 10 MB, 只包含 PUTTY, tcc, wscite 與 tmp 目錄, 採用 Hybrid 方式設定, 可與目前電腦輔助設計室中 SSD 硬碟所安裝的 Python 3.9.5 與  Portablegit  結合, 使用者只需自行設定啟動後的 home_ipv6 目錄與 home_ipv6/Desktop 目錄後即可以最輕薄便捷的方式將 SSH key 存入隨身碟, 並將個人與分組倉儲存入隨身碟啟動後的 tmp 目錄進行操作). \n 問題: \n http://wcm.cycu.org:88  是如何建置的? (採純 IPv6 設定, 且只允許特定網段下載) \n 使用  Nginx , 採用如下設定: \n worker_processes  1;\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n    sendfile        on;\n    keepalive_timeout  65;\n    server {\n        # port 80 僅開啟 IPv6 網路連線\n        listen       [::]:80 default ipv6only=on;\n        # 伺服器的符號名稱\n        server_name  xxx.xxxx.xxx;\n        return       301 https://$server_name$request_uri;\n    }\n\n   server {\n       # 同時開啟 IPv4 與 IPv6 連線, port 設為 88\n        listen       [::]:88 ipv6only=off;\n        listen       88;\n       # 允許系上 IPv4 網段連線\n        allow 140.xxx.xx.0/24;\n       # 允許特定單一 IPv4 電腦連線\n        allow xxx.xxx.xxx.xx;\n       # 允許系上 IPv6 網段連線\n        allow 2001:xxx:xxxx:xx::0/32;\n       # 其餘網段禁止連線\n        deny all;\n        location / {\n            # 根目錄設定\n            root X:/xxxxxx/xxxx/spring2022;\n            }\n        # 開啟 autoindex, 連線後會列出目錄下所有檔案內容\n        autoindex on;\n    }\n} \n 可攜 NX1980 是如何建立的? \n 利用  UniExtract2  將 NX1980 安裝檔案解開後, 透過批次檔案設定啟動. \n 如何讓 NX1980 認證伺服器 IPv6 相容? \n 開啟伺服器的 IPv6 網路連線. \n Siemens NX 套件更新頻率? \n 請參見  Updating the NX Installation . \n 每 6 個月釋出一個大改版, 每個月則各有一次小改版. \n NX1980 為 2021/06 釋出的版本. 目前 2022/03 最新版本為 2007 系列 ( What's new 2022/02 影片 ), 其他各版資訊請參考  https://nxcadtips.com/docs/list-of-nx-versions-with-documentation-links/ \n 如何學習利用 NX1980 進行 3D 零組件設計繪圖? \n NX1847 nx_help \n NX1980 線上 Documentation \n NX1855-1919 零組件設計繪圖 教學影片 \n 此一系列教學影片共有 38 個影片檔, 請各大組學員分別認領五個教學影片後, 以 Wink 製作教學影片後, 先將影片放入各自的 cd2022 網站中的 NX1980 H1 頁面中, 然後再整合至各小組與大組的協同網站中. \n 有關電腦輔助設計室 IPv6 網路設定流程, 可以利用手機參考 設定教學 後, 利用隨身碟中的 批次檔案 進行設定. \n 此階段的 NX1980 uArm 機械手臂零組件繪圖目的, 希望能以 NX1980 繪製 uArm ( Onshpae 中的 uArm 組立檔 , 使用者可以在手機中安裝 Onshpe App ( Android ,  iPhone ) 後開啟 uArm 組立檔) \n cd2022_uarm_nx12_imported.7z \n NX1980 如何取得啟動授權? \n 系上購買的 NX1980 教育版是透過網路連線取得啟動授權, 意即啟動 NX1980 時, 必須連接到系上的伺服器取得授權後, 才能開啟. \n 假如是在校外, 可以透過 IPv4 或 IPv6 網路連線取得授權, 若在協同產品設計實習上課時段, 則只能透過 IPv6 協定連網, 因此使用者可以在 start_NX1980.bat 多台授權伺服器如下: \n set SPLM_LICENSE_SERVER=port@IPv4_server_address;port@[IPv6_server_address] \n 就能同時在不同網路連線情況下, 啟動 NX1980. \n 以下的 bat 檔案, 能夠同時啟動 Python, Msys2 以及 NX1980: \n start_ipv6_nx1980_bat.txt \n 其中 Msys2 可用來編譯 Solvespace、SciTE、Fossil SCM 以及 CoppeliaSim, Python 可用來啟動個人動態與靜態網頁, 並透過 Leo Editor 編輯 Reveal.js 簡報.", 'tags': '', 'url': 'NX1980.html'}, {'title': 'Start_NX1980', 'text': 'NX1980 series 為 2021.06 的版本. \n 啟動 NX1980 全部模組, 容量約 28.6 GB. \n start_nx1980_all.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py373\\DLLs;%Disk%:\\py373\\Lib;%Disk%:\\py373\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py373\n\nset path_python=%Disk%:\\py373;%Disk%:\\py373\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\nREM for NX1980\nREM use ipv6\nset FNP_IP_PRIORITY=6\nset UGII_BASE_DIR=%Disk%:\\NX1980\nset TMP_DIR=%Disk%:\\tmp\nset UGII_USER_PROFILE_DIR=%Disk%:\\home_mdecourse\nset START_DIR=%TMP_DIR%\nset UGII_TMP_DIR=%TMP_DIR%\nset UGII_USER_DIR=%Disk%:\\tmp\nset UGII_GROUP_DIR=%Disk%:\\tmp\nset UGII_SITE_DIR=%Disk%:\\tmp\nset UGII_BASE_DIR_CUSTOM=%UGII_BASE_DIR%\n\nset SPLM_LICENSE_SERVER=28000@xxx.xxx.xx.xx;28000@[xxxx:xxx:xxxx:xx::xx];28000@192.168.56.3\nset UGII_LANG=english\n\nset UGII_ROOT_DIR=%UGII_BASE_DIR%\\ugii\nset UGS_LICENSE_BUNDLE=ACD10\nset UGII_TEMPLATE_DIR=%UGII_ROOT_DIR%\\templates\nset ugpath=%UGII_BASE_DIR%\\nxbin;%UGII_BASE_DIR%\\ugii;%UGII_BASE_DIR%\\NXBIN\\Radical;%UGII_BASE_DIR%\\NXBIN\\managed;\n\npath=%ugpath%;%path%;%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n\n%UGII_BASE_DIR%\\ugii\\ugraf.exe -nx | start /d  %UGII_BASE_DIR%\\ugii %UGII_BASE_DIR%\\nxbin\\simcenter3d.exe | %UGII_BASE_DIR%\\ugii\\ugraf.exe -layout | %UGII_BASE_DIR%\\ugii\\ugraf.exe -view | %UGII_BASE_DIR%\\ugii\\ugraf.exe -mechatronics | %UGII_BASE_DIR%\\ugii\\ugraf.exe -simviewer\n\nExit \n 指啟動 NX1980 基本模組, 容量約 15 GB. \n start_nx1980.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py373\\DLLs;%Disk%:\\py373\\Lib;%Disk%:\\py373\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py373\n\nset path_python=%Disk%:\\py373;%Disk%:\\py373\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\n\nREM for NX1980\nREM use ipv6\nset FNP_IP_PRIORITY=6\nset UGII_BASE_DIR=%Disk%:\\NX1980\nset TMP_DIR=%Disk%:\\tmp\nset UGII_USER_PROFILE_DIR=%Disk%:\\home_mdecourse\nset START_DIR=%TMP_DIR%\nset UGII_TMP_DIR=%TMP_DIR%\nset UGII_USER_DIR=%Disk%:\\tmp\nset UGII_GROUP_DIR=%Disk%:\\tmp\nset UGII_SITE_DIR=%Disk%:\\tmp\nset UGII_BASE_DIR_CUSTOM=%UGII_BASE_DIR%\n\nset SPLM_LICENSE_SERVER=28000@xxx.xxx.xx.xx;28000@[xxxx:xxx:xxxx:xx::xx];28000@192.168.56.3\nset UGII_LANG=english\n\nset UGII_ROOT_DIR=%UGII_BASE_DIR%\\ugii\nset UGS_LICENSE_BUNDLE=ACD10,ACD11\nset UGII_TEMPLATE_DIR=%UGII_ROOT_DIR%\\templates\nset ugpath=%UGII_BASE_DIR%\\nxbin;%UGII_BASE_DIR%\\ugii;%UGII_BASE_DIR%\\NXBIN\\Radical;%UGII_BASE_DIR%\\NXBIN\\managed;\n\npath=%ugpath%;%path%;%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite415\\wscite\\SciTE.exe\n\n%UGII_BASE_DIR%\\ugii\\ugraf.exe -nx\n\nExit \n', 'tags': '', 'url': 'Start_NX1980.html'}, {'title': 'Portable NX1980', 'text': '在 Windows 10 配置可攜 NX1980 程式, 需要: \n \n https://github.com/Bioruebe/UniExtract2 \n https://github.com/wixtoolset/wix3/releases/tag/wix3112rtm \n \n 等兩項工具, UniExtract2 用來解開 SiemensNX-1980_wntx64\\nx\\SiemensNX.msi, 以及 .msi, 而 wix 則用來解開 SiemensNX-1980_wntx64\\nx\\VC_redist.x64.exe \n 製作 Portable NX1980 的步驟請參考以下影片: \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Portable NX1980.html'}, {'title': 'NX1980_setup', 'text': '以下影片說明如何設定 Journal 存檔格式, 關閉 Product Execellence Program, 並查驗版本與授權使用單位: \n w5_nx_api.txt \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'NX1980_setup.html'}, {'title': 'NXOpen', 'text': 'NXOpen_spur_gear.c \n Get Started with NXOpen.pdf  (2019) \n NX10:  https://docs.plm.automation.siemens.com/data_services/resources/nx/10/nx_api/en_US/custom/nxopen_python_ref/index.html \n NX12:  https://docs.plm.automation.siemens.com/data_services/resources/nx/12/nx_api/custom/en_US/nxopen_python_ref/index.html \n NXOpen Python 程式範例: \n nxopen_ex1.py \n nxopen_ex2.py \n nxopen_ex3.py \n Referene: \n NX 各版本技術手冊 \n https://docs.plm.automation.siemens.com/tdoc/nx/1899/nx_help   \n NX1980\\NXBIN\\managed\\exceladdin_x64.dll \n ugii_env_ug.dat.txt \n UGII_PYTHONPATH \n UGII_PYTHON_LIBRARY_DIR \n https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/2656770  (Design of a KBE system for automatic weld path definition in CAD)', 'tags': '', 'url': 'NXOpen.html'}, {'title': 'UGOpen', 'text': '在 NX3 時代, 因為尚未支援採用 Python 編寫 API 延伸程式, 但仍可透過當時的 UGOpen C 編寫為 Python 可呼叫的 pyd 動態連結程式庫, 然後由 Python 程式主導後續的 延伸應用 . \n nx3_for_pyd.c \n nx3_call_pyd.py \n run_nx3_call_pyd.bat \n kmol_readme.txt \n Tiny C Compiler   可以 建立 dll 動態連結程式庫. 這樣有機會利用它來建立 UGOpen API 嗎? \n UGOpen_spur_gear.c \n NX10 之後已經支援 NXOpen Python, 因此接下來可利用  Visual Studio Code  作為 IDE, 用來開發 NX12 之後的 C/C++ 與 Python 整合應用的延伸程式. \n Reference: \n https://iter01.com/614343.html \n Get Started with NX Snap (2017).pdf \n Get Started with NX Snap  (2021) \n NX Custumization and Programming Discussions \n', 'tags': '', 'url': 'UGOpen.html'}, {'title': 'NX2008', 'text': 'NX2008 於 2022.01 釋出, 屬於 NX2007 系列 (2021.12 釋出). 容量約 30 GB. \n https://github.com/Bioruebe/UniExtract2  可用來解開 SiemensNX-2008_wntx64\\nx\\SiemensNX.msi, 但必須配合 SiemensNX-2008_wntx64\\nx\\VC_redist.x64.exe 的安裝或解壓縮檔案才能執行. \n 至於要解開\xa0SiemensNX-2008_wntx64\\nx\\VC_redist.x64.exe 中的檔案, 可先利用  https://github.com/wixtoolset/wix3/releases/tag/wix3112rtm  中的 wix311-binaries.zip, 以 wix311-binaries\\dark.exe vc_redist.x64.exe -x x64-extracted, 在 x64-extracted 目錄中取得 x64-extracted\\AttachedContainer\\packages\\vcRuntimeMinimum_amd64\\vc_runtimeMinimum_x64.msi 之後, 再利用 UniExtract2 解開所需的 dll 檔案後, 再放入 NXBIN 目錄. \n NX2008 啟動方式同 NX1980. \n', 'tags': '', 'url': 'NX2008.html'}, {'title': 'Onshape', 'text': '以  Onshape 中的 uArm robot . (並未自行繪製零組件而是從  uArmSwiftPro_UP1300_3D.STEP  import)', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Coppeliasim', 'text': '根據  https://www.coppeliarobotics.com/helpFiles/en/xmlFormat.htm  中有關 simple format 的說明, 可直接將 uArm 機械手臂在 NX 中的零組件, 透過 NXOpen Python API 的程式轉為 CoppeliaSim 的 Scene hierarchy 組合狀態. \n 如此便將 uArm 機械手臂各零組件參數化, 然後直接在 Brython 前端介面設定 uArm 機械手臂的設計參數, 經由 AJAX 將參數送至後端 Flask + NXOpen Python API 伺服器, 產生 uArm 機械手臂組合場景後, 再透過  Legacy Python remote API  或  ZeroMQ Python remote API  控制 uArm 機械手臂 (或利用  Socket 傳遞控制參數 ), 並以客製化 image sensor 的 影像串流 從 Flask server 送至各協同成員的瀏覽器, 或採  Web browser based frontend  方式呈現控制流程. \n https://www.york.ac.uk/media/electronic-engineering/welcome/Simulation%20Challenge%20-%20Python%20Scripting.pdf \n http://hades.mech.northwestern.edu/index.php/Getting_Started_with_the_CoppeliaSim_Simulator \n https://www.doc.ic.ac.uk/~ajd/Robotics/RoboticsResources/questions1.pdf \n https://github.com/stepjam/PyRep \n https://www.diva-portal.org/smash/get/diva2:1569215/FULLTEXT02.pdf \n https://github.com/abr/abr_control \n \n 利用  sympy  根據  meArm Pi Technical Overview  中的說明 (修正錯誤後), 解出 Inverse Kinematics 如下: \n 當已知 manimpulator 端點的座標為 (x, y ,z) 時, 求 theta, ltheta (low arm link theta) 與 utheta (upper arm link theta). 利用  sympy  之前必須先以 pip install sympy 安裝模組. \n mearm_ik_sympy.py \n 使用者可以設法在 CoppeliaSim meArm 場景中驗證上述推導是否正確, 並與  https://github.com/yorkhackspace/meArm  中的控制運算進行比較. \n CoppeliaSim 編譯: \n CoppeliaSim 4.1.0 原始碼編譯專案  (登入 @gm OneDrive 後下載). \n CoppeliaSim 從 4.1.0 的 help files  (只能在系上以 IPv6 網路連線). \n CoppeliaSim 編譯說明 1  (只能在系上以 IPv6 網路連線). \n CoppeliaSim 編譯  (只能在系上以 IPv6 網路連線). \n', 'tags': '', 'url': 'Coppeliasim.html'}, {'title': 'Tic-Tat-Toe', 'text': 'https://techvidvan.com/tutorials/python-game-project-tic-tac-toe/ \n https://www.geeksforgeeks.org/tic-tac-toe-game-with-gui-using-tkinter-in-python/ \n UR10e  Robot 透過影像辨識與人進行  Tic-Tat-Toe  遊戲: \n \n cd2022  則希望透過  uArm  robot 搬動 OX 棋子的方式進行  Tic-Tat-Toe  遊戲. \n Tic-Tat-Toe: \n https://www.cormerica.com/robot-tic-tac-toe/ \n Playing_Tic-Tac-Toe_Using_Genetic_Neural_Network_with_Double_transfer_functions.pdf \n \n \n uArm 資料: \n https://www.trossenrobotics.com/uarm-swift-pro.aspx \n https://github.com/uArm-Developer/UArmForArduino \n https://uarm-developer.github.io/UArmForArduino/ \n 且 uArm robot 的零組件要求分別由 Solvespace, NX1980 與 Onshape 執行設計繪圖後轉入 Coppeliasim 場景完成機電資系統模擬. \n 其中 uArm 原型零件採用 3D 列印或雷射切割的製造過程可依照  Realization  頁面中的模擬系統進行, 並包括齒輪減速機的設計運算與  Arduino 伺服馬達的控制模擬 . \n uArm 零組件: \n 以  Onshape 中的 uArm robot . (並未自行繪製零組件而是從  uArmSwiftPro_UP1300_3D.STEP  import) \n cd2022_uarm_nx12_imported.7z', 'tags': '', 'url': 'Tic-Tat-Toe.html'}, {'title': 'Threejs', 'text': '假如能夠在 server 端配置 NX + Flask 延伸應用程式, 並讓 Brython 前端程式操控產品設計參數, 完成後的零組件將可在轉為 OBJ 格式後, 直接展示在客戶端的瀏覽器中. \n https://jayconsystems.com/blog/exporting-3d-files-stl-vs-obj-vs-iges-vs-step   \n https://threejs.org/ \n \n \n https://www.coppeliarobotics.com/helpFiles/en/externalFrontEnd.htm', 'tags': '', 'url': 'Threejs.html'}, {'title': 'run', 'text': '\n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n add 1 to 100 p261 ROC flag PROC flag USA flag Draw Grid Random Rect Rect Walk Rect U Walk Rect rev U Walk 單節貪食蛇 5 個紅點方塊 Snake BSnake auto_guess ball bezier big_lotto brython_kw bunny cango_spur cango_spur1 cango_three_gears clear clock convert_temp deepmerge display_stl draw ex1 ex2 ex3 ex4 fibo fourbar grp2a_2022 grp_2022 guess_a_number hw1_1 hw1_2 Keycode knova1 merge3 power_lotto spur spur_w_form stl_binary_ascii stl_writer Tetris turtle1 turtle2 turtle3 turtle4 turtle5 turtle6 turtle7 turtle8 twl_link_ik webcam websocket ycqsort \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'Brython', 'text': '2a 分組程式練習 \n 2b 分組程式練習 \n 2a w6 blog 查驗  ( 2a 有網誌者 ) |  2a w7 summary 查驗  ( 2a 有網誌者 ) \n 2b w6 blog 查驗  ( 2b 有網誌者 ) |  2b w7 summary 查驗  ( 2b 有網誌者 ) \n \n \n \n \n  for ggame  \n \n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  #####  editor1 開始 #####  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  graphics-column is for ggame  \n \n  #####  editor1 結束 #####  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n \n  印出程式2 \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n   結束列印程式 2  \n  印出程式3 \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n   結束列印程式 3 ', 'tags': '', 'url': 'Brython.html'}]};