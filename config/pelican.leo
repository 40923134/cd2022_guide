<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="yen.20170108171605.1"><vh>@settings</vh>
<v t="yen.20170108171605.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="yen.20170108171605.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="yen.20170108171733.1"><vh>@path ../</vh>
<v t="leo.20180115150519.1"><vh>@edit index.html</vh></v>
<v t="yen.20170108171733.4"><vh>@edit .gitignore</vh></v>
<v t="leo.20170908162839.1"><vh>沒有 disqus 論壇</vh>
<v t="yen.20170108171733.2"><vh>@button local-blog</vh></v>
</v>
<v t="leo.20170908162904.1"><vh>有 disqus 論壇</vh>
<v t="leo.20170709224430.1"><vh>@button github-blog</vh></v>
</v>
<v t="yen.20170108171733.5"><vh>Pelican 設定</vh>
<v t="leo.20170709020600.1"><vh>共用</vh></v>
<v t="yen.20170108171733.7"><vh>@edit pelicanconf.py</vh></v>
<v t="leo.20170709015947.1"><vh>遠端</vh></v>
<v t="leo.20170709015955.1"><vh>@edit publishconf.py</vh></v>
<v t="leo.20170709015940.1"><vh>近端</vh></v>
<v t="yen.20170108171733.6"><vh>@edit local_publishconf.py</vh></v>
</v>
<v t="yen.20170224232341.1"><vh>編輯 template</vh>
<v t="leo.20180115093448.1"><vh>@path theme/attila/templates</vh>
<v t="leo.20180715212936.1"><vh>@edit article.html</vh></v>
<v t="leo.20180115093536.1"><vh>@edit base.html</vh></v>
<v t="leo.20180115093657.1"><vh>@edit search.html</vh></v>
<v t="leo.20180115093715.1"><vh>@edit archives.html</vh></v>
<v t="leo.20180715212745.1"><vh>@edit categories.html</vh></v>
<v t="leo.20180715212902.1"><vh>@edit index.html</vh></v>
<v t="leo.20180115093726.1"><vh>@path partials</vh>
<v t="leo.20180115093749.1"><vh>@edit navigation.html</vh></v>
</v>
</v>
</v>
<v t="leo.20170710015511.1"><vh>編輯 plugin</vh>
<v t="leo.20170710015523.1"><vh>@path plugin</vh>
<v t="leo.20170710015523.2"><vh>@path tipue_search</vh>
<v t="leo.20170710015523.3"><vh>@edit tipue_search.py</vh></v>
</v>
</v>
</v>
<v t="yen.20170108171733.71"><vh>@path markdown</vh>
<v t="yen.20170108171733.81"><vh>@path pages</vh>
<v t="yen.20170108171733.82"><vh>@edit pages_1.md</vh></v>
</v>
</v>
<v t="leo.20170710022054.1"><vh>可以另建節點存放 markdown 目錄下的 md 檔案</vh></v>
<v t="leo.20170710022041.1"><vh>@path markdown</vh>
<v t="leo.20180115115910.1"><vh>2022</vh>
<v t="leo.20180423103639.1"><vh>2022 Spring CD 課程</vh>
<v t="leo.20180423103656.1"><vh>@edit 20220329.md</vh></v>
<v t="leo.20220407155920.1"><vh>@clean 20220407.md</vh>
<v t="leo.20220407160001.1"><vh>w7 程式專案</vh>
<v t="leo.20220412105430.1"><vh>&lt;&lt; 相關連結 &gt;&gt;</vh></v>
</v>
</v>
<v t="leo.20220413133022.1"><vh>@clean 20220413.md</vh>
<v t="leo.20220413133649.1"><vh>w8 debug 40923136 倉儲</vh></v>
</v>
<v t="leo.20220421203323.1"><vh>@clean 20220421.md</vh>
<v t="leo.20220421203351.1"><vh>Q and A</vh></v>
</v>
</v>
</v>
</v>
<v t="yen.20170108171733.83"><vh>產生 .key 與 .crt 指令</vh></v>
</v>
<v t="yen.20170108171930.1"><vh>@button https server</vh></v>
<v t="yen.20170108171939.1"><vh>@button ipv6 https server</vh></v>
</vnodes>
<tnodes>
<t tx="leo.20170709015940.1"></t>
<t tx="leo.20170709015947.1"></t>
<t tx="leo.20170709020600.1"></t>
<t tx="leo.20170709224430.1">@language python
import os

