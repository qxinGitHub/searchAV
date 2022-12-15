脚本出现的原因:  在一些论坛上经常有好心人分享番号, 但是需要复制、新开页面、粘贴、搜索太复杂, 所有有了这个脚本来简化这个步骤。  
在线安装 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/423350)
### 功能
* 标记网页所有番号, 未浏览过的显示绿色下划线, 浏览过的显示蓝色虚线,浏览过且没找到相关信息的显示红色虚线。颜色可以在设置中更改
* 鼠标滑过可以激活搜索菜单, 激活方式和搜索选项可以在设置中更改
* 标记网页中的磁链文本, 改为链接, 可以在设置中关闭
* 点击番号复制
* 默认没有启用的其他功能, 需要在设置中开启:  
	* 开启`色花堂` 搜索按钮, 需要在设置中开启 `"sehuatang":true,`
	* 划词搜索默认处于关闭状态  
	* 查询本地 jellyfin/EMBY 中是否存在相关番号,需要设置两处: 本地地址 `jellyfinHost` 和ApiKey `jellyfinApiKey`  

![2022-08-17 自带12色.gif (871×654) (raw.githubusercontent.com)](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/2022-08-17%20%E8%87%AA%E5%B8%A612%E8%89%B2.gif)

# 一、设置
### 1. 打开设置
点击浏览器上的`TamerMonkey`扩展: `“根据番号快速搜索” - “自定义搜索”`。  
![2022-09-18_18-25-31 打开设置.png (390×161) (raw.githubusercontent.com)](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/2022-09-18_18-25-31%20%E6%89%93%E5%BC%80%E8%AE%BE%E7%BD%AE.png)


### 2. 设置总览
有很高的自由度, 但是改动错误可能导致脚本无法运行。  
如果突然之前设置好的选项没有效果了, 通常是设置有所变动, 你可以来此查询。
目前可以设置的选项:
```
"debug":false,   // 会在番号上额外添加一些信息, 不建议开启
"selectLength":0,  // 选中搜索的字符长度。超过该长度的会忽略掉, 设置0可以关闭划词搜索。 
"javbus":"https://www.javbus.com/", // 自定义javbus网址 "https://www.javsee.bid/"
"javdb":"https://javdb.com/",    // 自定义javdb网址 "https://javdb004.com/"
"clickToMenu":false,    // 鼠标点击番号才会出现菜单
"dontClearMenu": false, // 鼠标移出后,菜单不会消失(测试时找问题使用, 开启会影响脚本使用)
"includeIDinLinks":true,    // 番号本身是个链接的情况下是否识别
"dontImgBig": false,    // 图片点击放大, 包括滚动放大
"dontGetInfo":false,    // 获取番号的相关信息(从javbus获取)
"dontGetInfoFc2":false, // 获取fc2的相关信息(从fc2hub获取)
"dontGetInfoWuma":false,    // 获取无码番号的信息, 大量访问会导致javdb禁止你的ip访问一到两个星期。
"getInfoFailToJavDB":false,    // 从javbus获取不到信息时, 会从javdb尝试获取。有被javDB封IP的风险
"dontCopyMagnet":false, // 旧, 弃用
"dontMagnetDiscern":false,   // 将磁链转为链接
"magnetCopy":false,     // 磁链不转化链接,点击磁链复制到剪贴板 
"dontTransTitle":false, // 翻译标题
"dontTransTags":false,  // 翻译标签
"dontGetVideo":false,   // 关闭视频预览
"videoVolume":0.2, // 视频播放时的音量
"fc2Thumbnail":false,   // fc2 的预览图是否用缩略图, 用低画质换取快速加载图片
"infoReload": false,    // 浏览过的番号将不会重复获取信息, 避免IP地址被网站拉黑。
"closeJavdbLimit":false,    // 禁止在短时间内多次访问javdb。 设为 true 可以关闭限制, 容易封IP
"closeLoadingAnimation":false,  // 关闭信息加载时的动画
"addOtherButton":false, // 添加3个额外的按钮: 1,设置按钮; 2,番号按钮,点击复制; 3,关闭按钮
"sehuatang":false,  // 添加色花堂的搜索按钮
"jellyfinHost":"http://localhost:8096/",    // 本地的jellyfin的地址
"jellyfinApiKey":"",    // jellyfin中的API密钥  “设置 - 控制台 - API密钥” 点击加号生成一个
"qBitHost":"http://localhost:8080/", //本地 qBittorrent 的地址
"qBitDownload":"",     // 在qBittorrent中才下载地址,注意双斜杠: D:\\_下载\\qBittorrent
"qBitNoPopup":false,   // qbit 弹窗询问是否调用qbit下载
"baiduAppid":"",  // 百度翻译的 APP ID
"baiduKey":"",    // 百度翻译的 密钥
"linkStyle":{   // 没浏览的番号
	"color":"green",  // 颜色  名称:green  十六进制:#00FF00  RGB:rgb(0,255,0) 
	"text-decoration":"underline green",  //下划线
	"font-weight":"normal",   // 加粗: normal、bold、lighter 
	"text-shadow":"rgb(177 177 177 / 70%) 1px 1px",    // 字体阴影
},
"visitStyle":{  // 已经浏览过的番号
	"color":"red",  // 颜色
	"text-decoration":"underline dotted red",   // 下划线
	"font-weight":"normal", // 加粗
	"text-shadow":"rgb(177 177 177 / 65%) 1px 1px", // 字体阴影
},
"noExistStyle":{  // 已经浏览过, 但是没有获取到信息的番号
	"color":"chocolate",    // 颜色
	"text-decoration":"underline dotted red",   // 下划线
},
"list":[],  // 普通番号的搜索列表
"list_wuma":[], // 素人番号的搜索列表
"list_all":[]   // 它俩共同的搜索, 会同时加在上面两个列表的后面
```
在设置菜单中点击`供测试使用`按钮后, 会默认将上面所有选项添加进去, 并且影响脚本功能, 对于无用的信息直接删掉即可。

### 3. 设置内容具体介绍
 `"debug":false,`
* 测试模式, 在番号上额外添加的信息, 控制台中也会输出额外信息,  用来测试脚本使用
* 默认`false`: 关闭
* `true`: 开启。 开启会在菜单中添加额外的搜索和两个按钮: 1, `设置` 2, `番号` 。 会影响网页,在网页上添加额外信息。

`"selectLength":0,`
* 选中搜索的字符长度。超过该长度的会忽略掉, 设置0可以关闭划词搜索。设置更大的数字,例如16,可以应对一些超长的番号。实际使用中颇多的问题。

`"javbus":"https://www.javbus.com/",` 
* 自定义javbus网址, 必须是正确的javbus, 否则脚本会错误
* 默认: https://www.javbus.com/

`"javdb":"https://javdb.com/",`    
* 自定义javdb网址, 必须是正确的javdb, 否则脚本会错误
* 默认:https://javdb.com/

`"clickToMenu":false,`    
* 菜单触发的方式, 默认鼠标滑过, 可改为点击
* 默认 `false` :鼠标滑过番号出现菜单
*  `true` :  需要点击番号才会出现菜单, 如果鼠标经常误触导致出现菜单, 可以改为点击后出现菜单。尤其是一个页面有几百上千个番号的情况, 全部聚拢在一起, 鼠标滑过就显示菜单 很影响操作。推荐开启。

