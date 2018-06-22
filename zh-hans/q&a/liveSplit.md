# LiveSplit使用手册

LiveSplit是一款主要用于speedrun.com的计时软件。

本页面将教会你如何使用LiveSplit去为speedrun.com上的Ballance世界纪录榜创造合法的成绩。

本教程只涉及LiveSplit的操作，至于显示帧率等必须内容请另寻参考。

## 下载

请从[LiveSplit官网](http://www.livesplit.org/)下载文件，下载下来是个压缩文件（因为LiveSplit不需要安装程序），解压到你想要的地方即可。双击LiveSplit.exe运行即可，第一次运行可能需要管理员权限，确认给予即可

## 配置

打开后的LiveSplit如图所示：

![livesplit-1](../../assets/q&a/livesplit-1.png)

由于LiveSplit只有英文版，所以英文不好的请按教程操作。接下来我们设置按键，右键LiveSplit的窗口，选择：Settings，打开如下窗口：

![livesplit-2](../../assets/q&a/livesplit-2.png)

对于Ballance，我们只需要关注一些项目就好：

* Start/Split：开始计时/分片（稍后讲述什么是分片）
* Reset：重置计时器

我们需要针对这2项设置按键以方便计时，点击对应描述右边的文本框，然后按下你想要设置的按键就可以设置了。对于玩Ballance，知道这两项设置就足矣，如果你英文很好，也可以自行理解设置其余，注意，如果下方的Global Hotkeys被勾选，请将其取消。

## 针对UIL的设置

此时你的计时器就可以开始计时了，按下你刚刚设置的Start/Split按键来开始计时，然后再按一下结束计时，再按下设置的Reset重置计时器。

> 右键计时器-Control也可以进行操作只不过很慢，不如按键来的快

什么？没反应？那么你需要注意下Global Hotkeys选项，这代表着全局按键，开启之后，即使你当前窗口不是LiveSplit，LiveSplit仍能按照你设置的按键工作。建议：当你确定要玩游戏的时候把它打开，否则再如何按键也是无效的。当你想暂停会出去聊个天，把这个选项及时关闭，不然你在聊天过程中会出现些意外事故，比如不小心按到你设置的按键之类的。

> 右键计时器-Control可以快速开关Global Hotkeys选项，不必进入Settings界面

## 针对URTA的设置

针对URTA的设置比UIL更加复杂，因为它需要分片计时。

### 设置界面

右键计时器-Edit Splits打开如下画面

![livesplit-3](../../assets/q&a/livesplit-3.png)

在Game Name一栏中输入 **Ballance** （注意大小写），然后点击OK，会发现计时器变成如下模样

![livesplit-4](../../assets/q&a/livesplit-4.png)

> 如果无法呈现界面，可能是你的网络环境太差以至于speedrun.com被屏蔽了，请刷新或者尝试VPN

### 添加文字

再次右键计时器-Edit Splits打开Splits Editor，显而易见，中部有一个表格，我们需要在里面填写12/13关（取决于你要破的纪录）关卡的名字。首先让我们双击Segment Name下第一行的空白处，输入 **Level 1** 然后随便在空白处点下使我们退出输入模式。这样我们就完成了第一关的输入。点击左侧的Insert Below在当前选择项下面插入新行，以此类推完成所有关卡名字的录入，录入完成后列表大概如下图，然后点击OK

![livesplit-5](../../assets/q&a/livesplit-5.png)

点击OK后会退回计时器界面，你可以看到计时器呈现下图样式：

![livesplit-6](../../assets/q&a/livesplit-6.png)

### 保存界面

右键计时器-Save Splits As，选择一个你喜欢的地方保存，名字任意。

注意，请在每次退出前执行保存指令（右键计时器-Save Splits），这个操作同时也会保存你的最佳成绩于你选择位置的一个新文件中（不要误删文件了）。

### 开始计时

操作方法与UIL基本一致，按下设置的Start/Split按键来开始计时，再按一下，会发现计时器高亮项跑到第二项去了，并且第一项的时间不再流动，这就叫做 **分片** ，此操作用于在一个计时过程中分别计时你单独某关卡所用时间。

通过不断地通关，按下Start/Split按键来分割计时，当你结束最后一关的时候，再按下Start/Split按键，计时彻底停止。此时可按Reset按键重置计时器。

> Reset按键在计时未停止时是无效的

> 如果Reset时跳出对话框，此对话框极有可能是询问你，你当前已经创造了你自己的新纪录，是否保存成绩，点击是即可

### Splits Editor的其他操作

左侧按钮的一些翻译：

* Insert Above：在上方插入新的一行
* Insert Below：在下方插入新的一行
* Remove Segment：移除当前选中行
* Move Up：上移选中行
* Move Down：下移选中行

如果你想要删除你的成绩（显示在界面右边的），选择Other-Clear Times即可

## 其余常用技巧

> 一旦你以URTA模式关闭了LiveSplit，下次启动时，LiveSplit应当会自动加载你保存的界面。如果不能加载，右键计时器-Open Splits-From Files，选择你保存的文件即可

> 从URTA模式切换到UIL模式：右键计时器-Close Splits

> 从UIL切换至URTA模式（在你已经配置了URTA相关内容的前提下）：右键计时器-Open Splits-From Files，选择你保存的界面文件即可

> 退出LiveSplit：右键计时器-Exit




