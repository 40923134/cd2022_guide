var tipuesearch = {"pages":[{"title":"About","text":"協同產品設計實習 倉儲: https://github.com/mdecycu/cd2022_guide 內容管理: https://mde.tw/cd2022_guide/ 投影片: https://mde.tw/cd2022_guide/reveal 網誌: https://mde.tw/cd2022_guide/blog","tags":"misc","url":"./pages/about/"},{"title":"Q and A","text":"利用 SSH 協定推送 Github 版本的做法其實很簡單, 共有四個階段: Windows 環境以 SSH 執行 git push 利用 SSH 協定推送 Github 版本的做法其實很簡單, 共有四個階段: 啟動可攜時設定 GIT_SSH 變數 將 OpenSSH 格式的公鑰送到 Github 讓 Putty 可以上網且 Session 連結到近端的私鑰 確定近端倉儲的 .git/config 檔案中轉為採 SSH 進行連線 上述在 Windows 環境中透過 Putty 以 SSH 推送改版資料到 Github 的四個階段, 只有將 Putty 設定的 session 放入電腦 registry 的部分比較容易發生問題, 因為電腦輔助設計室中的電腦帶有防寫卡, 重新開機後 registry 會重置. 因此比較建立透過設定完成的 .reg 在每次提交推送之前, 將 session 設定改為自己的設定. 詳細說明請參考 https://mde.tw/wcm2022_guide/content/Token%20and%20SSH.html Pelican Blog 的問題 pelican markdown -o blog -s local_publishconf.py 指令的意思為: 利用 Scripts/pelican.exe 程式將 markdown 目錄中的所有 .md 檔案, 以 local_publishconf.py 中的設定轉為網誌 html 檔案, 其 output 輸出目錄設為 blog. 比較常見的問題是: 每一個 .md 檔案中的前面標題部分格式要求非常嚴謹, 因為 Pelican 必須根據各變數的內容, 將此 .md 檔案轉為 blog 目錄中的網誌超文件. --- Title: Q and A Date: 2022-04-21 11:00 Category: Programming Tags: 2022SpringCD Slug: w9-Q-and-A Author: yen --- 上面第一行中的 @language md 是 Leo Editor 的內文指令, 表示要以 Markdown 的語法來解析以下的檔案內容. Title: 後的字串會成為網誌文章的標題. Date: 標示文章編寫十的日期與時間, 而格式必須按照年月日再加上編寫時間的設定進行標記. Category: 中的字串表示文章類別, 當使用者在特定類別中有多篇文章時, 只要點選特定 Category, 就會列出此一類別的網誌文章. Tags: 中的字串為用來分類網誌文章的第二層註記. Slug: 中的字串為此篇文章轉進 blog 目錄之後所使用的檔案名稱, 也因為如此, 每一篇網誌都必須有獨一的 Slug 字串. Authon: 則用來標示此篇文章的作者. 不同 CAD 與版本繪製零組件的協同 Solvespace 是開源的參數式 CAD, 所建立的零組件檔案只能轉進 CoppeliaSim. NX 是高階的參數式 CAD/CAM/CAE 套件, 目前使用的 NX 共有 NX12, NX1980 與 NX2008, 利用舊版 NX 建立的零件檔案, 可以用新版打開, 但若該檔案由新版 NX 編輯後, 就無法讓舊版的 NX 開啟, 因此在協同產品設計時, 若組員中分別使用不同版本的 NX 建立零組件, 則參數 CAD 的協同流程只能單向進行, 但無論採用哪一版的 NX 建立零件檔案轉為 STL 後, 都可以進入 Coppeliasim 建立模擬場景. 而 Onshape 則是全雲端的參數式 CAD, 在沒有後端 API 權限的情況下只能利用 Featurescript 協助建立參數式驅動的 uarm 機械手臂零件. Please enable JavaScript to view the comments powered by Disqus.","tags":"Programming","url":"./w9-Q-and-A.html"},{"title":"w8 debug 40923136 倉儲","text":"今天上課碰到一個看似詭異的問題: 將目前 40923136 cd2022 倉儲 clone 到近端後, 只要進入倉儲執行 cms.bat 就會同時開啟 Leo Editor, 而且 Leo Editor 是隨著 cmsimde/wsgi.py 啟動, 意即, Leo Editor 在 Flask 網際程式的架構下啟動, 因此一旦手動關閉 Leo Editor, Flask 會自動重新開啟 Leo Editor. cmsimde cmsimde 是在 2013 年11 月啟動開發, 至 2014 年 1 月 21 日可運作初版釋出之後, 密集開發時程大約只到 2017 年, 之後就沿用至今, 當時所設計的基本架構已經幾年沒有更新, 許多細節若沒有仔細閱讀當年的開發日誌, 其實都已經忘了. 今天在上課時段, 同學提問: 只要將 40923136 cd2022 倉儲 clone 到近端, 然後在命令列中進入倉儲執行 cms.bat, 除了開啟動態系統外, 竟然同時開啟 Leo Editor, 而且詭異的是, 手動關閉 Leo Editor, 系統會重新開啟 Leo Editor. 啟動 debug 流程 光是從最後一點, 當下就知道 Leo Editor 是經由 Flask 開啟, 於是第一時間就判斷應該是 cmsimde 中的程式碼被塞入與 Leo Editor 啟動有關的啟動資料. 但是經由 WinMerge 的目錄比對, 除了提供比對用的 cmsimde 目錄中, 多了 Mac 操作系統使用過程殘存未刪除的檔案外, 其餘的程式檔案都完全相同. 既然如此, 問題就不是出在 cmsimde 目錄, 儘管 40923136 cd2022 倉儲 中的 cmsimde 並非使用子模組設定, 但這並不影響使用功能, 因此接下的 debug 目標, 就應該是倉儲中其他檔案, 而且一定是與 cmsimde 中的 Flask 程式有關的資料檔案. 記憶中與 wsgi.py 及 flaskapp.py 有關的啟動檔案只有 init.py, 因此比對 40923136 cd2022 倉儲 倉儲中的 init.py 以及 cms.bat 都沒有異狀. 最後在 40923136 cd2022 倉儲 還需要比對的 .py 檔案, 就只剩下 Pelican 相關的 .py 設定檔案, 以及一個 user.py. 因為完全不記得為何使用者的倉儲中為何會有這個 user.py, 但還是以 SciTE 開啟後拉動檢查, 最後終於在 第 180 行 找到造成詭異反應的 Leo Editor 啟動程式. 這時才想起來 flaskapp.py 第 52 行 設置了使用者延伸機制, user.py 是讓使用者用來延伸 cmsimde 的範例程式段, 讓需要延伸 cmsimde 的用戶可以自行加入所需要的額外功能程式碼. 好了, 透過 Flask 啟動 Leo Editor 的元兇找到了, 只要將 40923136 cd2022 倉儲 中的這段啟動 Leo Editor 的程式碼刪除, 應該就可以了.","tags":"Programming","url":"./w8-debug-40923136-cmsimde-repo.html"},{"title":"w7 程式專案","text":"協同產品設計實習第七週執行機械手臂的物件取放實習 cd 協同分組 2a 名單: https://mde.tw/studlist/2022spring/2a.txt 2b 名單: https://mde.tw/studlist/2022spring/2b.txt 2a 分組 2b 分組 Onshape 中的 uArm 組立圖 cd2022_uarm_nx12_imported.7z 分配 NX 教學影片 以下影片說明如何利用 Leo Editor 編輯 config/pelican.leo 網誌檔案: 以下為第三週的課程教學影片: uarm 機械手臂 uarm 是一組四個自由度的桌上型機械手臂, uarm developer 倉儲提供許多與 uarm 相關的設計與應用資料. 從 UFACTORY uArm Swift Pro 3D Models 可以下載 uarm 的 STEP 203 格式的檔案, 從而得知 uarm 是採用 SolidWorks 2014 設計繪製, 但其中的零件檔案以簡體中文命名, 採 GB2312 編碼, 在 Windows code page 代號為 936 . 希望讀取 UFACTORY uArm Swift Pro 3D Models 中正確的簡體中文資料, 可以將 SciTE 中的 SciTEGlobal.properties code.page 設定從 65001 (UTF-8) 改為 936 , 再將正確顯示的 GB2312 編碼資料轉為 UTF-8 內容, 就可在 import 進入 Onshape 與 NX12 後, 的到正確的 Onshape 中的 uArm 組立圖 以及 cd2022_uarm_nx12_imported.7z . 如何建立可攜 NX1980 系統 製作 Portable NX1980 的步驟請參考以下影片: NX1980 setup 以下影片說明如何設定 Journal 存檔格式, 關閉 Product Execellence Program, 並查驗版本與授權使用單位: Three.js scarysim 專案 位於 https://github.com/mdecourse/scarysim , 採用 Qt5 與 OpenGL 編寫, 可以使用 qmake 進行編譯與連結. 以上的 Wink 影片播放設定超文件: simExtMtb 專案 CoppeliaSim 4.1.0 原始碼編譯專案 (登入 @gm OneDrive 後下載). CoppeliaSim 從 4.1.0 的 help files (只能在系上以 IPv6 網路連線). CoppeliaSim 編譯說明 1 (只能在系上以 IPv6 網路連線). CoppeliaSim 編譯 (只能在系上以 IPv6 網路連線).","tags":"Programming","url":"./2022-Spring-CD-w7-programming-project.html"},{"title":"2022 Spring CD 課程","text":"2022 Spring 協同產品設計實習. 雲端空間 原本 Google Drive 教育版可以存放不限空間的政策, 2022.07 即將失效, 屆時每一個帳號下只能至多儲存 3GB 的資料. 取而代之的是 MicroSoft 提供的教育版 OneDrive, 每一名使用者可以 存放 至多 5TB 容量的檔案. 協同主題 2022cd 課程的主題為 uArm , 我們希望各分組組員採用 Solvespace 、 NX 以及 Onshape 設計繪製能夠用於 Tic-Tat-Toe 遊戲的機械手臂. 從 uArm 中的影片與下載檔案、 uArm Developer Guide 、 uArm test kit 與 uFactory uArm 可以取得與 uArm 機械手臂相關的技術資料.","tags":"Misc","url":"./2022-Spring-CD.html"}]};