os.system("pelican markdown -o blog -s publishconf.py")
g.es("admin pelican Github 執行完畢")


</t>
<t tx="leo.20170710015511.1"></t>
<t tx="leo.20170710015523.1"></t>
<t tx="leo.20170710015523.2"></t>
<t tx="leo.20170710022041.1"></t>
<t tx="leo.20170710022054.1"></t>
<t tx="leo.20170908162839.1"></t>
<t tx="leo.20170908162904.1"></t>
<t tx="leo.20180115093448.1"></t>
<t tx="leo.20180115093726.1"></t>
<t tx="leo.20180115115910.1"></t>
<t tx="leo.20180423103639.1"></t>
<t tx="leo.20220407155920.1">@language md
---
Title: w7 程式專案
Date: 2022-04-07 11:00
Category: Programming
Tags: 2022SpringCD
Slug: 2022-Spring-CD-w7-programming-project
Author: yen
---

協同產品設計實習第七週執行機械手臂的物件取放實習

&lt;!-- PELICAN_END_SUMMARY --&gt;

&lt;!-- css and js for Wink3 --&gt;
&lt;link rel="stylesheet" type="text/css" href="./../cmsimde/static/winkPlayer.css" /&gt;
&lt;script type="text/javascript" src="./../cmsimde/static/winkPlayer.js"&gt;&lt;/script&gt;

@others</t>
<t tx="leo.20220407160001.1">cd 協同分組
----
2a 名單: &lt;https://mde.tw/studlist/2022spring/2a.txt&gt;

2b 名單: &lt;https://mde.tw/studlist/2022spring/2b.txt&gt;

[2a 分組]

[2b 分組]

 [Onshape 中的 uArm 組立圖]
 
 [cd2022_uarm_nx12_imported.7z]
 
 [分配 NX 教學影片]
 
 以下影片說明如何利用 Leo Editor 編輯 config/pelican.leo 網誌檔案:
 
 &lt;script&gt;
var winkVideoData_pelican = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
  },
};
&lt;/script&gt;
&lt;!-- 接下來將 mp4 檔案從 downloads 目錄取出 --&gt;
&lt;div class="winkVideoContainerClass"&gt;&lt;video autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData_pelican" height="630" muted="true" width="1008"&gt;
&lt;source src="./../downloads/w6_blog/w6_blog.mp4" type="video/mp4"/&gt;&lt;/video&gt;
&lt;div class="winkVideoOverlayClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarClass"&gt;&lt;button class="winkVideoControlBarPlayButtonClass"&gt;&lt;/button&gt; &lt;button class="winkVideoControlBarPauseButtonClass"&gt;&lt;/button&gt;
&lt;div class="winkVideoControlBarProgressLeftClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressEmptyMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressRightClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressFilledMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressThumbClass"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="winkVideoPlayOverlayClass"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;&lt; 相關連結 &gt;&gt;

以下為第三週的課程教學影片:

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/roJ3Bk44qO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;

uarm 機械手臂
----

[uarm] 是一組四個自由度的桌上型機械手臂, [uarm developer] 倉儲提供許多與 [uarm] 相關的設計與應用資料.

從 [UFACTORY uArm Swift Pro 3D Models] 可以下載 [uarm] 的 STEP 203 格式的檔案, 從而得知 [uarm] 是採用 SolidWorks 2014 設計繪製, 但其中的零件檔案以簡體中文命名, 採 [GB2312] 編碼, 在 Windows code page 代號為 [936].

希望讀取 [UFACTORY uArm Swift Pro 3D Models] 中正確的簡體中文資料, 可以將 SciTE 中的 SciTEGlobal.properties code.page 設定從 [65001] (UTF-8) 改為 [936], 再將正確顯示的 [GB2312] 編碼資料轉為 UTF-8 內容, 就可在 import 進入 Onshape 與 NX12 後, 的到正確的 [Onshape 中的 uArm 組立圖] 以及 [cd2022_uarm_nx12_imported.7z].

如何建立可攜 NX1980 系統
----

製作 Portable NX1980 的步驟請參考以下影片:

