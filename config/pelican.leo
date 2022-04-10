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
<v t="leo.20220407155920.1"><vh>@clean 20200407.md</vh>
<v t="leo.20220407160001.1"><vh>w7 程式專案</vh></v>
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

[2a 分組]: https://mde.tw/cd2022_guide/content/Brython.html?src=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/0999a227153ea9a20954e4b2b77f783337197627/w4_grp_src.py&amp;src2=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/0999a227153ea9a20954e4b2b77f783337197627/w4_grp_src2.py
[2b 分組]: https://mde.tw/cd2022_guide/content/Brython.html?src=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/507db6ddb7b5bcdd3027235761208b32ac93bcd0/w4_b_grp.py&amp;src2=https://gist.githubusercontent.com/mdecourse/e00a3b68d4defee1987d18cc998b377a/raw/507db6ddb7b5bcdd3027235761208b32ac93bcd0/w4_b_grp_src2.py
[Onshape 中的 uArm 組立圖]: https://cad.onshape.com/documents/21d631bfd9ab509e3a2079c0/w/832791ed26ad65d49a0711b4/e/6957bf222554da36040535be
 [分配 NX 教學影片]: https://www.youtube.com/watch?v=GUaa97tALxE&amp;list=PLzEsJue49U_EMMv0eBo8MNJjJOq_WHCrl

以下為第三週的課程教學影片:

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/roJ3Bk44qO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;

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
----</t>
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
