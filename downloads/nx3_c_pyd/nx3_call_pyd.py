#coding: utf-8
# 導入 nx3.pyd
from nx3 import *

##############################
# 啟動 nx3
if (nx3init() == 0):
    print("nx3 啟動")
else:
    print("nx3 無法啟動")
##############################
# 開啟既有的零件檔案
partopen("block.prt")
# 針對所開啟的零件檔案, 設定其中的尺寸變數

for i in range(1,21):
    for j in range(1,21):
        editexp("p0",i*1.6543)
        editexp("p1",j*1.4563)
        editexp("p2",6)
        # 進行零件的資料更新
        modelupdate()
        '''
        # 進行相關繪圖函式的呼叫
        corner = [10,10,0]
        edge = ["10","10","10"]

        nx3block(corner[0],corner[1],corner[2],edge[0],edge[1],edge[2])
        '''
        # 將尺寸變更後的零件進行存檔
        #partsaveas("finalblock.prt")
        #savebinstl("finalblock.stl")
        print(askvolume()/2.54/2.54/2.54, "立方英吋")
partsaveas("finalblock.prt")
partclose("finalblock.prt")
##############################
# 終止 nx3
if (nx3term() == 0):
    print("nx3 終止")
else:
    print("nx3 無法終止")
##############################