`"dontClearMenu": false,`
* 鼠标移出后,菜单是否消失
* 默认: `false` 。 鼠标离开菜单, 菜单消失
* `true`: 鼠标离开菜单, 菜单不会消失, 会自动在菜单添加一个 `关闭` 按钮。(用来测试脚本使用, 开启会影响脚本使用)

`"includeIDinLinks":true,`    
*  番号本身是个链接的情况下是否识别
* 默认: `true`,  识别, 会导致链接原有的跳转功能失败。
* `false`: 当番号是个链接时, 不再识别

`"dontImgBig": false,`    
* 图片放大功能
* 默认: `false`:图片点击放大, 包括鼠标滚轮放大
* `true`:  关闭图片放大功能

 `"dontGetInfo":false,`    
 * 是否获取发行番号的相关信息
 * 默认: `false`:获取番号的相关信息(从javbus获取)
 * `true`: 关闭从javbus中获取一般发行番号的相关信息, 且本地不会保存番号信息

`"dontGetInfoFc2":false,`
* 是否获取fc2的相关信息
* 默认: `false`:获取fc2的相关信息(从fc2hub中获取)
* `true`: 关闭从fc2hub中获取fc2的相关信息, 且本地不会保存番号信息

`"dontGetInfoWuma":false, `   
* 是否获取无码番号的信息
* 默认: `false`:获取无码番号的信息, 大量访问会导致javdb禁止你的ip访问一到两个星期
* `true`: 关闭从javdb中获取素人等相关信息, 且本地不会保存番号信息

`"getInfoFailToJavDB":false,`   
* 从javbus获取不到信息时, 是否从javdb中尝试获取。这样几乎所有的番号都能获取到信息, 但是有被javDB封IP的风险; 如果你在浏览网页中使用本脚本的频率并不是很高, 只是偶尔浏览一下番号, 可以开启该选项, 获得更好的体验; 开启后会占用javdb搜索的次数。
* 默认: `true`:当从javbus中查不到相关番号信息, 会尝试从javdb中获取信息。
*  `false` :  仅仅从javbus中获取信息, 失败后会提示找不到相关番号的信息。 

`"dontCopyMagnet":false,`
* 旧, 弃用。 停止使用, 如果你的设置里存在该项, 请改成 `dontMagnetDiscern":false` 

`"dontMagnetDiscern":false,`
* 识别网页中的文本磁链
* 默认: `false`: 将网页中的文本磁链转为链接, 网页存在的 hash 也会被转为链接
* `true`: 关闭磁链识别功能

`"magnetCopy":false,`     
* 识别到的文本磁链以何种方式展现。默认链接, 可以改为复制功能。 同时该选项会对链接是磁链的链接起作用。此功能有一部分是脱离上面的 `dontMagnetDiscern`, 想要完整的关闭磁链识别功能, 此处应设置为 `false` 
* 默认: `false`: 将文本磁链识别成链接, 点击磁链跳转
* `true`: 将文本磁链识别成复制, 点击复制磁链

`"dontTransTitle":false,`
* 翻译标题
* 默认: `false`: 默认使用谷歌翻译标题 `translate.google.com.hk`, 如果设置完百度翻译相关api, 将会调用百度翻译
* `true`: 不再翻译标题, 显示原本的标题, 通常是日语

` "dontTransTags":false,`  
* 翻译标签, 使用的是内置列表进行替换。存在替换不完全的问题。仅针对javbus和javdb, fc2的标签无法替换
* 默认: `false`:  将标签翻译为简体中文
* `true`: 不再翻译标签, 显示原本的标签, 通常是繁体汉字,(fc2是日语)

`"dontGetVideo":false, `
-  视频预览, 只支持Dmm和fc2
- 默认: `false`:  开启视频预览功能
- `true`: 关闭视频预览功能

`"videoVolume":0.2,` 
- 视频播放的音量, 可设置选项为数字0-1之间,1为音量100%, 0是关闭声音。
- 默认: 0.2
- **注意**: FC2的音量不受控制。

`"fc2Thumbnail":false,`
* fc2 的预览图是否用缩略图, 用低画质换取快速加载图片
* 默认:`false`: 使用原图, 图片较大
* `true`: 使用缩略图, 原图大概4兆左右, 开启后会使用缩略图, 大小只有原来的1/10, 点击放大会不清晰
* 2022-10-20 v0.19.0注: fc2的图片获取有问题, 尽量别碰这个选项 , 未来可能会删掉

` "infoReload": false, `
* 浏览过的番号将不会重复获取信息, 避免IP地址被网站拉黑。
* 默认: `false`: 
* `true`: 不使用本地的信息, 每次浏览都会重新从网站中获取, 开启后有封IP地址的风险, **不要开启**。

`"closeJavdbLimit":false,`
* 增加从javdb获取信息的时间限制, 防止被javdb网站拉黑IP地址。
* 默认: `false`: 禁止在短时间内多次访问javdb。5分钟10次
* `true`: 取消脚本对javdb的限制, 不受限制的访问javdb, 极其容易封IP, **不要开启**。

`"closeLoadingAnimation":false,`
* 信息加载时的动画
* 默认: `false`: 开启信息加载的动画
* `true`: 关闭信息加载时的动画

`"addOtherButton":false,`
* 额外的按钮
* 默认:`false`: 不会添加额外的按钮
* `true`: 添加3个额外的按钮: 1, `设置` 按钮; 2, `番号` 按钮,点击复制; 3, `关闭` 按钮

`"sehuatang":false,`  
- 添加色花堂的搜索按钮
- 默认:`false`
* `true`:  将色花堂的搜索添加到列表中。点击后, 由于需要解析地址, 所以新开网页会慢一些。
* 提示: 如果失败的话,则会打开色花堂的搜索界面(此时并没有搜索具体内容), 可以直接粘贴就行, 已经自动复制好番号。

`"jellyfinHost":"http://localhost:8096/",`
* 本地的jellyfin的地址, 需要修改成你自己的地址, 如果是在nas中, 就修改成nas的地址
* 默认:`http://localhost:8096/`

` "jellyfinApiKey":"",`
* 外部程序需要密钥才能和jellyfin通信。需要在你的jellyfin中的  `“设置 - 控制台 - API密钥”` 点击加号生成一个
* 设置完`jellyfinHost` 和本选项`jellyfinApiKey`后, 菜单中会自动添加 `jellyfin` 按钮, 查询本地是否存在该番号, 如果有删除线, 说明本地并没有该番号相关的信息。同时也会查询jellyfin中是否存在相关女优, 如果存在, 会在演员后面添加jellyfin的图标, 用来跳转到jellyfin中女优相关页面。

`"qBitHost":"http://localhost:8080/",`
* 本地 qBittorrent 的地址, 需要修改成你自己的地址, 如果是在nas中, 就修改成nas的地址
* 默认:`http://localhost:8080/`

`"qBitDownload":"",`
* 在qBittorrent中的下载地址,注意地址中要使用双斜杠: `D:\\_下载\\qBittorrent`
* 设置完`qBitHost` 和本选项`qBitDownload`后,  且`dontMagnetDiscern`为默认值`false`, `magnetCopy`改为 `true`, 在页面中点击磁链会直接下载, 弹窗返回的数据是qBittorrent的返回数据, 正常返回是 `OK`。如果长时间不返回,例如超过1秒, 通常是出现了错误。