&lt;script&gt;
var winkVideoData_nx1980 = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
  },
};
&lt;/script&gt;
&lt;!-- 接下來將 mp4 檔案從 downloads 目錄取出 --&gt;
&lt;div class="winkVideoContainerClass"&gt;&lt;video autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData_nx1980" height="630" muted="true" width="1008"&gt;
&lt;source src="./../downloads/w5_portable_nx1980/w5_portable_nx1980.mp4" type="video/mp4"/&gt;&lt;/video&gt;
&lt;div class="winkVideoOverlayClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarClass"&gt;&lt;button class="winkVideoControlBarPlayButtonClass"&gt;&lt;/button&gt; &lt;button class="winkVideoControlBarPauseButtonClass"&gt;&lt;/button&gt;
&lt;div class="winkVideoControlBarProgressLeftClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressEmptyMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressRightClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressFilledMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressThumbClass"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="winkVideoPlayOverlayClass"&gt;&lt;/div&gt;
&lt;/div&gt;

NX1980 setup
----

以下影片說明如何設定 Journal 存檔格式, 關閉 Product Execellence Program, 並查驗版本與授權使用單位:

&lt;script&gt;
var winkVideoData_nx1980_setup = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
  },
};
&lt;/script&gt;
&lt;!-- 接下來將 mp4 檔案從 downloads 目錄取出 --&gt;
&lt;div class="winkVideoContainerClass"&gt;&lt;video autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData_nx1980_setup" height="630" muted="true" width="1008"&gt;
&lt;source src="./../downloads/w5_nx_api/w5_nx_api.mp4" type="video/mp4"/&gt;&lt;/video&gt;
&lt;div class="winkVideoOverlayClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarClass"&gt;&lt;button class="winkVideoControlBarPlayButtonClass"&gt;&lt;/button&gt; &lt;button class="winkVideoControlBarPauseButtonClass"&gt;&lt;/button&gt;
&lt;div class="winkVideoControlBarProgressLeftClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressEmptyMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressRightClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressFilledMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressThumbClass"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="winkVideoPlayOverlayClass"&gt;&lt;/div&gt;
&lt;/div&gt;

Three.js
----

&lt;p&gt;&lt;iframe frameborder="0" height="300" src="./../downloads/threejs_ex/index.html" width="300"&gt;&lt;/iframe&gt;&lt;/p&gt;
&lt;p&gt;&lt;iframe frameborder="0" height="300" src="./../downloads/threejs_ex/ex1/asm.html" width="300"&gt;&lt;/iframe&gt;&lt;/p&gt;

scarysim 專案
----

位於 &lt;https://github.com/mdecourse/scarysim&gt;, 採用  Qt5 與 OpenGL 編寫, 可以使用 qmake 進行編譯與連結.

&lt;!-- 導入 winkVideoData 變數值 --&gt;
&lt;script&gt;
var winkVideoData = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
  },
};
&lt;/script&gt;
&lt;!-- 將 mp4 檔案從 downloads 目錄取出播放 --&gt;
&lt;div class="winkVideoContainerClass"&gt;&lt;video autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData" height="630" muted="true" width="1008"&gt;
&lt;source src="./../downloads/w7_pap/w7_pap.mp4" type="video/mp4"/&gt;&lt;/video&gt;
&lt;div class="winkVideoOverlayClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarClass"&gt;&lt;button class="winkVideoControlBarPlayButtonClass"&gt;&lt;/button&gt; &lt;button class="winkVideoControlBarPauseButtonClass"&gt;&lt;/button&gt;
&lt;div class="winkVideoControlBarProgressLeftClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressEmptyMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressRightClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressFilledMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressThumbClass"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="winkVideoPlayOverlayClass"&gt;&lt;/div&gt;
&lt;/div&gt;

以上的 Wink 影片播放設定超文件:

&lt;pre class="brush: html"&gt;
&lt;!-- css and js for Wink3 --&gt;
&lt;link rel="stylesheet" type="text/css" href="./../cmsimde/static/winkPlayer.css" /&gt;
&lt;script type="text/javascript" src="./../cmsimde/static/winkPlayer.js"&gt;&lt;/script&gt;
&lt;!-- 導入 winkVideoData 變數值 --&gt;
&lt;script&gt;
var winkVideoData = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
  },
};
&lt;/script&gt;
&lt;!-- 將 mp4 檔案從 downloads 目錄取出播放 --&gt;
&lt;div class="winkVideoContainerClass"&gt;&lt;video autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData" height="630" muted="true" width="1008"&gt;
&lt;source src="./../downloads/w7_pap/w7_pap.mp4" type="video/mp4"/&gt;&lt;/video&gt;
&lt;div class="winkVideoOverlayClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarClass"&gt;&lt;button class="winkVideoControlBarPlayButtonClass"&gt;&lt;/button&gt; &lt;button class="winkVideoControlBarPauseButtonClass"&gt;&lt;/button&gt;
&lt;div class="winkVideoControlBarProgressLeftClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressEmptyMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressRightClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressFilledMiddleClass"&gt;&lt;/div&gt;
&lt;div class="winkVideoControlBarProgressThumbClass"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="winkVideoPlayOverlayClass"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/pre&gt;
simExtMtb 專案
----

