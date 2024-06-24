脚本出现的原因:  在一些论坛上经常有好心人分享番号, 但是需要复制、新开页面、粘贴、搜索太复杂, 所有有了这个脚本来简化这个步骤。  
在线安装 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/423350)
### 功能
- 查看番号的信息,图片和预览视频
* 标记网页所有番号, 未浏览过的显示绿色下划线, 浏览过的显示蓝色虚线,浏览过且没找到相关信息的显示红色虚线。颜色可以在设置中更改
* 鼠标滑过可以激活搜索菜单, 激活方式和搜索选项可以在设置中更改
* 标记网页中的磁链文本, 改为链接, 可以在设置中关闭
* 点击番号复制
* 默认没有启用的其他功能, 需要在设置中开启:  
	* 开启`色花堂` 搜索按钮, 需要在设置中开启 `"sehuatang":true,`
	* 划词搜索默认处于关闭状态  
	* 查询本地 jellyfin/Emby 中是否存在相关番号,需要设置两处: 本地地址 `jellyfinHost` 和ApiKey `jellyfinApiKey`, Emby还需要设置为`emby:true,`  

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
"sehuatangURL":"https://www.sehuatang.net", // 自定义色花堂网址
"addSearchButton":false,    // 在番号后面添加一个图标, 鼠标滑过作用于图标, 而不是番号
"searchButtonIcon":"✈",    // 番号后面的图标样式
"clickToMenu":false,    // 鼠标点击番号才会出现菜单
"dontClearMenu": false, // 鼠标移出后,菜单不会消失(测试时找问题使用, 开启会影响脚本使用)
"includeIDinLinks":true,    // 番号本身是个链接的情况下是否识别
"dontImgBig": false,    // 图片点击放大, 包括滚动放大
"dontGetInfo":false,    // 获取番号的相关信息(从javbus获取)
"dontGetInfoFc2":false, // 获取fc2的相关信息(从fc2hub获取)
"dontGetInfoWuma":false,    // 获取无码番号的信息, 大量访问会导致javdb禁止你的ip访问一到两个星期。
"getInfoFailToJavDB":true,    // 从javbus获取不到信息时, 会从javdb尝试获取。有被javDB封IP的风险
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
"close_Related_Page":false, // 关闭相关页面的按钮(第一个按钮)
"addOtherButton":false, // 添加3个额外的按钮: 1,设置按钮; 2,番号按钮,点击复制; 3,关闭按钮
"sehuatang":false,  // 添加色花堂的搜索按钮
"emby":false,   // 将 Jellyfin 替换成 Emby, 如果使用 emby, 必须改为true
"jellyfinHost":"http://localhost:8096/",    // 本地的jellyfin的地址
"jellyfinApiKey":"",    // jellyfin中的API密钥  “设置 - 控制台 - API密钥” 点击加号生成一个
"LocalVideoSearch":false,    // 如果在本地有相关视频, 显示额外的样式
"LocalVideoSearchExtraButton": false,   // 如果在本地有相关视频, 会直接在番号后面显示跳转按钮
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
"infoLocalVideoStyle":{ //本地视频(jellyfin/emby)已有的番号
    "color":"#598987",    // 颜色
    "text-decoration":"underline dotted #598987",   // 下划线
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

`"sehuatangURL":"https://www.sehuatang.net",`
- 自定义色花堂网址, 必须是正确的色花堂网址, 否则脚本会错误
- 默认: https://www.sehuatang.org
`"addSearchButton":false,`
-  在番号后面添加一个图标, 鼠标滑过作用于图标, 而不是番号
- 默认`false`: 不增加图标
- `true`: 开启, 在网页番号的后面增加一个图标, 鼠标滑过(或点击)图标来激活菜单
`"searchButtonIcon":"✈",`
- 开启番号后面的图标样式,开启 `"addSearchButton"`后, 后面的图标样式。不是图片,是一个字符, 可以用 [emoji](https://emoji6.com/emojiall/) 或者输入法中能打出的各种字符。
- 默认:✈

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

`"getInfoFailToJavDB":true,`   
* 从javbus获取不到信息时, 是否从javdb中尝试获取。这样几乎所有的番号都能获取到信息, 但是有被javDB封IP的风险; 如果你在浏览网页中使用本脚本的频率并不是很高, 只是偶尔浏览一下番号, 可以开启该选项, 获得更好的体验; 开启后会占用javdb搜索的次数。
* 默认: `true`:当从javbus中查不到相关番号信息, 会尝试从javdb中获取信息。
*  `false` :  仅仅从javbus中获取信息, 失败后会提示找不到相关番号的信息。 

`"dontCopyMagnet":false,`
* 旧, 弃用。 停止使用, 如果你的设置里存在该项, 请改成 `dontMagnetDiscern":false` 

`"dontMagnetDiscern":false,`
* 识别网页中的文本磁链
* 默认: `false`: 将网页中的文本磁链转为链接, 网页中存在的 hash 也会被转为链接
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
* 翻译标签, 使用的是内置列表进行替换。存在替换不完全的问题。
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

`"close_Related_Page":false,`
- 相关页面的按钮(第一个按钮, 可能是`JavBus页面`又或者 `JavDb页面`)
- 默认: false: 显示相关页面的按钮
- `true`: 关闭相关页面的按钮

`"addOtherButton":false,`
* 额外的按钮
* 默认:`false`: 不会添加额外的按钮
* `true`: 添加3个额外的按钮: 1, `设置` 按钮; 2, `番号` 按钮,点击复制; 3, `关闭` 按钮

`"sehuatang":false,`  
- 添加色花堂的搜索按钮
- 默认:`false`
* `true`:  将色花堂的搜索添加到列表中。点击后, 会在色花堂进行搜索, 但是由于需要解析地址, 所以新打开的色花堂搜索页面会慢一些, 不要重复点击, 存在无法打开的情况, 尤其是网络不好的情况下。
* 提示: 如果失败的话,则会打开色花堂的搜索界面(此时并没有搜索具体内容), 可以直接粘贴就行, 已经自动复制好番号。

`"emby":false,`   
- 将 Jellyfin 替换成 Emby, 如果使用 emby, 必须改为true
- 默认: `false`
- `true`: 使用本地的 Emby 搜索,  地址和apikey依旧设置在`jellyfinHost`和`jellyfinApiKey` 。

`"jellyfinHost":"http://localhost:8096/",`
* 本地的jellyfin的地址, 需要修改成你自己的地址, 如果是在nas中, 就修改成nas的地址
* 默认:`http://localhost:8096/`

` "jellyfinApiKey":"",`
* 外部程序需要密钥才能和jellyfin通信。需要在你的jellyfin/emby中的  `“设置 - 控制台 - API密钥”` 点击加号生成一个
* 设置完`jellyfinHost` 和本选项`jellyfinApiKey`后, 菜单中会自动添加 `jellyfin` 按钮, 查询本地是否存在该番号, 如果有删除线, 说明本地并没有该番号相关的信息。同时也会查询jellyfin中是否存在相关女优, 如果存在, 会在演员后面添加jellyfin的图标, 用来跳转到jellyfin中女优相关页面。

`"LocalVideoSearch":false,` 
- 如果在本地有相关视频, 单独显示一种样式
- 默认: `false`
- `true`: 根据本地`Jellyfin/Emby` 返回的movie列表搜索番号, 不一定准确。显示样式为设置中`infoLocalVideoStyle`相关css代码, 该样式的优先级最高。
- 注意: 由于使用的是`Jellyfin/Emby`的数据需要事先设置`jellyfinHost`和`jellyfinApiKey` 

- `"LocalVideoSearchExtraButton": false, ` 
- 如果在本地有相关视频, 会直接在番号后面显示跳转按钮
- 默认: `false`
- `true`: 将`Jellyfin/Emby` 的跳转链接直接放在番号后面, 从而不需要激活菜单也可以直接跳转至本地库中查看影片,如果库中存在多个相同番号的视频, 会跳转至排序靠前的影片。
- 注意: 需要先设置`"LocalVideoSearch"` 

`"qBitHost":"http://localhost:8080/",`
* 本地 qBittorrent 的地址, 需要修改成你自己的地址, 如果是在nas中, 就修改成nas的地址
* 默认:`http://localhost:8080/`

`"qBitDownload":"",`
* 在qBittorrent中的下载地址,注意地址中要使用双斜杠: `D:\\_下载\\qBittorrent`
* 设置完`qBitHost` 和本选项`qBitDownload`后,  且`dontMagnetDiscern`为默认值`false`, `magnetCopy`改为 `true`, 在页面中点击磁链会调用上方host中的qbit下载, 弹窗返回的数据是qBittorrent的返回数据, 正常返回是 `OK`。如果长时间不返回,例如超过1秒, 通常是出现了错误。

`"qBitNoPopup":false,`
* 点击磁链后会弹窗询问是否调用qBittorrent下载,  并将qBittorrent的返回结果再次弹窗提醒, 默认会有两次弹窗。
* 默认: `false` 
* `true`: 关闭第一个弹窗询问, 直接调用qBittorrent下载。 如果qBittorrent的返回结果是 `OK` ,则第二个弹窗也会关闭。

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
"infoLocalVideoStyle":{ //本地视频(jellyfin/emby)已有的番号
    "color":"#598987",    // 颜色
    "text-decoration":"underline dotted #598987",   // 下划线
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
* 脚本默认是所有网站中运行, 如果你经常访问的网站明知不会有番号, 并且还把网页中的一些字母数字识别成番号, 可以参照下图进行排除。也可以以在评论区[反馈](https://greasyfork.org/zh-CN/scripts/423350-%E6%A0%B9%E6%8D%AE%E7%95%AA%E5%8F%B7%E5%BF%AB%E9%80%9F%E6%90%9C%E7%B4%A2/feedback)。
![2022-09-18_20-45-28 排除-step.png (417×275) (raw.githubusercontent.com)](https://raw.githubusercontent.com/qxinGitHub/searchAV/main/img/2022-09-18_20-45-28%20%E6%8E%92%E9%99%A4-step.png)

* 如果有些番号没有被识别, 或者曾经可以识别, 突然不识别了, 也可以进行[反馈](https://greasyfork.org/zh-CN/scripts/423350-%E6%A0%B9%E6%8D%AE%E7%95%AA%E5%8F%B7%E5%BF%AB%E9%80%9F%E6%90%9C%E7%B4%A2/feedback)。

---
# 三、注意事项
### 1. 关于 javbus
* 有时会遭到javbus的拒绝访问, 具体原因不明。本人的网络环境就无法访问 `STARS-145`相关信息, 在一些老番号上尤为明显。
* 如果番号发生重复, 一个番号对应多个视频,  脚本通常会无法从javbus获取正确信息, 例如 `NTRD-047`, 有两个视频都用此番号。
* ~~通过javbus搜索界面进去的帖子, 无法触发菜单,具体原因也不知道。~~

### 2. 关于 javdb
* 如果设置`"closeJavdbLimit":true,`,解除限制后, 并且短时间内过多的浏览无码素人番号, 会导致javdb封锁IP地址, 致使14天内无法访问javdb。
* 如果你是频繁的浏览素人的番号, 会受到脚本的限制, 不排除依旧就封IP的风险。由于脚本只是记录了从脚本中获取信息的访问时间, 如果在此之外, 还通过浏览器搜索过javdb,  就加大了封IP的风险。如果未使用其他有关javdb的脚本或者没有单独的搜索过javdb, 脚本自带的限制足以应付javdb的封锁策略。
* 如果你本身是直连用户, 那你可以用路由器重新拨号,  就能重新获得IP进行访问。

### 3. 关于 jellyfin / Emby 查询
* 开启需要设置`jellyfinHost` 和`jellyfinApiKey`  (Emby也需要设置这两项)
* 查询结果仅供参考, 存在结果不对的情况, 尤其是 jellyfin/emby 中存在两个相同番号的时候。
* 如果的本地的影视库是用`MDCx.exe`进行刮削的, 建议把软件的`设置 - 翻译 -演员` 中演员语言调整为日语, 并且把下方翻译方式的`使用演员映射表翻译演员`给取消掉。这么做的原因是: 脚本主要是用 javbus 来获取信息, 在获取演员名字时, 使用的是日语, 和本地影视库对比时, 如果是中文, 则不识别。就出现一个问题, 明明我本地有这个演员, 为什么演员名字后面没有跳转链接。例如番号MIDE-924,  脚本获取的演员名字是`水卜さくら` , 但是如果用`MDCx.exe`软件默认刮削的时候, 本地存储的演员名字会变成`水卜樱`, 此时脚本再去浏览`水卜さくら`相关的影片时, 会无法查询到该演员。
* 使用过的版本:  [jellyfin 10.8.3、10.8.8](https://github.com/jellyfin/jellyfin/releases/) 
* 如果使用的是`emby`,还需要设置`emby:true,`  
* 下图是效果图, 设置正确后, 会增加一个 `jellyfin`或`Emby` 的按钮,点击跳转至本地 jellyfin/emby ; 如果 jellyfin/emby 存在相关演员, 演员后面也会加一个按钮, 点击跳转至 jellyfin/emby 的演员相关页面。
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
	* FC2的视频音量无法控制, 各位司机注意音量。
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
	* 当所有的本地规则都无法成功获取时,会从 [JAV视频预览 (javspyl.eu.org)](https://javspyl.eu.org/) 尝试获取。

---
# 五、其他说明
### 1. 关于模糊搜索
- 针对一些网友手误打错番号的情况, 比如这个[分享](https://www.javbus.com/forum/forum.php?mod=viewthread&tid=106356),前三个番号错了两个。
- 使用javdb搜索才会触发模糊搜索,  javbus只有在开启 `getInfoFailToJavDB`后, javbus搜索不到相关信息, javdb中也没有相关信息时, 才会触发。
- 就是用的的javdb返回的第一个结果, 与你搜索的结果做比较, 如果字母部分大差不差, 就用网站返回的番号相关信息。
-  举例: `ASW-242` 这个番号javbus中没有收录, javdb中也没有收录, 所有当浏览这个番号的时候, 脚本会给你番号 `ABW-242` 的相关信息, 因为javdb返回的第一个结果就是它, 并且和搜索的番号只有一个英文字母的差别。(javlibary中有收录该[ASW-242番号](https://www.javlibrary.com/cn/?v=javli6de2y))

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
	* 和常用简写重名的不会识别,例如 `top-10` , 并且整个 `top` 番号都不会识别
* 缺少 `-` 不识别的情况
	* 中间不带横杠的番号 `SSNI618` 相较于完整的 `SSNI-618` , 限制会更多,导致有些明明是番号但是不识别。比如 `ssni618` , 由于 `618` 已被设置为特殊数字, 导致没有横杠的  `ssni618` 不会被识别成番号。 (此处仅举例, v0.14.1 已经不在将 `618` 设置为关键字)
	* 如果番号所在dom的class名字中含有 `/name|auth|user|code/` 且无横杠,将不会识别
### 5. 预览视频的相关情况
* 普通番号没有预览视频: 
	* ~~一些老番不显示预览视频正常, 尤其是14年之前的。官方有, 但是我这没有~~
	* 新番也存在官方没有预览视频的情况,例如`NMK、CEN`等 整个系列都没有预览视频。
	* ~~一些vr类视频没有预览, 例如 WANZVR 发行的`WAVR`系列、IP-VR 发行的而`IPVR`系列~~ 
* 预览视频的获取都是从售卖网站或者官方网站取得, 必须售卖网站或者官网目前还存在视频才可以播放
* 对于素人、无码的预览视频, 看运气
* ~~2024-02-20: 当本地尝试获取链接后失败的情况下, 会通过[Javspyl ](https://sleazyfork.org/zh-CN/users/954203-javspyl)作者的脚本进行获取, 基本能够实现全覆盖。~~  
### 6. 同个番号有多个视频的情况
一些番号会对应多个视频, 此时脚本只会返回javbus中的一个,如果明显感觉返回结果不对, 请自行点击菜单上方的按钮进行搜索。
例如`ID-036`对应了四个视频:
1. [ID-036 コスプレ美少女乱交BEST2 4时间 - JavBus](https://www.javbus.com/ID-036_2020-10-23)
2. [ID-036 异世界転生したらヒロイン全员エルフでした。PREMIUM BEST 2枚组8时间 - JavBus](https://www.javbus.com/ID-036)
3. [ID-036 愛しのデリヘル嬢（処女）AVデビュー 34歳 OL 片岡さち デリ嬢呼んだらびっくり！この歳まで男に触れられた事がない 舐められるのも責められるのも挿れられるのもそもそも生でイチモツを見るのも触るのも初めてだった件 正確に言いますと… 30歳の時にバイブオナニーで自ら… | JavDB 成人影片數據庫](https://javdb.com/v/nEvwM)
4. [ID-036 巨乳人妻温泉レ●プ4時間 | JavDB 成人影片數據庫](https://javdb.com/v/aRDzW)

### 其他: 
* 更新完 v0.14.0 2022-09-18, 短时间内不会加功能了,会偶尔上来看看有没有致命bug需要修, 要忙着去糊口  
* 2023-02-26:  找了一份糊口的工作, 在能力之内, 会慢慢完善脚本

---
# 六、更新历史
见 [[更新日志]]       [searchAV/更新日志.md](https://github.com/qxinGitHub/searchAV/blob/main/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.md)  

---
# 七、相关资料
* emby中的API查询 [Swagger UI (emby.media)](http://swagger.emby.media/?staticview=true#/PlaylistService/postPlaylistsByIdItems)  
* emby中 API 使用 [API Key Authentication · MediaBrowser/Emby Wiki (github.com)](https://github.com/MediaBrowser/Emby/wiki/Api-Key-Authentication)  
* jellyfin中的API介绍 [Jellyfin - ReDoc](https://api.jellyfin.org/#tag/ApiKey/operation/CreateKey)  
* jellyfin 下载及其更新历史 [Releases · jellyfin/jellyfin (github.com)](https://github.com/jellyfin/jellyfin/releases/)  
* 日语词典: 翻译为英语 [英辞郎 on the WEB (alc.co.jp)](https://eow.alc.co.jp/)  
* 视频预览相关: [番号黑科技，在线看预览【教程】 – Telegraph](https://telegra.ph/%E7%95%AA%E5%8F%B7%E9%BB%91%E7%A7%91%E6%8A%80%E5%9C%A8%E7%BA%BF%E7%9C%8B%E9%A2%84%E8%A7%88%E6%95%99%E7%A8%8B-04-21)  
* 视频预览相关: [抛砖引玉，关于AV预览视频的获取方法。 - 老司機福利討論區 - 老司機論壇 (javbus.com)](https://www.javbus.com/forum/forum.php?mod=viewthread&tid=63374)  
* [油猴脚本开发指南包装异步代码为同步代码 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/427913027)  
* [切换页面暂停播放](https://github.com/imba97/js/blob/master/code/js-46.js) 作者: [imba97 (imba久期) (github.com)](https://github.com/imba97)   
* [第 153 题：实现一个批量请求函数 multiRequest(urls, maxNum) · Issue #378 · Advanced-Frontend/Daily-Interview-Question · GitHub](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/378) 

---

# 八、感谢
感谢 greasyFork 评论区 [jywyf (greasyfork.org)](https://greasyfork.org/zh-CN/users/51119-jywyf)、[五讲四美三热爱 (greasyfork.org)](https://greasyfork.org/zh-CN/users/891814-%E4%BA%94%E8%AE%B2%E5%9B%9B%E7%BE%8E%E4%B8%89%E7%83%AD%E7%88%B1)、[blank7 (greasyfork.org)](https://greasyfork.org/zh-CN/users/663121-blank7)、[tommyxps (sleazyfork.org)](https://sleazyfork.org/zh-CN/users/245337-tommyxps) 等,每一位使用脚本用户的支持

---

# 九、待做
见 [[待做事项|待做事项(Obsidian)]]     [searchAV/待做事项.md (GitHub)](https://github.com/qxinGitHub/searchAV/blob/main/%E5%BE%85%E5%81%9A%E4%BA%8B%E9%A1%B9.md)   

---
# 开源代码许可
- [findAndReplaceDOMText](https://github.com/padolsey/findAndReplaceDOMText) version:0.4.6 作者:padolsey, 许可协议:[unlicense](https://unlicense.org/)  
- [网页翻译助手](https://greasyfork.org/zh-CN/scripts/389784)version:1.2.9, 作者: Johnny Li, 许可协议[MIT](https://opensource.org/licenses/mit-license.php)  
- [显示防盗链图片 for Inoreader](https://greasyfork.org/zh-CN/scripts/376884) version:0.1, 作者: maboloshi  
- 加载动画 [Loading line](https://codepen.io/gsound/pen/yVPVGQ) 
- 番号中的特征(tag)分类 来源[javsdt (github.com)](https://github.com/javsdt), 作者已经跑路
- [JAVBUS影片预告 (sleazyfork.org)](https://sleazyfork.org/zh-CN/scripts/450740) version:0.5, 作者: bigwolf99, 许可协议[MIT](https://opensource.org/licenses/mit-license.php)  
- [jav视频预览 (sleazyfork.org)](https://sleazyfork.org/zh-CN/scripts/460572-jav%E8%A7%86%E9%A2%91%E9%A2%84%E8%A7%88) 作者: [Javspyl ](https://sleazyfork.org/zh-CN/users/954203-javspyl), version:2.5
- 还有各种搜索后随手复制的