`"qBitNoPopup":false,`
* 点击磁链后会弹窗询问是否调用qBittorrent下载,  并将qBittorrent的返回结果再次弹窗提醒, 共有两次弹窗。
* 默认: `false` 
* `true`: 关闭弹窗询问, 直接调用qBittorrent下载。 如果qBittorrent的返回结果是 `OK` ,则第二个弹窗也会关闭。

`"baiduAppid":"",`
*  百度翻译的 APP ID [百度翻译开放平台](http://api.fanyi.baidu.com/api/trans/product/desktop)

`"baiduKey":"",`
* 百度翻译的 密钥  [百度翻译开放平台](http://api.fanyi.baidu.com/api/trans/product/desktop)
* 设置完`baiduAppid` 和本选项`baiduKey`后, 翻译会更改为百度翻译。

设置页面中番号的相关颜色
* 可以设置的项目不限于下面的举例, 所有选项都是可选的, 还可以设置`border`, `background`等可以设置的css选项。
```
"linkStyle":{   // 没浏览的番号  
	"color":"green",  // 颜色  名称:green  十六进制:#00FF00  RGB:rgb(0,255,0)  
	"text-decoration":"underline green",  //下划线  
	"font-weight":"normal",   // 加粗: normal、bold、lighter  
	"text-shadow":"rgb(177 177 177 / 70%) 1px 1px",    // 字体阴影  
},  
"visitStyle":{  // 已经浏览过的番号  
	"color":"chocolate",  
},  
"noExistStyle":{  // 已经浏览过, 但是没有获取到信息的番号  
	"color":"red",    // 颜色  
},  
```

自定义搜索列表
* `"list":[]` 一般的发行番号, 从javbus获取信息的番号后面跟的搜索列表, 建议直接用 `list_all` 代替, 此列表只保留javdb搜索。
* `"list_wuma":[]`  素人等番号, 从javdb获取信息的番号后面跟的搜索列表, 建议直接用 `list_all` 代替, 此列表只保留javbus搜索。
* `list_all":[]`   它俩共同的搜索, 会同时加在上面两个列表的后面
* 搜索列表两边用中括号, 第一项是搜索名称, 第二项是搜索链接。如果放在列表的最后, 后面不要加逗号, 如果是插入到列表中间, 最后需要加逗号。此处的列表顺序就是按钮的显示顺序。
* 关于如何获得搜索链接: 可以查看这篇文章:[奔跑中的奶酪 ](https://www.runningcheese.com/browser-search)中: `一、关键字搜索 1、添加关键字` 这节的相关介绍。
* 可以删掉所有搜索,仅仅保留`"list": [],`,  此时脚本会保留自带的javbus搜索。 `list_wuma` 会保留javdb搜索
* 搜索词用`%s`替代, 下面的例子是百度搜索的写法  , 会将`百度`搜索加在 `list`和 `list_wuma` 列表后面
```
list_all":[
	[
		"百度",
		"https://www.baidu.com/s?ie=UTF-8&wd=%s"
	]
]
```


---

# 二、排除网站
* 脚本默认是所有网站中运行, 如果你经常访问的网站明知不会有番号, 并且还把网页中的一些字母数字识别成番号, 可以参照下图进行排除。可以以在评论区[反馈](https://greasyfork.org/zh-CN/scripts/423350-%E6%A0%B9%E6%8D%AE%E7%95%AA%E5%8F%B7%E5%BF%AB%E9%80%9F%E6%90%9C%E7%B4%A2/feedback)。
![2022-09-18_20-45-28 排除-step.png (417×275) (raw.githubusercontent.com)](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/2022-09-18_20-45-28%20%E6%8E%92%E9%99%A4-step.png)

* 如果有些番号没有被识别, 或者曾经可以识别, 突然不识别了, 也可以进行[反馈](https://greasyfork.org/zh-CN/scripts/423350-%E6%A0%B9%E6%8D%AE%E7%95%AA%E5%8F%B7%E5%BF%AB%E9%80%9F%E6%90%9C%E7%B4%A2/feedback)。

---
# 三、注意事项
### 1. 关于 javbus
* 有时会遭到javbus的拒绝访问, 具体情况不明。本人的网络环境就无法访问 `STARS-145`相关信息, 在一些老番号上尤为明显。
* 如果番号发生重复,  脚本会无法从javbus这获取信息, 例如 `NTRD-047`, 有两个视频都用此番号。
* ~~通过javbus搜索界面进去的帖子, 无法触发菜单,具体原因也不知道。~~

### 2. 关于 javdb
* 如果设置`"closeJavdbLimit":true,`,解除限制后, 并且短时间内过多的浏览无码素人番号, 会导致javdb封锁IP地址, 致使14天内无法访问javdb。
* 如果你是频繁的浏览素人的番号, 会受到脚本的限制, 不排除依旧就封IP的风险。由于脚本只是记录了从脚本中获取信息的访问时间, 如果在此之外, 还通过浏览器搜索过javdb,  就加大了封IP的风险。如果未使用其他有关javdb的脚本或者没有单独的搜索过javdb, 脚本自带的限制足以应付javdb的封锁策略。
* 如果你本身是直连用户, 那你可以用路由器重新拨号,  就能重新获得IP进行访问。

### 3. 关于 jellyfin 查询
* 开启需要设置`jellyfinHost` 和`jellyfinApiKey` 
* 理论上emby也可以使用, 因为相关API就是从emby中查询的。 
* 查询结果仅供参考, 存在结果不对的情况, 尤其是jellyfin中存在两个相同番号的时候。
* 使用的版本:  [jellyfin 10.8.3](https://github.com/jellyfin/jellyfin/releases/)
* 下图是效果图, 设置正确后, 会增加一个 `jellyfin` 的按钮,点击跳转至本地jellyfin; 如果jellyfin存在相关演员, 演员后面也会加一个按钮, 点击跳转至jellyfin的演员相关页面。
* ![2022-09-26_08-14-57 jellyfin.jpg (642×591) (raw.githubusercontent.com)](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/2022-09-26_08-14-57%20jellyfin.jpg)

### 4. 关于使用 qBittorrent 下载
* 这个功能只有在你的电脑上没有磁链下载软件, 并且你还有其他电脑, 比如nas, 在nas上面开着qBittorrent 的情况下有用。否则, 直接点击磁链就能调用本地软件进行下载。这个功能很绕, 就当不存在吧。
* 开启功能需要设置中更改:`qBitHost` 、`qBitDownload` 、`magnetCopy` 三个选项, 且`dontMagnetDiscern`为默认值`false` , 才能调用qBittorrent下载。
* 需要开启 qBittorrent 的 Web UI,  百度上有相关教程:[教你通过浏览器网页来管理qBittorrent上传下载任务 (baidu.com)](https://baijiahao.baidu.com/s?id=1728372149353644847&wfr=spider&for=pc)。 且网页必须要登录一次才可以。
* 已知问题: `qBittorrent v4.4.5` 文件夹名称会乱码, 用旧版本则不会, 原因貌似是因为 qBittorrent 以 ISO8859-1 方式读取 UTF-8导致 。 本人使用的是非官方版本v4.4.4.10 [c0re100/qBittorrent-Enhanced-Edition (github.com)](https://github.com/c0re100/qBittorrent-Enhanced-Edition/releases) 
* 下载地址可以直接复制你的下图位置这个地址, 你也可以自己输入, 没有的话qBittorrent会帮你创建:   
 * ![2022-09-18_21-20-05 qbit.png (496×646) (raw.githubusercontent.com)](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/2022-09-18_21-20-05%20qbit.png)
 * 因为使用习惯是我自身的, 可能并不适合你。在v0.14.3 2022-09-25,意识到一个问题, 正常人的电脑应该是将磁链识别成链接, 点击后会跳转到下载软件进行跳转, 而不是我这种电脑上没有磁链下载软件, 要下载磁链只能从nas下载的情况。所以在此版本之前, 点击磁链是复制, 这之后是将磁链视为链接。

### 5.关于FC2
* 经常会遇到500错误, 尤其是在晚上(也可能是我网络的问题)
* 获取的FC2发行时间仅供参考, 并不是准确时间
* 视频相关
	* FC2的视频音量无法控制, 各位播放FC2预览视频的时候注意点。
	* 无法判断视频是否已经被官方删除, 所以视频可能无法播放, 但是依旧有播放按钮
	* 2022-10-20注: 目前还不知道fc2视频链接的有效期是多久。10.19加入, 10.23测试还有效

---

# 四、相关信息获取网站
大家是双赢, 脚本拿到了信息,方便了用户, 也留下了跳转链接给网站引流
* 从 [JavBus](https://www.javbus.com/) 获取信息的番号, 显示的搜索列表: `javbus` + 设置中的 `list` + `list_all`
	* 一般的发行番号
	* 东京热n、k系列
	* 加勒比 的**月日年**数字命名系列 
	* 一本道 的**月日年**数字命名系列
	* MuraMura 的**月日年**数字命名系列
	* Mesubuta メス豚 的**月日年**数字命名系列
	* HEYZO
* 从 [JavDB](https://javdb.com/) 获取信息的番号, 显示的搜索列表: `javdb` + 设置中的 `list_wuma` + `list_all`
	* mgstage系列
	* HEYDOUGA
	* T28
	* TMA
	* 1000girl
	* MUGEN Entertainmen: MKD-S  MKBD-S
	* SHINKI:素人
	* KITAIKE:北池袋盗撮倶楽部
	* japornXXX
	* xxx-av
	* crazyasia
	* PEWORLD
	* 10Musume
	* Jukujo-Club:熟女俱乐部 (虽然分类在此, 但是javdb并没有这个番号的相关信息)
* 从 [Fc2hub](https://fc2hub.com/) 获取信息的番号, 显示的搜索列表: `fc2hub` + `javdb` + 设置中的 `list_wuma` + `list_all`
	* FC2
  

* 关于视频的相关源: 
	* 普通番号: 从[DMM](https://www.dmm.co.jp/top/)获取视频
	* FC2: 从[FC2](https://adult.contents.fc2.com/)获取视频
	* 加勒比: 从 [カリビアンコム ](https://www.caribbeancom.com/) 获取视频, 规则 `/[01]\d{5}\-(?:1)?\d{2,3}/i`
	* 一本道: 从[トップページ | 一本道 (1pondo.tv)](https://www.1pondo.tv/) 获取视频, 规则 `/[01]\d{5}\_(?:1)?\d{2,3}/i`
	* HEYZO: 从[HEYZO](https://en.heyzo.com) 获取视频
	* 东京热: 从[Tokyo-Hot　東京熱　無修正オリジナル徹底凌辱動画](https://my.tokyo-hot.com/)获取视频

---
# 五、其他说明
### 1. 关于模糊搜索
- 针对一些网友手误打错番号的情况, 比如这个[分享](https://www.javbus.com/forum/forum.php?mod=viewthread&tid=106356),前三个番号错了两个。
- 使用javdb搜索才会触发模糊搜索,  javbus只有在开启 `getInfoFailToJavDB`后, javbus搜索不到相关信息, javdb中也没有相关信息时, 才会触发。
- 就是用的的javdb返回的第一个结果, 与你搜索的结果做比较, 如果字母部分大差不差, 就用网站返回的番号相关信息。
-  举例: `ASW-242` 这个番号javbus中没有收录, javdb中也没有收录, 所有当浏览这个番号的时候, 脚本会给你番号 `ABW-242` 的相关信息, 因为javdb返回的第一个结果就是它, 并且和搜索的番号只有一个英文字母的差别。(javlibary中有收录该番号)

### 2. 关于翻译
* 默认谷歌翻译,需要科学上网; 如果设置 `baiduAppid` 和 `baiduKey` , 则改为调用百度翻译。
* 网页谷歌翻译和脚本进行调用后, 翻译结果不同, 这种情况就离谱。
* 谷歌翻译偶尔会返回英文, 例如这句话“デリヘルでみつけたドM天使-実写版- 辻井ほのか 松本いちか 椿りか”, 它给的中文翻译结果是“De Masochist Angel Found At Deriheru - Live Action Version - Honoka Tsujii Ichika Matsumoto Rika Tsubaki”。(有可能是我网络的问题)
* 百度相关api获取网址[百度翻译开放平台](http://api.fanyi.baidu.com/api/trans/product/desktop), [认证完成](http://api.fanyi.baidu.com/doc/13)每月享有100万字的翻译额度, [百度翻译认证的相关文档](https://fanyiapp.cdn.bcebos.com/api/doc/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E9%80%9A%E7%94%A8%E7%BF%BB%E8%AF%91API%E6%9C%8D%E5%8A%A1%E5%8D%87%E7%BA%A7%E8%AF%B4%E6%98%8E.pdf)

<details>
<summary>点击此处查看翻译的对比结果</summary>
<pre>
* 原文1: 夫には言えない… 义父に犯れ続けていることを…。 白花こう  
* 色花堂翻译: 无法对老公说出口…我被公公持续侵犯…  
* 网页谷歌: 我不能告诉我丈夫……我的岳父继续强奸我…… 白色的花  
* 脚本调用:不能告诉我的丈夫……我被我的岳父操了……白色的花
* 百度: 不能对丈夫说…继父持续被犯的事…。白花膏
* 腾讯: 我不能对丈夫说...。一直被继父犯下的事。白花(白花)
* 讯飞: 不能对丈夫说…一直被父亲犯下的事…。白花钢
* 彩云: 不能对丈夫说... 继父不断侵犯我的事... 。白花吧
	-
* 原文2: 骗されて参加した乱交パーティーで媚薬渍け！家庭的で真面目だった姊が変わり果てた姿に…。姊を助け出すはずが、姊と强近亲相奸させられ…
* 色花堂翻译: 骗去参加乱交派对的姐姐 本应该去救出姐姐却被强制要求近亲相奸...
* 网页谷歌: 一个壮阳药在她被欺骗并参加的狂欢派对上淹死了！ 平时乖巧认真的姐姐，完全变了。 本来是要救姐姐的，可是姐姐和我却被逼着往来……
* 脚本谷歌: 在被欺骗和参与的狂欢派对上腌制的春药！平时乖巧认真的姐姐，完全变了。本来是要救姐姐的，却被强行和姐姐乱伦……
* 百度: 被欺骗参加了的乱交聚会媚药腌！对家庭认真的姐姐彻底改变了的身姿…。本应该救出姐姐的，却被姐姐和强近亲相奸…
* 腾讯: 在被骗参加的乱交聚会上用春药腌制！家庭式的认真的姐姐变得面目全非…。姐姐应该会被救出来的，但被逼与姐姐强近亲相奸…
* 讯飞: 在被骗参加的乱交派对上献上春药！虽然是家庭式的真目，但却变成了奇怪的样子…。本应该救出他的，却被强迫与他近距离通奸…
* 彩云: 在被骗参加的乱交派对上腌制春药！我曾经很家庭化，很严肃，现在却变了样子..。近亲相奸近亲相奸近亲相奸近亲相奸近亲相奸..
	-
* 原文3: 巨乳で可爱い幼驯染みが元担任の俺の亲父に寝取られ种付けプレスされていた。 绫瀬こころ
* 色花堂翻译: 巨乳可爱的青梅竹马，被我从前是班导的父亲给播种抽插。 绫瀬こころ
* 网页谷歌: 一个可爱的大胸孩子叫咪咪，被我以前的班主任抱到床上，然后她被迫逼迫她。 绫濑心
* 脚本谷歌: 青梅竹马的萌萌巨乳小伙伴被前任班主任拿下播种压榨。绫濑心
* 百度: 巨乳可爱的青梅竹马被原班主任的我的父亲夺走了种子。绫濑心
* 腾讯: 巨乳可爱的青梅竹马被作为原班主任的我的父亲睡着了，被种下了。绫濑心之心
* 讯飞: 巨乳可爱的青梅竹马被原班主任的我的父亲睡着了，被压制了。绫濑心
* 彩云: 巨乳可爱的青梅竹马被原班主任的我的父亲睡着了被播种压迫着。绫濑心
	</pre>
</details>

### 3. 关于科学上网
* 默认情况下是需要科学上网的
* 不具备科学上网条件, 可以通过设置相关选项来实现获取信息,  除了fc2的图片无法获取和预览视频无法使用。
* 需要设置的项目有:`"javbus":"https://www.javsee.men/",`、`"javdb":"https://javdb005.com/",`  、`"baiduAppid":"",`、`"baiduKey":"",`, 设置好javbus和javdb可以获取到番号的相关信息, 设置好百度翻译的api能对标题进行翻译, 具体设置看上方的`一、设置 3.设置内容具体介绍`中的相关介绍。

### 4. 番号不识别的情况
* 完整的番号带有横杠 `-` 不识别的情况( 下面几种情况仅举例, 实际还有其他限制)
	* 番号前面是 `/` 或者 `=` 的将不会识别, 例:  ` =ssni-618`   `/ssni-618` 
	* 番号是个链接, 且链接内容是磁链地址, 不会识别。通常是一些网站的种子列表
	* 番号是个链接, 链接内的文本仅仅是番号的情况,不会识别, 例:  `<a href="">ssni-618</a>`不识别; 如果番号前后有其他汉字等可以识别: `<a href="">ssni-618 搜索</a>`  
	* 如果该页面的网址中含有 `shop、mall、store、buy、product、detail、tools`等关键字的, 该页面将不会识别。
	* 和番号重名的常用搭配不会识别,例如 `top-10` , 并且整个 `top` 番号都不会识别
* 缺少 `-` 不识别的情况
	* 中间不带横杠的番号 `SSNI618` 相较于完整的 `SSNI-618` , 限制会比较多,导致有些明明是番号但是不识别。比如 `ssni618` , 由于 `618` 已被设置为特殊数字, 导致没有横杠的  `ssni618` 不会被识别成番号。  后期可能把关键字的选项放到设置中去, 让用户自定义。(此处仅举例, v0.14.1 已经不在将 `618` 设置为关键字)
	* 如果番号所在dom的class名字中含有 `/name|auth|user|code/` 且无横杠,将不会识别
### 5. 预览视频的相关情况
* 普通番号没有预览视频: 
	* 一些老番不显示预览视频正常, 尤其是14年之前的。官方有, 但是我这没有
	* 新番也存在官方没有预览视频的情况
* 预览视频的获取都是从售卖网站或者官方网站取得, 必须售卖网站或者官网目前还存在视频才可以播放
* 对于素人、无码的预览视频, 看运气

其他: 
* 更新完 v0.14.0 2022-09-18, 短时间内不会加功能了,会偶尔上来看看有没有致命bug需要修, 要忙着去糊口


---
# 六、更新历史

  > v0.20.1  2022-12-15
- 优化: 页面存在相同番号, 浏览其中一个, 相同的番号都会变色。
- 修复: 如果设置中改为点击弹出菜单, 导致每次点击都会触发一次复制的问题, 污染了剪贴板。

  > v0.20.0  2022-12-14
- 增加: 增加色花堂搜索, 需要在设置中开启 `"sehuatang":true,` 

> v0.19.7 2022-11-24
- 更新: 
	- 更新了标签翻译
	- 更新了预览视频的cid
	- 排除一些单词
 
> v0.19.6 2022-11-15
- 更新: 排除一些单词

> v0.19.5 2022-10-31
- 修复: fc2无法获取信息时, 会一直加载的问题
-  更新: 增加排除规则 ; 增加视频的cid

> v0.19.4 2022-10-27
-  更新: 
	- 增加排除规则,排除带`menu` 的class 
	- 增加视频的cid

> v0.19.3 2022-10-22
-  增加: 设置选项中增加: 番号本身是个链接的情况下是否识别。 `"includeIDinLinks":true, `  
- 增加: 尝试获取`caribbeancom`、`1pondo`、`heyzo` 和 `tokyo-hot`的预览视频。
- 调整: 当从javbus获取信息失败时, 会尝试从javdb获取, 之前默认关闭。相关设置: `getInfoFailToJavDB`
- 调整:  `heyzo` 番号优先从javbus中获取
- 更新: 排除规则、视频的cid

> v0.19.2 2022-10-22
- 优化: 当从javdb获取信息时, 如果有预览视频, 则添加到预览中

> v0.19.1 2022-10-21
- 修复: 重新获取信息后, 失败的提示信息依旧显示的问题
- 优化: 提高视频的获取准确度,  极大的提高

> v0.19.0 2022-10-20
- 增加: 部分番号增加预览视频, 相关代码[JAVBUS影片预告 (sleazyfork.org)](https://sleazyfork.org/zh-CN/scripts/450740) 。dmm和fc2的视频可以预览, 增加相关设置选项: `dontGetVideo` 和 `videoVolume`
- 修复: javbus的图片网址变动导致之前获取的图片全部出错的问题
- 修复: fc2 标签无法获取的问题
- 优化: fc2的标签获取, 增加时间获取, 时间并不准确, 只是大概值
- 其他: 本想去[JAVBUS影片预告 (sleazyfork.org)](https://sleazyfork.org/zh-CN/scripts/450740)的脚本感谢一下, 结果 sleazyfork.org 无法登录, 在此先记录一下。

> v0.18.3 2022-10-16
- 修复: 获取不到信息时, 提示不会显示的问题

> v0.18.2 2022-10-15
- 增加: “系列”也可以点击, 和获取信息的网站同源。
- 修复: 当标题名比演员名短的时候, 无法显示标题的问题
- 优化: 当 fc2hub 右侧的Gallery中图片无法打开时, 会尝试使用文章中的第一张图片
- 优化: 当触发了模糊搜索时, 不在将第一个搜索按钮改为页面。

> v0.18.1 2022-10-14
- 修复: 浏览已有的fc2番号, 图片概率无法加载的问题
- 修复: 作品名中特殊符号无法删除的问题
- 调整: 增加了部分fc2标签的翻译, 因为结果是对照翻译网站, 所以可能不准
- 调整: 存储fc2链接时, 进行截取, 删除链接后跟的作品名

> v0.18.0 2022-10-12
- 增加: 增加标签翻译为简体中文的功能 `"dontTransTags":false,`,  默认开启翻译功能
- 增加: 模糊搜索功能。仅对javdb搜索的第一个结果有效, 如果两个英文字母错位或者只有一个字母错误的情况下有效, 好处是能够识别一些网友写错的番号, 带来的问题就是一些不是番号却能返回信息并保存。
- 增加: 图片加载失败时, 显示内置的图片
- 修复: fc2 空白标签依旧会显示的问题
- 修复: 当设置为禁止从javdb获取信息, 但是如果开启`getInfoFailToJavDB`, 依旧可以从javdb获取信息的问题。
- 修复: 当开启`getInfoFailToJavDB`, 如果javbus获取图片403错误时, 不会从javdb获取信息的问题
- 修复: 由于javdb禁止日本ip访问, 导致脚本误以为IP地址被封的问题
- 修复: 动画展开时, 背景会闪白色的问题
- 调整: 搜索fc2时, 添加默认搜索按钮: `fc2hub`

 > v0.17.0 2022-10-09
- 增加: 增加打开和关闭动画效果

 > v0.16.3 2022-10-08
 - 修复: 获取不到信息时, 无法正确保存数据的问题
 - 调整: 增加 javbus 拒绝访问时 403 的提示

 > v0.16.2 2022-10-08
 - 修复: 一行中连续多个磁链只能识别第一个的问题
 - 修复: 动态添加的元素对所有父元素进行检查, 如果在相关class(`RE_Exclude_className`)中, 则略过
 - 修复: 排除相关
	 - 排除 `cn` 域名网站
	 - 排除 网址中带有 `translate` 的网站
	 - 排除 `mi.com`、`discord.com`、 `telegram.org`
	 - 排除关键字 `cny`、`has`
	 - 排除 class: `editor`、`time`、`savid`
- 调整: 调整 fc2 获取图片的位置

 > v0.16.1 2022-10-02
 - 修复: 获取fc2番号信息程序出错的问题(由于上个版本去除标题中的演员名字导致)
 - 更改: 获取信息时, 加载动画的颜色会根据网站的不同出现变动

 > v0.16.0 2022-09-29
 - 增加: 设置中可以更改为点击番号才出现菜单, 现在默认是滑过就出现菜单:`clickToMenu:true,`
 - 增加: 设置中增加百度翻译, 设置好 `baiduAppid` 和 `baiduKey` 这两项会调用百度翻译
 - 更改: 谷歌翻译由 `translate.google.cn` 替换成 `translate.google.com.hk`, 谷歌翻译疑似退出中国。
 - 修复: 标题相关, 因为谷歌翻译出现问题导致的更新
	 - 如果翻译失败, 无法保存标题的问题
	 - 去除末尾的演员名称; (导致fc2获取信息失败, 0.16.1修复)
	 - 去除末尾的番号;
	 - 去除末尾的各种符号;
	 - 去除标题中间的符号`●`和`▲`; 
	 - 从javdb获取信息, 标题会将最后一个字符也删掉的问题; 
	 - 菜单调整为先标题,后演员。

 > v0.15.1 2022-09-29
 - 问题: 谷歌翻译cn站点概率失败, 现在翻译是强制关闭状态, 等到有合适的翻译会重新开启这个功能
 - 代码: 图片重置位置由 `image.onload` 来触发

 > v0.15.0 2022-09-28
 - 增加:  设置选项 `getInfoFailToJavDB` , 当javbus获取不到信息时, 自动从javdb获取, 默认关闭。开启后有被javDB封IP的风险。
 - 增加: 浏览之前没有获取到信息的番号, 会尝试重新获取信息。前提是两次获取信息的时间间隔要相差一天以上。
 - 增加: 设置选项 `list_all`, 也是搜索列表, 有码和无码的共同搜索列表可以放在这里。
 - 修复: 版本`v0.14.1` 排除 `form`导致很多出现不识别的问题
 - 修复: 当本地没有图片的时候, 会重新去获取, 不再提示本地没有图片。
 - 修复: fc2番号没有tag信息, 还出现“标签”的问题。
 - 正则: 无横杠的番号后面排除 / , 可能是文件地址
 - 代码: 精简存储里面的相关信息, 如果值是`false`, 不再存储。增加获取番号信息时的时间`getInfo_Time`。
 - 代码: `javdbTime` 和 `version` 挪走, 不在显示设置菜单中。

 > v0.14.3 2022-09-26
 - 修复:  熟女俱乐部的番号识别问题,之前会将其识别成club, 不过javdb上没有该系列的相关信息。 jukujo-club-514
 - 修复: 上个版本排除的关键字 `store`  加了回来, 修复了javstore.net网站上部的番号不识别的问题
 - 修复: 上个版本添加的设置选项 `qBitNoPopup` 默认值设置错误的问题
 - 修复: 后续加载的磁链无法识别的问题
 - 调整: 磁链识别后, 会将文本改为链接, 不再是复制功能, 可以在设置中改回复制 `magnetCopy`
 - 代码: RE_className_Special 挪到主脚本中, 排除class可以直接从主脚本中调整。
 
 > v0.14.2 2022-09-24
 - 增加: 设置中增加选项qbit的弹窗提醒。 qbit下载增加了一个弹窗, 询问是否调用下载, 目前共有两个弹窗, 同时增加设置选项:  `"qBitNoPopup":"true",` 可以关闭弹窗询问, 直接调用qBittorrent下载。 如果qBittorrent的返回结果是 `OK` ,则第二个弹窗也会关闭。
 - 增加: 增加jellyfin演员的查询, 如果本地存在该演员, 会在名称后面添加一个jellyfin的图标进行跳转。
 - 增加: 增加排除规则 `oRegExp_Exclude_ID` 能够精确排除,例: PG-13
 - 修复: javdb详情页中无法复制magnet的问题
 - 修复: 部分链接会被认为磁链的问题,链接中含有magnet
 - 修复: 因为**javstore.net** 所有对网页含有 `store` 的不再排除
 - 调整: 统一磁链样式, 识别到的磁链加上黄色下划线

 > v0.14.1 2022-09-19
  - 修复: javbus论坛通过搜索进入的帖子, 无法显示工具栏的问题
  - 调整: 排除dom元素: ` source、form、code、footer、head、nav、pre、ruby` 
  - 调整: 位于链接内的番号, 不在识别。例:  `<a>ssni-618</a>`  
 
 > v0.14.0 2022-09-18
  - 增加: 搜索本地jellyfin, 需要设置本地地址和ApiKey, 两者都设置后, 会自动增加jellyfin的按钮
  - 增加: 将磁链直接下载到qBittorrent, 需要设置本地地址和下载地址, 两者都设置后, 点击磁链会复制的同时进行下载
  - 调整: 东京热、加勒比、一本道、MuraMura 的番号会优先从javbus中获取
  - 调整: FC2 的图片信息从 fc2hub.com 中获取
  - 修复: 一本道番号不识别的问题
  - 修复: 网友分享的番号一本道(下划线)和加勒比(横杠)番号,由于下划线和横杠的不同导致无法获取信息的问题。
  - 修复: 从菜单再次进入番号会重复获取信息的问题
  -  更新使用文档

 > v0.13.7 2022-09-11
  - 修复: 关键字: 西数机械硬盘型号: HC550
  - 修复: 关键字: utf-18

 > v0.13.7 2022-09-11
  - 修复: 划词搜索,如果搜索番号无信息导致报错的问题
  - 修复: 增加了fc2的容错机制, 如果搜索不到信息, 会另外搜索fc2或fc2ppv的信息
  - 修复: 从javdb获取信息时, 不再显示男演员

 > v0.13.6 2022-09-06
  - 修复: 禁止复制磁链后, 带磁链的番号依旧可以点击复制的问题

 > v0.13.5 2022-09-04
  - 修复: 排除了CPU相关的n系列处理器和针脚, 例如: n5105 pga988 等

 > v0.13.4 2022-09-03
  - 增加: 限制javdb短时间过多的访问
  - 样式: 获取信息时, 下方增加了动画
  - 调整: 排除网址中带有 mall,shop,store,buy,product,detail 关键词的网址。
  - 调整: 众多不影响使用,但影响体验的问题

 > v0.13.3 2022-09-01
  - 修复: 已浏览过的番号, 图片加载失败的问题

 > v0.13.2 2022-08-31
  - 增加: 鼠标滚轮可以放大缩小图片
  - 修复: 上个版本在debug模式下无法获取无码信息
  - 修复: 浏览的番号是没有信息的番号,会导致脚本错误的问题

 > v0.13.1 2022-08-31
  - 增加: 可以自定义 javbus 和 javdb 的地址, 如果网站的永久地址打不开的话, 可以自己替换网址。要求: 必须是相同站点的网址域名, javbus后面必须跟javbus网站的域名,网址后面有"/",例: https://www.javbus.com/  , javdb同理。
  - 增加: 图片点击放大可以关闭 dontImgBig:true,
  - 感谢 [jywyf](https://greasyfork.org/zh-CN/scripts/423350-%E6%A0%B9%E6%8D%AE%E7%95%AA%E5%8F%B7%E5%BF%AB%E9%80%9F%E6%90%9C%E7%B4%A2/discussions/146694) 的建议

 > v0.13.0 2022-08-31
  - 增加: 浏览过的番号将从本地获取信息, 不再重复获取, 图片自动从浏览器缓存读取

 > v0.12.0 2022-08-30
  - 增加: 增加了无码和素人的菜单, 并且可以从javdb获取额外信息, 只是封IP的风险比较大
  - 修复: 连续fc2 只能识别第二个,后续无法识别的问题
  - 修复: javbus 的图片引用 dmm.co.jp 导致图片加载失败的问题
  - 调整: 调整自定义页面番号的 style 格式, 以前的设置无效, 需要重新设置
  - 调整: 默认关闭滑词搜索,包括老用户。需要这功能的自行重新开启
  - t1cdn.xyz  有谁知道这个是哪个网站的图片地址。

 > v0.11.2 2022-08-28
  - 调整: 样式微调

 > v0.11.1 2022-08-28
  - 增加: 点击图片可以放大
  - 调整: 如果在class中含有 /name|author|userid/i , 并且在innerText中不含横杠, 视为用户名, 跳过。
  - 调整: 界面调整

 > v0.11.0 2022-08-26
  - 增加: 可以识别页面的磁力链接, 点击复制。可以在设置里关闭: "dontCopyMagnet":true,
  - 增加: 设置里额外增加了4个选项 1. 禁止获取额外信息"dontGetInfo": false, 2.禁止复制磁力链接 "dontCopyMagnet": false, 3. 禁止翻译标题"dontTransTitle": false,  4. 自定义fc2番号的搜索链接 "fc2Link":"https://www.baidu.com/s?ie=UTF-8&wd=%s" 
  - 增加: 可以排除特定数字,仅限没有横杠的情况下
  - 增加: 连续fc2番号的支持。例: fc2-123456 567890
  - 增加: 支持 Tokyo-Hot 的 k1234 类型的番号, 都是17年之前的
  - 增加: 支持 メス豚 的 120101_123_01 类型的番号, 都是16年之前的  6位数字(发行时间)\_3或4位数字\_01 
  - 增加: 支持 10musume的番号,011717_01-10mu
  - 修复: 支持 Carib_123456_789 类型, 前面带有carib; 支持 heyzo_hd_1234 类型,中间带有 hd;
  - 调整: fc2 的番号点击跳转由 javdb 改为 javmenu.com
  - 调整: 更改演员链接为由 xslist.org 改为 db.msin.jp
  - 调整: 默认搜索中的 freejavbt.com 改为 javmenu.com

 > v0.10.16 2022-08-23
  - 增加: 3DSVR 番号的识别
  - 增加: javbus,javdb等网站的磁力链接, 点击会直接复制, 不会影响原有的点击效果。
  - 修复: 排除关键字 键盘型号akko、mk, 其他 eof
  - 修复: 无横杠的番号中包含关键字也会被忽略的问题, 例如: 排除 of, 导致 eof 也无法识别的问题
  - 修复: 连续番号正则的后面禁止有日文 “の”
 > v0.10.16 2022-08-17
  - 修复: 连续数字的番号, 第一个番号省略字母数字中的横杠也能识别: abc123 456 789
  - 修复: 番号本身是磁力链接的话, 将不再识别
 > v0.10.15 2022-08-11
  - 增加: TMA厂商的 T-12345 番号
  - 修复: 正则调整,调整番号前后限制
 > v0.10.14 2022-08-07
  - 调整: 增加对 CASMANI 番号的识别(7位字母, vr)
 > v0.10.13 2022-08-05
  - 修复: 排除关键字agen、bt、with、row、rush、index、for、the、of、joy 例: bt709
  - 修复: 调整对番号后面文字的限制,增加:| Minute| day| time|cm 。目前的正则:(?!\d|\[A-BD-Za-bd-z0-9]|-|％|%|歳| 歲|分| Minute| day| time|cm|\\.)
  - 修复: 排除网站 regex101.com
  - 修复: 省略字母的连续番号识别范围太大的问题: 1、前面连续字母也能触发的问题; 2、排除年份: 2020-2022; 3、连续6位数字会被识别成番号, 并分成两个番号的问题
  - 调整: 测试用中的 debug 改为默认false
 > v0.10.12 2022-08-03
  - 修复: 排除关键字 http、code、status、
  - 修复: 一般番号正则的后面禁止有汉字“分”
  - 调整: v0.10.9 版本将没有横杠的情况调整至5位数字以下, 导致误报严重, 各种日期,版本号都会被识别成番号, 改回只认3 位数字。
 > v0.10.11 2022-08-02
  - 增加: 支持通过 ajax 异步加载的页面。 例:jable.tv
  - 修复: 排除关键字 is、usc、vol 
  - 修复: 划词搜索的内容如果位置过低的话,导致菜单直接贴在下边缘的问题
  - 调整: 删除延时加载网站的相关内容
  - 调整: 排除网站 flightradar24.com
  > v0.10.10 2022-08-01
  - 修复: 直接跳转的番号, 有\<em\>等html标签的识别错误的问题
 > v0.10.9 2022-07-31
  - 增加: 省略字母, 连续数字的番号 例: abc-001、002、003
  - 修复: 排除了javbus 中的用户名
  - 修复: 1000giri 的识别范围太大, 导致部分网址的一部分被识别成番号: 调整后: (?<!\w)\[01]\d{5}-\w{2,7} 之前: (?<!\w)\d{6}-\w{2,7}
  - 修复: 在javdb网站, 设置界面被阻挡的问题
  - 修复: 排除关键词 dx、class、file、ok、tv,  
  - 修复: 百分号、年龄前面的数字不再识别: max 100% 、 abcdef 18歲
  - 修复: 番号滑入触发的逻辑, 鼠标按键按下的情况下滑入不触发
  - 调整: 加勒比的也从javbus获取信息, 不在直接跳转javdb
  - 调整: 没有横杠的情况下, 扩大了识别范围, 数字的位数限制5位数以下, 之前只识别3位数字。 v0.10.12已经改回去
  - 调整: 没有横杠的情况下, 含有以下关键词的不再识别: sex|best|part|tv
 > v0.10.8 2022-07-28
  - 调整: 扩大了素人番号的识别范围
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
  - 改进: 扩充了“数字字母-数字”这种素人番号的识别范围。通用识别, 不再局限于已知的特定番号字母。
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


具体更新历史[Github](https://github.com/qxinGitHub/searchAV)


---
# 七、相关资料
* emby中的API查询 [Swagger UI (emby.media)](http://swagger.emby.media/?staticview=true#/PlaylistService/postPlaylistsByIdItems)
* emby中 API 使用 [API Key Authentication · MediaBrowser/Emby Wiki (github.com)](https://github.com/MediaBrowser/Emby/wiki/Api-Key-Authentication)
* jellyfin中的API介绍 [Jellyfin - ReDoc](https://api.jellyfin.org/#tag/ApiKey/operation/CreateKey)
* jellyfin 下载及其更新历史 [Releases · jellyfin/jellyfin (github.com)](https://github.com/jellyfin/jellyfin/releases/)
* 日语词典: 翻译为英语 [英辞郎 on the WEB (alc.co.jp)](https://eow.alc.co.jp/)
* 视频预览相关: [番号黑科技，在线看预览【教程】 – Telegraph](https://telegra.ph/%E7%95%AA%E5%8F%B7%E9%BB%91%E7%A7%91%E6%8A%80%E5%9C%A8%E7%BA%BF%E7%9C%8B%E9%A2%84%E8%A7%88%E6%95%99%E7%A8%8B-04-21)
* 视频预览相关: [抛砖引玉，关于AV预览视频的获取方法。 - 老司機福利討論區 - 老司機論壇 (javbus.com)](https://www.javbus.com/forum/forum.php?mod=viewthread&tid=63374)
* [[油猴脚本开发指南]包装异步代码为同步代码 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/427913027)

---

# 八、感谢
感谢 greasyFork 评论区 [jywyf (greasyfork.org)](https://greasyfork.org/zh-CN/users/51119-jywyf)、[五讲四美三热爱 (greasyfork.org)](https://greasyfork.org/zh-CN/users/891814-%E4%BA%94%E8%AE%B2%E5%9B%9B%E7%BE%8E%E4%B8%89%E7%83%AD%E7%88%B1)、[blank7 (greasyfork.org)](https://greasyfork.org/zh-CN/users/663121-blank7)等每一个使用脚本用户的支持


<!-- %% 
# 九、待做
## 1. 已知问题
1. [ ] [k1400 餌食牝 -- 西田結菜 - JavBus](https://www.javbus.com/K1400) 标题中依旧有番号, 原因是内部将番号大写, 所以无法匹配到标题中的小写番号。解决方法: 转为正则
2. [ ] [HMDN-078 いずみ | JavDB 成人影片數據庫](https://javdb.com/v/a44M4) 预览视频无法播放的问题, 原因是javdb中显示有预览视频, 但是视频早已失效。解决方法: 加个判断
3. [ ] [ACZD-062 アナル拡張実験室 - JavBus](https://www.javbus.com/ACZD-062) 标签内容会有重复的问题, 原因是部分相似的标签, 在翻译后会使用同一个标签。  解决方法: 利用 new Set() 去重
4. [ ] [分享几部霓虹萝莉 - 老司机福利讨论区 - 老司机论坛 (javbus.com)](https://www.javbus.com/forum/forum.php?mod=viewthread&tid=109333&extra=page%3D1) 第一个番号 1PONDO-032214_777 识别错误的问题, 原因是将 1PONDO 也识别成番号的一部分。具体是哪个正则识别到的并未排查。
## 2.用户反馈
1. [ ] 支持下用alist搭建的站点[根据番号快速搜索 - 反馈 (greasyfork.org)](https://greasyfork.org/zh-CN/scripts/423350-%E6%A0%B9%E6%8D%AE%E7%95%AA%E5%8F%B7%E5%BF%AB%E9%80%9F%E6%90%9C%E7%B4%A2/discussions/160849)
## 3.新添加内容
1. [ ] 将信息显示的部分用表格展现, 进而点击前面标签可以复制后面的内容
2. [ ] 显示的信息能够自定义排序,  进而可以自定义显示内容
3. [x] 页面多个相同的番号, 浏览过一个番号, 其他相同番号不会变色的问题 [露出勾引/公共使用题材汇总，长期更新，悬赏补充 - JAVLibrary](https://www.javlibrary.com/cn/publictopic.php?id=122596) 2022-12-15 v0.20.1 完成
4. [ ] setting2 里的内容现在无法删除, 应当在用户删除 setting1 的内容时, 同步删除setting2 的内容。
5. [ ] 链接后台打开
%% -->
---
# 开源代码许可
- [findAndReplaceDOMText](https://github.com/padolsey/findAndReplaceDOMText) version:0.4.6 作者:padolsey, 许可协议:[unlicense](https://unlicense.org/)  
- [网页翻译助手](https://greasyfork.org/zh-CN/scripts/389784)version:1.2.9, 作者: Johnny Li, 许可协议[MIT](https://opensource.org/licenses/mit-license.php)  
- [显示防盗链图片 for Inoreader](https://greasyfork.org/zh-CN/scripts/376884) version:0.1, 作者: maboloshi  
- 加载动画 [Loading line](https://codepen.io/gsound/pen/yVPVGQ) 
- 番号中的特征(tag)分类 来源[javsdt (github.com)](https://github.com/javsdt), 作者已经跑路
- [JAVBUS影片预告 (sleazyfork.org)](https://sleazyfork.org/zh-CN/scripts/450740) version:0.5, 作者: bigwolf99, 许可协议[MIT](https://opensource.org/licenses/mit-license.php)  
- 还有各种搜索后随手复制的