[CoppeliaSim 4.1.0 原始碼編譯專案] (登入 @gm OneDrive 後下載).

[CoppeliaSim 從 4.1.0 的 help files] (只能在系上以 IPv6 網路連線).

[CoppeliaSim 編譯說明 1]  (只能在系上以 IPv6 網路連線).

[CoppeliaSim 編譯] (只能在系上以 IPv6 網路連線).

</t>
<t tx="leo.20220412105430.1">[2a 分組]: https://mde.tw/cd2022_guide/content/Brython.html?src=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/0999a227153ea9a20954e4b2b77f783337197627/w4_grp_src.py&amp;src2=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/0999a227153ea9a20954e4b2b77f783337197627/w4_grp_src2.py
[2b 分組]: https://mde.tw/cd2022_guide/content/Brython.html?src=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/507db6ddb7b5bcdd3027235761208b32ac93bcd0/w4_b_grp.py&amp;src2=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/507db6ddb7b5bcdd3027235761208b32ac93bcd0/w4_b_grp_src2.py
[Onshape 中的 uArm 組立圖]: https://cad.onshape.com/documents/3c81d3f7fc38f5da16eef9ed/w/f6d4616f188bc9425608890c/e/08936ec436f9e9668efeaefd?renderMode=0&amp;uiState=6254c8ae6d93450dec4bb2b2
[分配 NX 教學影片]: https://www.youtube.com/watch?v=GUaa97tALxE&amp;list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl
[cd2022_uarm_nx12_imported.7z]: https://localhost:9445/downloads/cd2022_uarm_nx12_imported.7z
[uarm]: https://www.ufactory.cc/pages/uarm
[uarm developer]: https://github.com/uArm-Developer
[UFACTORY uArm Swift Pro 3D Models]: https://cdn.shopifycdn.net/s/files/1/0012/6979/2886/files/uArmSwiftPro_UP1300_3D.STEP?v=1601200945
[GB2312]: https://en.wikipedia.org/wiki/GB_2312
[936]: https://en.wikipedia.org/wiki/Code_page_936_(Microsoft_Windows)
[65001]: https://zh.wikipedia.org/wiki/Unicode
[CoppeliaSim 4.1.0 原始碼編譯專案]: https://gmnfuedutw-my.sharepoint.com/:u:/g/personal/yen_gm_nfu_edu_tw/EccOQ_vbC2FAqk59lpm3sMIB8L7T9hc1wKbT3dkz5Aa9MA?e=dLP7ql
[CoppeliaSim 從 4.1.0 的 help files]: http://wcm.cycu.org:88/github/copsim410
[CoppeliaSim 編譯說明 1]: http://wcm.cycu.org:88/github/cad2021/content/Task7-1-1.html
[CoppeliaSim 編譯]: http://wcm.cycu.org:88/github/cad2021/content/Compile%20CoppeliaSim.html</t>
<t tx="leo.20220413133022.1">@language md
---
Title: w8 debug 40923136 倉儲
Date: 2022-04-13 11:00
Category: Programming
Tags: 2022SpringCD
Slug: w8-debug-40923136-cmsimde-repo
Author: yen
---

今天上課碰到一個看似詭異的問題: 將目前 [40923136 cd2022 倉儲] clone 到近端後, 只要進入倉儲執行 cms.bat 就會同時開啟 Leo Editor, 而且 Leo Editor 是隨著 cmsimde/wsgi.py 啟動, 意即, Leo Editor 在 Flask 網際程式的架構下啟動, 因此一旦手動關閉 Leo Editor, Flask 會自動重新開啟 Leo Editor.

&lt;!-- PELICAN_END_SUMMARY --&gt;

[40923136 cd2022 倉儲]: https://github.com/40923136-1/cd2022/tree/ae71aee67b73123f2f62a896174a3c130c0fb85c

@others</t>
<t tx="leo.20220413133649.1">cmsimde
----

