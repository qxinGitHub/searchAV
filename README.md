# 根据番号快速搜索
- 在线安装 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/423350)
- 脚本出现的原因是因为经常在一些论坛上有好心人分享番号, 但是需要复制、新开页面、粘贴、搜索太复杂, 所有有了这个脚本来简化这个步骤

#### 功能
- 在网页标注所有番号,一般番号显示绿色下划线,浏览过的显示虚线。素人等一些无码片显示蓝色下划线,无菜单。  
- 鼠标滑过可以激活搜索菜单  
- 点击番号可以直接复制  
- 对于不识别的番号, 可以鼠标选择番号, 会进行搜索, 类似于滑词搜索  
- 自定义搜索: 点击浏览器上的“TamerMonkey”扩展: “根据番号快速搜索” - “自定义搜索”

#### 不足
<!-- 1. 2022-07-25 未补全0的番号,能识别, 但是网页一直实线标记,无法判断是否浏览过。例: abc-01, 实际番号应该是abc-001 -->
2. 2022-07-24 在javbus测试中出现了有下划线,但是无菜单,无功能的情况。在javbus如果是通过搜索进去的帖子就会概率出现这种问题,网址链接后面通常有 &highlight=
7. 偶尔会出现javbus拒绝访问的情况,原因未知, 带来的后果就是无法获取到该番号的相关信息
<!-- 5. 虽然用的谷歌翻译,但效果并不好。不懂日语,纯粹从翻译结果的可读性来看,相较于有道和百度, 它的表现最差
9. 论坛中的用户名是字母加3位数字的情况下会被识别成番号
8. ~~番号中将字母或数字单独添加html标签的, 识别错误~~  v0.10.4 
6. ~~关于番号:只能识别 字母-数字 的番号, 其他类型不识别或者识别错误~~ 可以识别fc2等, 点击番号可以跳转到javdb进行搜索。 v0.10.0
2. ~~有时简介会被重复两次(甚至三次)~~ 标题还是会偶尔重复 v0.9.1
3. ~~当番号处于换行时,搜索菜单会显示在第二行~~ 图片加载完成后, 0.3s内鼠标划过去就可以 v0.9.1
4. ~~带链接番号会识别错误~~ 例:javdb详情页的番号,&lt;a&gt;abc&lt;/a&gt;-123 , 现在不再识别,略过 v0.9.2  
1. 才疏学浅,知道的网站就几个,但有番号的网站千千万,,所以默认是对所有网站开启的   
 -->
<!-- #### 待办
2022-07-23: 素人番号等小众番号会直接跳转javdb, 实际可以显示信息的。可以从freejavbt中获取,并且在弃用的v0.9.3中已经写过相关函数 -->