[cmsimde] 是在 2013 年11 月啟動開發, 至 2014 年 1 月 21 日可運作初版釋出之後, 密集開發時程大約只到 2017 年, 之後就沿用至今, 當時所設計的基本架構已經幾年沒有更新, 許多細節若沒有仔細閱讀當年的開發日誌, 其實都已經忘了.

今天在上課時段, 同學提問: 只要將 [40923136 cd2022 倉儲] clone 到近端, 然後在命令列中進入倉儲執行 cms.bat, 除了開啟動態系統外, 竟然同時開啟 Leo Editor, 而且詭異的是, 手動關閉 Leo Editor, 系統會重新開啟 Leo Editor. 

[cmsimde]: https://github.com/mdecycu/cmsimde
[WinMerge]: https://winmerge.org
[第 180 行]: https://github.com/40923136-1/cd2022/blob/ae71aee67b73123f2f62a896174a3c130c0fb85c/user.py#L180
[flaskapp.py 第 52 行]: https://github.com/40923136-1/cd2022/blob/ae71aee67b73123f2f62a896174a3c130c0fb85c/cmsimde/flaskapp.py#L52

啟動 debug 流程
----

光是從最後一點, 當下就知道 Leo Editor 是經由 Flask 開啟, 於是第一時間就判斷應該是 cmsimde 中的程式碼被塞入與 Leo Editor 啟動有關的啟動資料.

但是經由 [WinMerge] 的目錄比對, 除了提供比對用的 cmsimde 目錄中, 多了 Mac 操作系統使用過程殘存未刪除的檔案外, 其餘的程式檔案都完全相同.

既然如此, 問題就不是出在 cmsimde 目錄, 儘管 [40923136 cd2022 倉儲]中的 cmsimde 並非使用子模組設定, 但這並不影響使用功能, 因此接下的 debug 目標, 就應該是倉儲中其他檔案, 而且一定是與 cmsimde 中的 Flask 程式有關的資料檔案.

記憶中與 wsgi.py 及 flaskapp.py 有關的啟動檔案只有 init.py, 因此比對 [40923136 cd2022 倉儲] 倉儲中的 init.py 以及 cms.bat 都沒有異狀.

最後在 [40923136 cd2022 倉儲]還需要比對的 .py 檔案, 就只剩下 Pelican 相關的  .py 設定檔案, 以及一個 user.py.

因為完全不記得為何使用者的倉儲中為何會有這個 user.py,  但還是以 SciTE 開啟後拉動檢查, 最後終於在[第 180 行] 找到造成詭異反應的 Leo Editor 啟動程式.

這時才想起來 [flaskapp.py 第 52 行] 設置了使用者延伸機制, user.py 是讓使用者用來延伸 cmsimde 的範例程式段, 讓需要延伸 cmsimde 的用戶可以自行加入所需要的額外功能程式碼.

好了, 透過 Flask 啟動 Leo Editor 的元兇找到了, 只要將 [40923136 cd2022 倉儲]中的這段啟動 Leo Editor 的程式碼刪除, 應該就可以了.

</t>
<t tx="leo.20220421203323.1">@language md
---
Title: Q and A
Date: 2022-04-21 11:00
Category: Programming
Tags: 2022SpringCD
Slug: w9-Q-and-A
Author: yen
---

Windows 環境中還不會使用 SSH push github 版本
----

利用 SSH 協定推送 Github 版本的做法其實很簡單, 共有四個階段:

 - 啟動可攜時設定 GIT_SSH 變數
 - 將 OpenSSH 格式的公鑰送到 Github
 - 讓 Putty 可以上網且 Session 連結到近端的私鑰
 - 確定近端倉儲的 .git/config 檔案中轉為採 SSH 進行連線

&lt;!-- PELICAN_END_SUMMARY --&gt;

@others</t>
<t tx="leo.20220421203351.1">上述在 Windows 環境中透過 Putty 以 SSH 推送改版資料到 Github 的四個階段, 只有將 Putty 設定的 session 放入電腦 registry 的部分比較容易發生問題, 因為電腦輔助設計室中的電腦帶有防寫卡, 重新開機後 registry 會重置. 因此比較建立透過設定完成的 .reg 在每次提交推送之前, 將 session 設定改為自己的設定. 詳細說明請參考 &lt;https://mde.tw/wcm2022_guide/content/Token%20and%20SSH.html&gt;

Pelican Blog 的問題
----

pelican markdown -o blog -s local_publishconf.py

指令的意思為: 利用 Scripts/pelican.exe 程式將 markdown 目錄中的所有 .md 檔案, 以 local_publishconf.py 中的設定轉為網誌 html 檔案, 其 output 輸出目錄設為 blog.

比較常見的問題是: 每一個 .md 檔案中的前面標題部分格式要求非常嚴謹, 因為 Pelican 必須根據各變數的內容, 將此 .md 檔案轉為 blog 目錄中的網誌超文件.

&lt;pre class="brush: jscript"&gt;
@language md
---
Title: Q and A
Date: 2022-04-21 11:00
Category: Programming
Tags: 2022SpringCD
Slug: w9-Q-and-A
Author: yen
---
&lt;/pre&gt;

上面第一行中的 @language md 是 Leo Editor 的內文指令, 表示要以 Markdown 的語法來解析以下的檔案內容.

Title: 後的字串會成為網誌文章的標題.

Date: 標示文章編寫十的日期與時間, 而格式必須按照年月日再加上編寫時間的設定進行標記.

Category: 中的字串表示文章類別, 當使用者在特定類別中有多篇文章時, 只要點選特定 Category, 就會列出此一類別的網誌文章.

Tags: 中的字串為用來分類網誌文章的第二層註記.

Slug: 中的字串為此篇文章轉進  blog 目錄之後所使用的檔案名稱, 也因為如此, 每一篇網誌都必須有獨一的 Slug 字串.

Authon: 則用來標示此篇文章的作者.

不同 CAD 與版本繪製零組件的協同
----

Solvespace 是開源的參數式 CAD, 所建立的零組件檔案只能轉進 CoppeliaSim.

NX 是高階的參數式 CAD/CAM/CAE 套件, 目前使用的 NX 共有 NX12, NX1980 與 NX2008, 利用舊版 NX 建立的零件檔案, 可以用新版打開, 但若該檔案由新版 NX 編輯後, 就無法讓舊版的 NX 開啟, 因此在協同產品設計時, 若組員中分別使用不同版本的 NX 建立零組件, 則參數 CAD 的協同流程只能單向進行, 但無論採用哪一版的 NX 建立零件檔案轉為 STL 後, 都可以進入 Coppeliasim 建立模擬場景.

 而 Onshape 則是全雲端的參數式 CAD, 在沒有後端 API 權限的情況下只能利用 Featurescript 協助建立參數式驅動的 uarm 機械手臂零件.


&lt;div id="disqus_thread"&gt;&lt;/div&gt;
&lt;script&gt;
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://https-mde-tw-eng.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
&lt;/script&gt;
&lt;noscript&gt;Please enable JavaScript to view the &lt;a href="https://disqus.com/?ref_noscript"&gt;comments powered by Disqus.&lt;/a&gt;&lt;/noscript&gt;</t>
<t tx="yen.20170108171605.1"></t>
<t tx="yen.20170108171605.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="yen.20170108171605.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="yen.20170108171733.1"></t>
<t tx="yen.20170108171733.2">@language python
import os

os.system("pelican markdown -o blog -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="yen.20170108171733.5"></t>
<t tx="yen.20170108171733.71"></t>
<t tx="yen.20170108171733.81"></t>
<t tx="yen.20170108171733.83">sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt

</t>
<t tx="yen.20170108171930.1">@language python
import os
import subprocess
import threading
import http.server, ssl

def domake():
    # build directory
    os.chdir("./../")
    server_address = ('localhost', 5443)
    httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print(os.getcwd())
    print("5443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170108171939.1">@language python
import os
import subprocess
import threading
import socket
import http.server, ssl

class HTTPServerV6(http.server.HTTPServer):
    address_family = socket.AF_INET6
  
def domake():
    # build directory
    os.chdir("./../")
    ipv6_address = '::1'
    server_address = (ipv6_address, 6443)
    #httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
    httpd = HTTPServerV6(server_address, http.server.SimpleHTTPRequestHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket,
                                   server_side=True,
                                   certfile='localhost.crt',
                                   keyfile='localhost.key',
                                   ssl_version=ssl.PROTOCOL_TLSv1)
    print("6443 https server started")
    httpd.serve_forever()

# 利用執行緒執行 https 伺服器
make = threading.Thread(target=domake)
make.start()</t>
<t tx="yen.20170224232341.1"></t>
</tnodes>
</leo_file>