### 更新历史
 > v0.10.7 2022-07-28
  - 修复: 排除在input, textarea编辑时, 鼠标选中划出后依旧触发的问题。例: 在搜索栏选中也不会触发菜单了
  - 增加: 设置中可以设置滑词搜索的具体长度, 设置0可以关闭滑词搜索。 "selectLength": 0,
  - 增加: 设置菜单增加“测试按钮”和“清空设置”
  - 调整: 删掉排除的关键字 bmw, 增加关键字 next
  - 调整: 排除网站亚马逊 .amazon.tld
  - 调整: 增加了 MKD-S、KITAIKE、XXX-AV、CRAZYASIA、PEWORLD、PARATHD(有菜单) 的识别
  - 开始佛系更新
 > v0.10.6 2022-07-27
  - 修复: 排除一些用户名。在链接内没有横杠的番号,包括图书馆的td标签, 将其视为用户名, 不在识别。
  - 修复: 阻止番号的冒泡事件。例: 如果番号在链接内,点击番号会出现,即复制了番号(或者打开javdb),又点击了链接的问题
  - 修复: 排除在input, textarea编辑时, 鼠标选中后触发的问题。例: 在搜索栏选中也不会触发菜单了
  - 修复: 未补全的番号, 也会存到本地。例: abc-01, 实际番号应该是abc-001 ,之前只存正确的番号
  - 注释: 删掉了一些用不到代码, 出了问题去上个版本找。
 > v0.10.5 2022-07-26
  - 改进: 扩充了“数字字母-数字”这种素人番号的识别范围
  - 调整: 番号字母搜索扩大到6位, 之前5位
 > v0.10.4 2022-07-25
  - 修复: 鼠标滑过也会被标记为看过的问题  
  - 修复: 未补全0的番号,能识别, 但是javbus会跳转失败的问题。例: abc-01, 实际番号应该是abc-001
  - 修复: 部分网站延迟加载的问题  
  - 修复: 番号中将字母或数字单独添加html标签的 可以识别 (带链接的除外,例javdb详情页中的番号)
 > v0.10.3 2022-07-24  
  - 修复: 鼠标选中后, 右击也会触发的问题  
  - 修复: fc2的识别太广泛,导致一些网址被识别成fc2番号的问题  
  - 增加: 对heydouga的识别,只有跳转功能。 例: heydouga-1234-123  
  - 增加: 可以自定义颜色, 直接把需要的代码加在设置中就可以。具体 [看图](https://github.com/qxinGitHub/searchAV/blob/main/img/searchav%20%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2.png)
 > v0.10.2 2022-07-23
  - 增加: 现在能识别的素人番号: 200GANA、229SCUTE、259LUXU、261ARA、277DCV、300MIUM、300MAAN、300NTK、345SIMM、358WITH、390JAC、390JNT、428SUKE
  - 修复: 对于一些分享的番号中数字后带C也能识别, 例如: abc-123C
  - 改进: 对于fc2等直接跳转的番号, 改为自定义标签, 不在是a标签链接,降低对原网页的破坏。
 > v0.10.1 2022-07-22
  - 增加: 可以识别200GANA、259LUXU、300MIUM、一本道、东京热、HEYZO的识别, 点击直接跳转到javdb搜索, 无菜单,不会有多余信息展示, 下划线是蓝色
  - 修复: 相机名词识别成番号的问题: ILCE-6000
  - 调整: 番号后的数字识别由2-4位调整为2-5位数字。
  - 调整: 直接跳转javdb搜索的fc2和本版本新添加的番号下划线改为蓝色#66ccff
 > v0.10.0 2022-07-21
  - 增加: 可以自定义搜索链接了, 点击浏览器上的“TamerMonkey”扩展: “根据番号快速搜索” - “自定义搜索”。自己常用的搜索恐怕就一两个, 各位司机们自己设置吧,删掉不用的搜索, 加上自己私藏的网站。
  - 增加: 匹配fc2,  只有一个功能就是跳转到 javdb 进行搜索, 没有搜索菜单。
  - 改进: 增加了 freejavbt 和 jable 搜索。
  - 修复: 对于一些番号中是两位数字, 但是实际是三位数字, 会导致查询失败的问题。例: abc-01, 实际番号应该是abc-001

 <!-- > v0.9.3 2022-07-06
  - 改动: 信息从javbus转移到从freejavbt获取,下面的两处改动都是由此引起。这个网站的番号更全, 同一个番号, 演员也更全。稳定方面还不清楚, 唯一发现的一点是这个网站的图片加载速度慢
  - 改动: 1.搜索中添加 freejavbt 网站。
  - 改动: 2.演员链接从xslist.org转移到freejavbt获取 -->
 > v0.9.3 2022-07-07
  - 修复: “标题翻译”的保存不完整, 再次浏览番号的时候, 标题只剩开头的问题
  - 修复: 没有横杠的情况下, 能正常显示番号信息, 却跳转失败的问题
  - ~~近期还会更新~~
 > v0.9.2 2022-07-06
  - 改进: [findAndReplaceDOMText](https://github.com/padolsey/findAndReplaceDOMText) 从 0.4.0 提升到 0.4.6 。提高了识别率, 解决了一些div前后有数字无法识别的问题
  - 界面: “javbus页面”和“javbus搜索”合并到一起, 有具体页面就具体页面打开, 没有则替换成javbus的搜索
  - 改动: 番号中带有链接(abc-123), 例如仅仅abc是链接,而外面数字不是的情况下, 现在不再识别, 直接跳过。例: javdb的详情页。
  - 改动: 增加 @license      MIT
 > v0.9.1 2022-07-06
  - 修复: 排除显卡型号 例: xfx588 (之前写错了)
  - 修复: 排除番号中有网站地址的情况: 例 jav123、javdb-123
  - 修复: 获取不到演员的情况下, 标题会重复出现的问题(还是会偶尔重现, 但是几率小很多)
  - 修复: 搜索不到页面时, 无法将番号保存到本地的问题
  - 修复: 快速滑过番号, 也会被保存到本地的问题
  - 改进: 菜单的插入方式改回了最开始的状态, 直接插入到body页面
  - 界面: 增加了图标, 颜色为Ph黄
 > v0.9.0 2022-07-05
  - 修复: 部分标题中存在番号的问题
  - 修复: 滑词:一般番号(字母+数字)的情况, 如果字母和数字中间有其他的标点,现在也能滑词识别
  - 改进: 以前保存了太多无用的信息, 这次进行了删除
  - 改进: 鼠标选中的长度需要在12个字符以内才可以识别
  - 界面: 浏览过的番号下划线改为虚线, 新的番号还是以前的实线
  - 界面: 由于删掉了本地存的信息, 现在重复滑过番号只显示演员和翻译后的标题。
  - 相较于 0.8.x 版本, 并未添加新的功能, 只是大面积整理了代码
  - 添加了一些注释, 如果需要改脚本自用的话应该更方便些
  - 如果图片还是出现了越界的情况, 大概率是因为在2s内图片没能加载成功。
 > v0.8.4 2022-07-05
  - 修复: 删除父元素及祖父元素中网站自带的title, 否则会触发影响菜单,导致菜单消失。例如 javlib
  - 修复: 滑词搜索中有空格就不识别的问题 例:“abc 123”
  - 修复: 部分网站图片过小的问题, 例如javbus
  - 修复: 图片偶尔越界的情况,显示在屏幕下方
  - 改进: 如果菜单栏出现在屏幕右侧, 图片不再压缩, 以默认600像素宽度的大小显示
  - 改进: “abc123” 这种中间没有横杠的, 不再自动增加横杠
  - 改进: 中间用空格代替横杠的也能识别 例:“abc 123”
  - 界面: 当javbus没有相关页面时, 不再删除, 而是禁用。
  - 界面: 菜单中文字段落之间增加了距离
 > v0.8.3 2022-03-18
  - 修复: 鼠标选中后搜索, 菜单无法消失的问题
 > v0.8.2 2022-03-17
  - 修复: 鼠标必须滑过菜单才能消失的问题
  - 修复: 获取不到图片报错的问题
  - 修复: 理论上解决了图片重复加载的问题
  - 改进: 重新停留0.5秒后就获取图片, 之前是1.5s
  - 改进: 鼠标选中的长度需要在10个字符以内才可以识别, 过长会忽略掉
 > v0.8.1 2022-03-07
  - 修复: 鼠标在番号移动,导致弹出界面不断刷新的问题
  - 修复: 鼠标选择内容重复弹出界面的问题
  - 问题: 当弹出菜单后,只有鼠标滑过菜单才会消失 2022-03-07记录
 > v0.8.0 2022-03-04
  - 增加了滑词搜索(针对一些无法自动识别的问题)
  - 增加javDB搜索
  - 变动了位置显示的代码
  - 改动了界面
  - 位置太靠左会跑出屏幕外的问题
  - 去掉了一个定时器, 动态加载的无法自动识别, 可以滑词搜索
  - 更改了颜色提示,改为绿色下划线(最新版edge测试通过,其他浏览器不清楚)
  - 排除掉域名是qq的所有网站
  - 今天二月二
 > v0.7.9 2021-11-05
  - 改进: 排除显卡型号和帧率 例: xfx588, fps150
 > v0.7.8 2021-10-30
  - 改进: 排除手机镜头型号 例: imx586
 > v0.7.7 2021-09-26
  - 改进: 排除知乎
 > v0.7.6 2021-09-16
  - 修复: v2ex的网址不全
 > v0.7.5 2021-09-07
  - 改进: 排除一些购物网站。商品名很容易“字母+数字”
 > v0.7.4 2021-09-04
  - 修复: 将hp识别成番号的问题 例:hp-450
 > v0.7.3 2021-08-20
  - 修复: 网页延迟载入时,无法识别的问题
  - 修复: 将nc识别成番号的问题 例:NC-17
  - 修复: jellyfin无法识别的问题(理论上emby也可以,但是我没用emby,具体还不清楚)
  - 改进: 锁定字体颜色为黑色,增加圆角
 > v0.7.2 2021-08-18
  - 修复: 将AES识别成番号的问题 例:AES-256
 > v0.7.1 2021-08-11
  - 修复: javbus链接错误
  - 修复: 图片在页面底部看不到的问题(仅限于已浏览过的番号, 第一次重新加载图片的情况)
 > v0.7.0 2021-08-10
  - 修复: 经常被遮挡的问题
  - 修复: 当番号在页面底部会导致无法查看和操作的问题, 感谢[jywyf](https://greasyfork.org/zh-CN/scripts/423350/discussions/93317)老哥一直源源不断的建议
  - 改进: 当背景是图片时,看不清字的问题; 固定字的大小
  - 不知被哪位司机翻牌, 该脚本从一天十几的下载量猛增到一天一千多,愿称你为车神。特此处理几个影响使用体验的问题
 > v0.6.3 2021-07-24
  - 修复: btsow 的网址 调整为 btsow.com 
 > v0.6.2 2021-07-24
  - 修复: 将error识别成番号的问题 error522
 > v0.6.1 2021-07-12
  - 修复: 将cpu识别成番号的问题 cpu100%
 > v0.6.0 2021-06-30
  - 增加: 根据建议给演员增加了链接(半成品)
 > v0.5.6 2021-06-27
  - 修复: nas型号识别为番号的问题: ds-220
 > v0.5.5 2021-06-24
  - 改进: 排除抖音
  - 修复: xslist网站不识别的问题
 > v0.5.4 2021-06-23
  - 修复: 手表型号识别为番号的问题: gbx-100
 > v0.5.3 2021-06-18
  - 修复: 网卡识别为番号的问题: ax200
 > v0.5.2 2021-06-15
  - 修复: 相机名词识别成番号的问题: iso ILC
 > v0.5.1 2021-06-09
  - 修复: 英文日期识别成番号的问题 例:21-Jan-2021
 > v0.5.0 2021-06-04
  - 修复: 无法加载图片的问题。javbus的图片使用了防盗链,应该是网站正常升级,只是被误伤
 > v0.4.9 2021-06-01
  <!-- - 修复: 之前的版本更新导致依旧将covid等关键词识别为番号 -->
  - 修复: 关键词后的数字识别为番号的问题
 > v0.4.8 2021-05-31
  - 改进: 自动识别番号的时候,排除两位和四位数字,只识别三位数字
  - 改进: 默认排除一些网站,主要是用户名的问题,在这些网站上将不会生效: 52pojie.cn、appinn.net、v2ex.com、greasyfork.org、bilibili.com
 > v0.4.7 2021-05-25
  - 修复: 排除cat、hao
 > v0.4.6 2021-05-06
  - 修复: 排除shp
 > v0.4.5 2021-05-06
  - 修复: 继续排除一些特殊简写:dos|win|os|osx|ipad|lumia|miui|flyme|emui|note|snh|bej|gnz|ckg|akb|gp|gt|gts|gtx|covid|html|css|aptx|rx|mh|bmw|sn|au|cc|cctv|df|qbz|qsz|ak
 > v0.4.4 2021-05-03
  - 修复: 将 covid-19 识别成番号的问题
 > v0.4.3 2021-04-28
  - 修复: 重新打开页面,如果悬停的第一个番号是之前已浏览过的番号,不会重新获取信息的问题
 > v0.4.2 2021-04-28
  - 改进: 鼠标在番号停留2s,可以重新获取信息
 > v0.4.1 2021-04-28
  - 修复: 把一些网站排行榜也识别成番号的问题。 类似 top10 这种
 > v0.4.0 2021-04-28
  - 增加: 第一次打开番号的时候会加载封面, 后续不会(从0.4.2开始,鼠标在番号处停留2s以上,会重新加载图片)
  - 修复: 日期识别成番号的问题
 > v0.3.1 2021-04-28
  - 改进: 可以忽略番号之间的横杠。直接英文加数字也可以识别
  - 改进: 正则匹配中增加了[否定环视](https://www.zhihu.com/question/21015580/answer/16902391), 能排除一些中英文混用的用户名和网址。
  - 想法: 本想用精确的番号匹配,但是识别率更差。哪怕用[番号大全](https://github.com/imfht/fanhaodaquan)导入了不重复的5458个番号的英文, 依旧漏拉严重
 > v0.3.0 2021-03-19
  - 增加: 翻译标题功能 翻译函数取自于作者 Johnny Li 的脚本[ “网页翻译助手” version:1.2.9,](https://greasyfork.org/zh-CN/scripts/389784) 许可协议MIT
 > v0.2.0 2021-03-17
  - 增加: 增加相关简介,第一次浏览时从javbus获取, 再次浏览时从本地获取
 > v0.1.1 2021-03-17
  - 修复:显示位置错误
 > v0.1 2021-03-16
  - hello world 


#### 演示图片的版本 v0.1.x:  
![例图](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/searchav.png)


#### 开源声明
- [findAndReplaceDOMText](https://github.com/padolsey/findAndReplaceDOMText) version:0.4.6 作者:padolsey, 许可协议:[unlicense](https://unlicense.org/)  
- [“网页翻译助手”](https://greasyfork.org/zh-CN/scripts/389784)version:1.2.9, 作者: Johnny Li, 许可协议[MIT](https://opensource.org/licenses/mit-license.php)  
- [显示防盗链图片 for Inoreader](https://greasyfork.org/zh-CN/scripts/376884) version:0.1, 作者: maboloshi  
- 还有各种搜索后随手复制的
