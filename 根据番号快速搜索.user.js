// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.24.2
// @description  标记网页上的所有番号, 在相关网站快速方便的进行搜索
// @author       iqxin
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABLdJREFUWEftmG2IVGUUx3//O6MZapIftJTeKAqDiqiPGllZSdqHXsw3KmNnpm1LzYqgAleoMAJLw2xmdtsKqS3BkIy0QDSS6FNIkAgRilhUkPjGprtzTzx3d2fv3L0z986upB+6X+855/6e5znnf55zZWYTOY8fOUBJJ85HxoDtf8BRHM2odtAM0cF0fC6oMnicpoUjEjYKrqpr04DWxTjOsNQ8Chg3AWNiQHoR++RTZCybtYx/RgqbGtA6mej3sVziRaCZqj9h0O79xga109csaCpAK3KDiW7g+mY/ELL/WcZCFfipmRiJgFZinsFHwMXNBK5je1SwSHl2po3VENBKzDWjG3FRQkCXY8chsBvX0NY4LrFQeb5KA1kX0Dq5zip8DVweE8gHDkis5Qxb1cbJQRvbyASyLDHxPHBNLIRxQD53qpUjSZCxgE4+/BKfSDwSE+CU4FlydDSSEmsn61/KCok1wPhoHIP3vRwtSXIUD1jkbhNbYwIPy6FgMWWeE8wyY3emwFthGHuP+SY2x6TJUXnMVwt7G+3iMED3QSuzBXgw4tgjn6V6MgAfEtIOJpvPLgg0cZ887lALf9fYlGkzC8BrNNOgnMmTbw6wzFVuJ6K5V+9ILA1g/ZQ5pF5mqY3D9SCH72CRxSY+BLJD28RxwX0q8N2wXEoB6HysyEyDLyNHfXpAdj5PDVgp8aYIKjD8/KBe7gpXa7Vq0wLW2g2t3ViTKdCeGtAv8xnGwzU5BB9k8iwLLgdF5iGuGHzve1won2cQl2EcNo93PJ+e0O4fosB2V61+iS+AeTWxjY2ZAk+nByyxA7gnArg+k2elFbnaFFTd1CT9Cr2vFk6lxNuCFRHfnV6ee88OYH8BuTycdhYBt3t55qcGrJToEjxe4yC2eDkWBMnewWQqNX15UqBzMAPYL2MpcKzqn+HooOz4DU4nPWCRdonVEYdYfRsETtLBwG4jl9gY9gDXhmML2pTn3dSAFt9FegQLlGf7iGWmzKNmdNbIF5yS8YAKQc+PfYbr4CamWCYQandk4We3xjA3ejtOJdT9EuMgbonE3K8Kt6uVP1MDOsNKkdckXoo4+WZs8PKsCjf4GkDjR8FsFYZycODisU5iOeBFJOb1TIGXGxVc/GWhzAwzvgGmR5x7DVZ7OdbWQJaZis8EQgUR5F1/i3tV4oWY2eWgKsxWKwebBgx2scQawSvRVQPuLrhNWQp6gr/qHs0mplsmyLk5MTH6XLdSnvVJclX/wtrFOOvlU+D+OkF6gV2CbjJ8Tx99ZMnSxywTi4GZdSa+wXB7VGFBo/zrP4UGfxbMFYzHDsTNSSsd4ftEyOShqZNp5rMN49YRQiS5NYRMBAy22c3EleCWk4vJpyQA994NVa4YnEjXVPKAc13IVICDBFbmRrMgsW9LCeoK6lsZrfzOL/401rnO0QxkU4BV0E1M8bM8Jp9FiCuBSQMfdUDHMA66mcar0BWe3IJBqknIEQGmOdP6nSHQxljhjjvu/xwwJOB1IcPD1DkBTAG5VyeZo1X0nDPARpAmPs7kWJIo1KPJtbS+A/36DYmVQedxF44KD+kpfj0vAKvK4P7pjGW8cvxRe+MZaHVpV3wu7P4FjSUI5qMsu14AAAAASUVORK5CYII=
// @license      MIT
// @match        *://**/*
// @require     https://update.greasyfork.org/scripts/447533/1214813/findAndReplaceDOMText%20v%20046.js
// @require     https://update.greasyfork.org/scripts/452219/1099124/MD5%20%E5%87%BD%E6%95%B0.js
// @require     https://update.greasyfork.org/scripts/452792/1214814/av%E7%95%AA%E5%8F%B7%E7%89%B9%E5%BE%81%28tag%29%E5%AF%B9%E7%85%A7%E8%A1%A8.js
// @exclude	    *://meta.appinn.net/*
// @exclude	    *://v2ex.com/*
// @exclude	    *://www.v2ex.com/*
// @exclude	    *://greasyfork.org/*
// @exclude	    *://bilibili.com/*
// @exclude	    *.bilibili.com/*
// @exclude	    *://www.douyin.com/*
// @exclude	    *.1688.com/*
// @exclude	    *.taobao.com/*
// @exclude	    *.tmall.com/*
// @exclude	    *.jd.com/*
// @exclude	    *.smzdm.com/*
// @exclude	    *.zhihu.com/*
// @exclude	    *://weibo.com/*
// @exclude	    *.qq.com/*
// @exclude	    *.live.com/*
// @exclude	    *.mi.com/*
// @exclude	    *docs.google.com/*
// @exclude	    *baike.baidu.com/*
// @exclude	    *.wikipedia.org/*
// @exclude     *://*.amazon.tld/*
// @exclude	    *.flightradar24.com/*
// @exclude	    *.obsidian.md/*
// @exclude	    *.runoob.com/*
// @exclude	    https://www.baidu.com/s?*
// @exclude	    https://www.google.com/search*
// @exclude	    https://www.bing.com/search*
// @exclude	    https://www.so.com/s*
// @exclude	    https://regex101.com/
// @exclude	    https://discord.com/*
// @exclude	    https://web.telegram.org/*
// @exclude	    https://www.flipkart.com/*
// @exclude	    *.themoviedb.org/*
// @exclude	    *.youku.com/*
// @exclude	    *.cn/*
// @exclude     *mall*
// @exclude     *shop*
// @exclude     /.*(?<!jav)store.*/
// @exclude     *buy*
// @exclude     *tools*
// @exclude     *translate*
// @exclude     */releases
// @exclude     */releases/*
// @exclude     *:5244*
// @exclude     *:8080*
// @connect     *
// @connect      javbus.com
// @connect      javdb.com
// @connect      fc2hub.com
// @connect      dmm.co.jp
// @connect      1pondo.tv
// @connect      caribbeancom.com
// @connect      tokyo-hot.com
// @connect      mgstage.com
// @connect      r18.com
// @connect      prestige-av.com
// @connect      javspyl.tk
// @connect      fc2.com
// @connect      heydouga.com
// @connect      heyzo.com
// @connect      translate.google.com.hk
// @connect      fanyi.baidu.com
// @connect      self
// @connect      localhost
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @run-at      document-idle

// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.search(/detail|product/gi)>0
        && window.location.href.search(/attackers\.net|www\.dmm\.co\.jp|www\.mgstage\.com/i)<0){
        console.log("sav: 当前网址不匹配: " + window.location.href);
        return;
    }

    window.qxin = {};   // 给引用脚本传参
    var timerGetInfo;   // 延时获取信息
    var timerMouseLeave;    // 鼠标离开番号。鼠标进入菜单时的定时器, 超时不进入, 菜单消失
    var timerMouseLeaveMenu;    // 鼠标离开菜单
    // var timerImgLoading;    // 图片加载后 重新定位的定时器。 加载成功后, 清除该定时器
    var avInfo = {};    // 临时存储相关信息
    var avInfoID = "";    // 临时存储avID
    var localInfo = {}; // 从本地获取到的番号信息, 只在判断是否本地存在和存储信息时使用
    var Imgscall = 1.0; // 图片默认放大倍数, 在图片上滚动鼠标滚轮使用。
    var javdbTime = []; // 记录访问javdb的时间, 如果短时间内多次访问就限制访问, 默认是5分钟内限制为10次访问。
    var divTarget;  // 鼠标当前经过的番号节点
    var imgErrorSVG = "data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M304.128 456.192c48.64 0 88.064-39.424 88.064-88.064s-39.424-88.064-88.064-88.064-88.064 39.424-88.064 88.064 39.424 88.064 88.064 88.064zm0-116.224c15.36 0 28.16 12.288 28.16 28.16s-12.288 28.16-28.16 28.16-28.16-12.288-28.16-28.16 12.288-28.16 28.16-28.16z' fill='%23999'/%3E%3Cpath d='M887.296 159.744H136.704C96.768 159.744 64 192 64 232.448v559.104c0 39.936 32.256 72.704 72.704 72.704h198.144L500.224 688.64l-36.352-222.72 162.304-130.56-61.44 143.872 92.672 214.016-105.472 171.008h335.36C927.232 864.256 960 832 960 791.552V232.448c0-39.936-32.256-72.704-72.704-72.704zm-138.752 71.68v.512H857.6c16.384 0 30.208 13.312 30.208 30.208v399.872L673.28 408.064l75.264-176.64zM304.64 792.064H165.888c-16.384 0-30.208-13.312-30.208-30.208v-9.728l138.752-164.352 104.96 124.416-74.752 79.872zm81.92-355.84l37.376 228.864-.512.512-142.848-169.984c-3.072-3.584-9.216-3.584-12.288 0L135.68 652.8V262.144c0-16.384 13.312-30.208 30.208-30.208h474.624L386.56 436.224zm501.248 325.632c0 16.896-13.312 30.208-29.696 30.208H680.96l57.344-93.184-87.552-202.24 7.168-7.68 229.888 272.896z' fill='%23999'/%3E%3C/svg%3E";
    var cid = {};  // 用于预告视频的链接转换 
    var localVideoList = [];    // 获取本地 jellyfin/emby 中所有的视频名称

    var allHTML = document.querySelector("body");   // 获取网页
    
    // 取出本地的信息 
    localInfo = GM_getValue("avInfo2");
    if(!localInfo){
        GM_setValue("avInfo2",{});
        localInfo = {};
    }
    
    // 初始化 setting
    // setting: 相关设置选项
    var setting = GM_getValue("_setting");  
    if(!setting || JSON.stringify(setting) == "{}"){
        setting = {
            "list":[
                ["JavDB 搜索","https://javdb.com/search?q=%s&f=all"],
                ["JavLib 搜索","http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=%s"],
                ["JavMenu 搜索","https://javmenu.com/search?wd=%s"],
                ["missav 在线","https://missav.com/search/%s"]
            ],
            "list_wuma":[
                ["JavMenu 搜索","https://javmenu.com/search?wd=%s"],
                ["btsow 下载","https://btsow.com/search/%s"]
            ]
        }
        GM_setValue("_setting",setting);
    }
    // 更新
    if(setting.version && setting.version != 2){
        setting.version = 2;
        setting.selectLength = 0;
        setting.list_wuma = [
            ["JavMenu 搜索","https://javmenu.com/search?wd=%s"],
            ["btsow 下载","https://btsow.com/search/%s"]
        ];
        GM_setValue("_setting",setting);
    }
    // setting2 放一些隐藏的变量, 本身这些变量就不允许用户修改, 例: version, javdbTime
    var setting2 = GM_getValue("_setting2");  
    if(!setting2){
        setting2 = {
            "version":2,
            "javdbTime":[]
        }
        if(setting.javdbTime){
            setting2.javdbTime = setting.javdbTime;
        }
        GM_setValue("_setting2",setting2);
    }
    if(setting2.javdbTime && Array.isArray(setting2.javdbTime)){
        javdbTime = setting2.javdbTime
    }

    // 自定义获取信息的地址, 避免网络不通顺 
    var javbusLink = setting.javbus? setting.javbus: "https://www.javbus.com/"
    var javDBLink = setting.javdb? setting.javdb: "https://javdb.com/"
    
    // 磁链复制功能在引用脚本中还有一部分
    window.qxin.CopyMagnet = setting.magnetCopy? true:false;
    window.qxin.includeIDinLinks = setting.includeIDinLinks ?? false;

    // 测试用
    var debug = setting.debug?setting.debug:false
    // debug = true;   // 打开一些console.log提示
    if (debug) { 
        console.clear(); 
        console.log("sav已开启debug模式:"); 
        console.log("老司机共浏览了" + Object.keys(localInfo).length + "个番号！");
    }
    if(debug) {var searchTimes = 0; var avIDTimes=0};    // 计数, 查看有多少番号。searchTimes: 通过正则搜索到的次数。 avIDTimes:最后的实际匹配的番号数量

    // 一般发行番号: 从javbus获取信息
    // var oRegExp = /[a-zA-Z]{2,6}[-\s]?\d{2,5}/gi; 
    //             ; --------------------------------------------------------普通番号,带横杠-----------------------------------------------------------------  |--------------------------------------------------------------普通番号, 不带横杠-------------------------------------------------------------------------------------------------                       |-------------字母特别的番号-------------------------|---------字母超长的番号----------------------       |     东京热 n k                |加勒比(-)、一本道(_)、 MuraMura(_):   月日年        |       带前缀 carib|1pondo 的加勒比, 一本道        |       带后缀的 -1pon|-carib|-paco 加勒比 一本道 paco    |Mesubuta メス豚 (也可能是一本道的变种)        ||       HEYZO             
    var oRegExp = /(?<!\w|\/|www\.|=|col-|\d-|>|Jukujo-)(?!heyzo|SHINKI|JPNXXX|carib|vps)[a-zA-Z]{2,6}-\d{2,5}(?:-c|_c|-4k)?(?!\d|[A-Za-z]{2,}|-\d|\.com|\.\d)|(?<!\w|\/|\\|\.|【|-|#|@|=|www\.)(?!heyzo|SHINKI|JPNXXX|carib|and|vps|dvd)[a-zA-Z]{2,6}\s{0,2}\d{3,4}(?:-c|_c)?(?!\w|-|\.|\/|×|％|%|@|\s?天| 于| 发表| 發表|歳| 歲|小时|分|系列| Min| day|ml| time|cm| ppi|\.com)|(?<!\w)(?:PARATHD|3DSVR|STARSBD)[-\s]?\d{3,4}(?!\w)|(?<!\w)(?:HIMEMIX|CASMANI|MGSSLND)[-\s]?\d{3}(?!\w)|(?<!\w)(?:k|n)[01]\d{3}(?!\w|-)|(?<!\w|\d-|\/)[01]\d{5}[-_](?:1)?\d{2,3}(?!\w|-\d)|(?<!\w)(?:carib|1pondo)[-_]\d{6}[-_]\d{2,3}(?!\w)|(?<!\w|\d-)\d{6}[-_]\d{2,3}(?:-1pon|-carib|-paco)(?!\w)|(?<!\w|\d-)\d{6}_(?:1)?\d{3}_0[12](?!\w|-\d)|HEYZO[_-\s]?(?:hd_)?\d{4}/gi; 
    // 省略字母, 连续数字的番号 例: abc-001、002、003
    var oRegExp2 = /(?<=(?<!\w|\d-)([a-zA-Z]{2,6})(?:[\s,，、-]?(?!2022|2021|2020|2019)\d{3,4})+(?!\d)[\s,、，和跟]{0,2})\d{3,4}(?!\w|％|%|人|年|歳|万|の|発)/gmi
    // 一些素人、无码番号: 从javdb获取信息
    //                  ;--------- mgstage 字母 + 数字 + 字母 -----------------------|--------- FC2 ----------------|     HEYDOUGA                |      T28       | TMA 5位,6位,3位(没匹配)   |         1000girl   数字 + 字母             |MUGEN Entertainmen: MKD-S  MKBD-S |    素人 | 北池袋盗撮倶楽部            | japornXXX: JPNXXX       | xxx-av                   |    crazyasia               | PEWORLD                   |   10Musume  6位数字_01          |熟女俱乐部
    var oRegExp_wuma = /(?<!\w|-|\/)\d{3}[a-zA-Z]{2,5}[-\s]?\d{3,4}(?!\w|-|.torrent|年)|(?<!\w|\/)FC2[^\d]{0,5}\d{6,7}|HEYDOUGA[_-\s]?\d{4}-\d{3,5}|(?<!\w)T28-\d{3}|(?<!\w)T-2\d{4,5}(?!\w|-)|(?<!\w|-|\/)[01]\d{5}-[a-zA-Z]{2,7}(?!\w|-)|(?<!\w)MK(?:B)?D-S\d{2,3}(?!\w|-)|(?:SHINKI|KITAIKE)[-\s]?\d{3}(?!\w|-)|JPNXXX[-\s]?\d{5}(?!\w|-)|xxx-av[-\s]\d{4,5}(?!\w|-)|(?<!\w)crazyasia\d{5}(?!\w|-)|(?<!\w)PEWORLD\d{5}(?!\w|-)|(?<!\w)[01]\d{5}[-_]?_01(?=-10mu)?|Jukujo-Club-\d{3}/gi;
    // 省略写的fc2番号 例: fc2-123456 567890
    var oRegExp_wuma2 = /(?<=(FC2[^\d]{0,5})(?:[\s,、-]?\d{6,7})+[\s,、]?)\d{6,7}/gmi
    // 排除在此的番号, 与下面的 Exclude 不同的是: 这个还会判断后面跟的数字, 能够精确排除。
    //                         | 排除非 fx-0xx          | 数字部分全是0     |                                                                          | 一些国家简称 + 两位数字 sr是黑鸟侦察机               |卡西欧         |细胞相关        |csgo皮肤        |致钛硬盘              | 瑞昱芯片      | soc          | ns530刀片
    var oRegExp_Exclude_ID = /^(?:fx-?([^0]\d{2}|\d{4})|[a-zA-Z]+-?0{2,6}$|pg-13|crc-32|ea211|fs[\s-]?140|trc-20|erc-20|rs[\s-]?(232|422|485)|(sg|ae|kr|tw|ph|vn|kh|ru|uk|ua|tr|th|fr|in|de|sr)[\s-]\d{2}|(gm|ga)-\d{4}|cd[\s-]?\d{2,4}|seed[\s-]?\d{3}$|pc005|moc-\d{5}|wd-40|rtd[\s-]?\d{4}|cm\d{4}|rk\d{4})|ns[\s-]?\d{3,4}/i
    // 排除在此的关键词。 个别与番号同名的也被排除, 例如 Top-10 这种
    var oRegExp_Exclude_en = /^(?:about|ac|actg|aes|again|agm|ah|aim|all|ak|akko|apex|aptx|au|ax|avhd|avx|bej|bgm|chrome|bd|bm|build|(?:fc|p)?[blp]ga|by|bzk|cc|ccie|cctv|cea|ckg|class|cny|covid|cpu|code|debian|df|ds|dw|dx|ea|er|ecma|eia|emui|eof|ep|error|ez|fc|file|flash|flyme|fps|for|fork|from|fuck|fx|gbx|get|github|glm|gnz|gp|groupr|gt|gts|gtx|guest|hao|hd|her|hk|https?|hp|IEEE|il|ilc|ilce|imx|index|intel|inteli|ip|ipad|is|ISBN|iso|issue|issues|it|jav|javdb|joy|jp|jr|jsr|jt|jukujo|just|kc|keccak|kv[bd]|Kirin|lancet|line|linux|lk|lolrng|lpl|lt|lumia|lg|macos|md|mh|miui|mipc|mnvr|mm|mnvr|model|mv|mvp|ms|nas|nature|nc|next|ngff|note|number|ok|only|os|osx|pa|page|pch|phl|ppv|pmw|png|qbz|qsz|raid|rfc|ripemd|rmb|rng|rog|row|rtx|rush|rx|sale|scp|scte|sdm|sdr|server|sha|shp|spent|sql|sn|snh|Socket|ssd|status|steam|su|swipe|tcp|the|to|top|than|thread|ts|type|uh|uhd|under|us|usa|usc|utf|utc|via|video|vkffsc|vol|vr|vs|vv|win|with|width|wikis|wta|xdr|xfx|xiaomi|yah)$/i
    // 在没有横杠的情况下, 会排除在此的关键词 例: 识别 tv-001  但是会排除 tv001
    var oRegExp_Special_en = /^(?:ace|akb|api|am|anime|at|be|best|bt|bl|cp|crc|exynos|dl|dp|dq|gb|girl|jd|ha|has|hc|hours|iq|in|mk|mini|mhz|mx|no|open|of|over|part|pd|pdd|porn|pt|sb|sex|tv|tb|ty|ver|vip|zd|zip)$/i
    // 在没有横杠的情况下, 会排除在此的数字 
    var oRegExp_Special_num = /^(?:007|101|110|115|123|128|256|360|365|370|404|512|520|911|996|\d{1,2}00|19[789]\d|20[012]\d|720|1080|1024|2048|[056789]\d{3}|(\d)\1{2,3})$/
    // 排除符合条件的无码番号
    var oRegExp_Exclude_wuma = /^(?:512gb)/i
    // 可能是素人、无码番号, 如果在javbus获取不到信息, 会继续从javdb中查找. 2022-10-23 v0.19.3注: 可能会被弃用
    var oRegExp_SuRen = /ANAN|ARA|BEAF|BKKJ|BSKC|BSKJ|CCDV|CUTE|DAVC|DCV|DDH|ECSN|ENE|ERKR|EROFC|FKNP|FLC|FTHT|GANA|GESB|GRQR|GRMO|GRMR|HABJ|HHL|HMDN|HMDNC|HMT|HOMEV|IMGN|IND|INSF|INSTC|JAC|JNT|JPNXXX|KING|KNB|LBJ|LOG|LUXU|MAAN|MCHT|MFC|MIUM|MKGF|MONA|NAEN|NMCH|NTK|NTR|OPCYN|OREC|ORECO|PAK|POK|pow|PPZ|PRGO|REIW|RKD|SCOH|SGK|SHE|SHINKI|SIRO|SIROR|SIMM|SQB|SROM|SSDV|SSK|STCV|STH|SUKE|TEN|TKOL|TKPR|WITH|\d{6}|(?:k|n)\d{4}/i
    // 磁力链接
    var oRegExp_Magnet = /magnet:\?xt=urn:btih:[0-9a-fA-F]{40}|(?<!\w|\/|\||=)[0-9a-fA-F]{40}(?!\w|-)/ig
    // 特别的className,在这些class中不识别番号。 /name|auth|user|code/i; pstatus:javbus修改帖子的用户名; TbwUpd:谷歌搜索页面链接
    window.qxin.RE_Exclude_className = /(?<!file)name|auth|user|(?<!home)code|^pstatus$|(?<!_tl_|ql-)editor|time|sav-id|sidebar|menu|TbwUpd/gi;

    // 相关网站匹配规则
    switch(window.location.hostname){
        case "www.dmm.co.jp":
            console.log("当前匹配网站: www.dmm.co.jp");
            oRegExp = /[a-zA-Z]{2,6}\d{3,4}/gi;
            break;
        case "attackers.net":
            console.log("当前匹配网站: attackers.net");
            oRegExp = /(?<=dvd)[a-zA-Z]{2,5}\d{3,4}/gi;
            break;
        case "www.mgstage.com":
            window.qxin.RE_Exclude_className = /(?<!file)name|auth|user|(?<!home)code|^pstatus$|(?<!_tl_|ql-)editor|time|sav-id|sidebar|TbwUpd/gi;
            break;
        case "www.javlibrary.com":
        case "www.d67b.com":
            window.qxin.javlibrary = true;
            break;

    }

    // 用于预告视频的链接转换, 预览图片的获取 
    if(!setting.dontGetVideo){
        cid = {
            abp: ["118abp"],
            abw:["118abw"],
            aczd:["h_019aczd"],
            aed: ["aed"],
            aege:["1aege"], 
            akdl: ["1akdl"],
            ako: ["ako"],
            ambi:["h_237ambi"],
            anb: ["anb"],
            apaa: ["apaa"],
            apns: ["apns"],
            aran: ["aran"],
            arbb:["h_092arbb"],
            atid:["atid"],
            avop:["avop","h_455avop00"],
            awd: ["awd"],
            bank: ["h_1495bank"],
            bdsr:["57bdsr"],
            bfd: ["24bfd"],
            bfkb: ["h_1285bfkb"],
            bkynb: ["1bkynb"],
            clot: ["h_237clot"],
            dandy: ["1dandy"],
            davk:["55davk"],
            dldss: ["1dldss"],
            docp:["118docp"],
            dori:["h_491dori"],
            drpt: ["1drpt"],
            dtvr: ["24dtvr"],
            dv: ["53dv"],
            dvaj: ["53dvaj"],
            dvdes: ["1dvdes"],
            ekdv: ["ekdv"],
            emth:["h_1638emth"],
            erofc:["erofc"],
            fbos:["fbos"],
            fera: ["h_086fera"],
            fgan: ["h_1440fgan"],
            fir:["118fir"],
            fneo: ["h_491fneo"],
            fone: ["h_491fone"],
            fsdss: ["1fsdss"],
            fset: ["1fset"],
            fsre:["h_491fsre"],
            fsvr: ["h_955fsvr"],
            ftht: ["1ftht"],
            fuga: ["h_086fuga"],
            gar:["1gar"],
            gas: ["71gas"],
            gets:["118gets"],
            gnab:["118gnab"],
            gnax:["gnax","h_1345gnax"],
            gone: ["h_1133gone"],
            gs:["140gs"],
            gvg: ["13gvg"],
            haru: ["h_687haru"],
            havd: ["1havd"],
            hbad:["1hbad"],
            hez:["59hez"],
            hgot:["84hgot"],
            hkd: ["hkd"],
            hmnf:["h_172hmnf"],
            hoks: ["hoks"],
            honb:["h_1133honb"],
            hz: ["h_113hz"],
            hzgb: ["h_1100hzgb"],
            hzgd:["h_1100hzgd"],
            ienf:["1ienf"],
            instc:["instc"],
            jbs:["118jbs"],
            jrze: ["h_086jrze"],
            jsop:["jsop"],
            jukf: ["h_227jukf"],
            keed:["h_086keed"],
            kmhr:["1kmhr"],
            kmhrs:["1kmhrs"],
            kri:["h_286kri"],
            ktra: ["h_094ktra"],
            lbdd:["n_1515lbdd"],
            lol: ["12lol"],
            macb:["h_687macb"],
            mas:["118mas"],
            mct: ["118mct"],
            mds: ["84mds"],
            meko: ["h_1160meko"],
            mesu: ["h_086mesu"],
            mist:["1mist"],
            mogi: ["1mogi"],
            moko: ["h_254moko"],
            mond:["18mond"],
            mtall: ["1mtall"],
            mxgs:["h_068mxgs"],
            natr:["h_067natr00"],
            neo:["433neo"],
            nhdta:["1nhdta"],
            nhdtb: ["1nhdtb"],
            npv:["118npv"],
            nxgs: ["h_254nxgs"],
            nyh:["1nyh"],
            ofku: ["h_254ofku"],
            omhd: ["omhd"],
            onez:["h_1674onez"],
            pako:["h_1133pako"],
            piyo: ["1piyo"],
            ppt: ["118ppt"],
            pydvr: ["h_1321pydvr00"],
            pym: ["h_283pym"],
            rct: ["1rct"],
            rctd: ["1rctd"],
            rdt:["118rdt"],
            rebd: ["h_346rebd"],
            sait:["55sait"],
            san:["h_796san00"],
            scpx: ["84scpx"],
            scr:["12scr"],
            sdab: ["1sdab"],
            sdam:["1sdam"],
            sdde: ["1sdde"],
            sdjs: ["1sdjs"],
            sdmf: ["1sdmf"],
            sdmm: ["1sdmm"],
            sdmu: ["1sdmu"],
            sdmua: ["1sdmua"],
            sdnm: ["1sdnm"],
            sdnt:["1sdnt"],
            sdth: ["1sdth"],
            sga:["118sga"],
            shh: ["1shh"],
            shic:["h_839shic"],
            shind: ["h_1560shind"],
            shn: ["1shn"],
            silkc: ["1silkc"],
            skmj: ["h_1324skmj"],
            sprd:["18sprd"],
            spro: ["h_1594spro"],
            spz: ["h_254spz"],
            star: ["1star"],
            stars: ["1stars"],
            stcv: ["h_1616stcv"],
            stko:["1stko"],
            sun: ["1sun"],
            svdvd: ["1svdvd"],
            svmgm:["1svmgm"],
            sw: ["1sw"],
            t28: ["55t28"],
            tmhp: ["h_452tmhp"],
            tmvi: ["h_452tmvi"],
            udak: ["h_254udak"],
            umd: ["125umd"],
            vrtm:["h_910vrtm"],
            wo: ["1wo"],
            wps:["118wps"],
            xrw:["84xrw"],
            yst:["540yst"],
            zeaa: ["h_086zeaa"],
            zex: ["h_720zex"],
            // 多个
            // h_139doks571   36doks00567
            doks:["h_139doks","36doks"],
            arso: ["h_1378arso","1arso"],
            // gvh-476, gvh-017
            gvh:["gvh","13gvh"],
            // 末尾补零
            bf:["bf00"],
            // 末尾截断
            // n_1445thni088
            thnib:["n_1445thni"],
            // 2024-07-09
            elo:["767elo"],
            mcsr:["57mcsr"],
            nacr:["h_237nacr"],
            senn:["1senn"],
            btha:["5433btha"],
            tem:["118tem"],
            kbi:["118kbi"],
            har:["118har"],
            fadss:["1fadss"],
            beaf:["h_1615beaf"],
            giro:["118giro"],
            hodv:["41hodv"],
            nhvr:["1nhvr"],
            msfh:["1msfh"],
            kire:["1msfh"],
            okax:["84okax"],
            gesu:["49gesu"],
            ntr:["1ntr"],
            stsk:["h_1605stsk"],
            csct:["55csct"],
            bgn:["118bgn"],
            enki:["84enki"],
            kirm:["h_1540kirm"],
            aidv:["41aidv"],
            good:["118good"],
            sply:["1sply"],
            ysn:["h_127ysn"],
            abf:["118abf"],
            mdtm:["h_585mdtm"],
            mane:["1mane"],
            start:["1start"],
            brk:["143brk"],
            seven:["1seven"],
            ypaa:["h_086ypaa"],
        };
        // cid_pic ={
        //     brk:["7brk"],
        // }
    }

    // 对动态添加的dom进行检测
    var observerTarget = document.querySelector('body');    // 选择目标节点
    var observerConfig = {childList: true, characterData: true ,subtree:true,}; // 配置观察选项
    var observer = new window.MutationObserver(function(mutations) {    // 创建观察者对象  
        // console.log("观察者数量");
        // console.log(mutations.length);
        mutations.forEach(function(mutation) {
            if(mutation.target.innerText?.length<5){
                // console.log(mutation.target.innerText);
                if(debug)console.log("内容为空");
            }
            else if(checkParentClass(mutation.target)){
                if(debug){console.log("存在不合适的父元素")}
            }else{
                observer.disconnect();  // 关闭对 dom 的监听
                // if(debug){console.log("开始判断正则")}
                if(mutation.target.innerText?.search(oRegExp)>-1){
                    // console.log("普通番号");
                    findAndReplaceDOMTextFun(mutation.target)
                }
                if(mutation.target.innerText.search(oRegExp2)>-1){
                    // console.log("连续番号");
                    findAndReplaceDOMTextFun2(mutation.target)
                }
                if(mutation.target.innerText.search(oRegExp_wuma)>-1){
                    // console.log("无码番号");
                    findAndReplaceDOMTextFun_Wuma(mutation.target)
                }
                if(mutation.target.innerText.search(oRegExp_wuma2)>-1){
                    // console.log("连续无码番号");
                    findAndReplaceDOMTextFun_Wuma2(mutation.target)
                }
                observer.observe(observerTarget, observerConfig);   // 开启对 dom 的监听
            } 
        })
    }); 
    
    addStyle()

    // 比对本地 jellyfin/emby 视频, 
    if(setting.jellyfinHost && setting.jellyfinApiKey && setting.LocalVideoSearch){
        setTimeout(() => {
            localVideo_search();
        }, 500);
    }

    // 延时执行, 解决javbus论坛通过搜索进入的帖子无发弹出工具栏的问题
    setTimeout(findAVID,300);

    // 磁链
    // 如果设置中有qbit的网址和下载地址, 则认为启用了下载功能
    if(!(setting.dontMagnetDiscern || setting.dontCopyMagnet )&& setting.qBitHost && setting.qBitDownload){
        window.qxin.QBit = qBit;
    }

    // 滑词搜索 
    if(setting.selectLength && setting.selectLength>0){
        document.onmouseup = selectSearch
    }

    // 切换页面 暂停预览视频播放
    if(setting.dontClearMenu){
        document.addEventListener("visibilitychange",visibilitychangeFun);  // 切换页面 暂停预览视频播放
    }

    // 
    function findAVID(){
        if(debug){console.time("正则查询用时");}
        observer.disconnect();  // 关闭对 dom 的监听
        findAndReplaceDOMTextFun_Wuma2(allHTML);    //// 查找连续的 fc2 番号。 例: fc2-123456 567890
        findAndReplaceDOMTextFun_Wuma(allHTML);  // 查找fc2、素人、无码等番号 (无菜单,点击后会跳转到javdb进行搜索)
        findAndReplaceDOMTextFun2(allHTML);    // 省略字母, 连续数字的番号 例: abc-001、002、003
        findAndReplaceDOMTextFun(allHTML);     // 查找普通番号  (与上面的顺序不能变,否则会导致 2函数 失效)
        observer.observe(observerTarget, observerConfig);   // 开启对 dom 的监听
        if(debug) {console.timeEnd("正则查询用时"); console.log("本页面通过正则匹配的有: " + searchTimes + " . 实际的番号数量: " + avIDTimes);}
        if(!(setting.dontMagnetDiscern || setting.dontCopyMagnet )){    // 磁链
            findAndReplaceDOMTextFunMagnet();
        }
    }

    // 查找番号, 匹配最基础的番号
    function findAndReplaceDOMTextFun(element){
        findAndReplaceDOMText(element, {
            find:oRegExp,
            preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            replace: function(portion,match) {
                // 当番号介于两个HTML元素之中, 只作用最后一个
                if(portion.isEnd){
                    var otext = match[0];
                }else{
                    return "";
                }
                if(debug) {searchTimes++;};
                
                // 检查番号, 如果存在特殊英文或者数字,则退出
                if(IDcheck(otext)){return otext};
                
                // 添加事件和样式
                var avID = formatAVID(otext)
                
                // 判断3位数字写成2位的
                if(avID.match(/-\d{2}$/) && localInfo[avID] && localInfo[avID].noInfo){
                    let avID2 = avID.replace("-","-0");
                    if(localInfo[avID2]){
                        avID = avID2;
                    }
                }
                
                var odiv = addEventAndStyle(localInfo[avID],avID)   // 添加事件和样式
                if(debug){avIDTimes++; console.log(avIDTimes + "番号: " + avID,otext);otext = "["+avIDTimes +"]" + otext;}

                return displayMode(odiv,otext);
            }
        });
    }
    // 省略字母, 连续数字的番号 例: abc-001、002、003
    function findAndReplaceDOMTextFun2(element){
        findAndReplaceDOMText(element,{
            find: oRegExp2,
            preset: "prose",
            forceContext:findAndReplaceDOMText.NON_INLINE_PROSE, 
            replace: function(portion,match){
                var avID = match[1] + " " +match[0] // 视为无横杠番号
                
                // 检查番号, 如果存在特殊英文或者数字,则退出
                if(IDcheck(avID)){return match[0]};
                if(debug) {searchTimes++;}
                
                // 添加事件和样式
                avID = formatAVID(avID)
                var odiv = addEventAndStyle(localInfo[avID],avID)   // 添加事件和样式

                if(debug){avIDTimes++; console.log(avIDTimes + "省略字母,连续数字的番号: " + avID, portion.text);portion.text = "[*"+avIDTimes +"]" + portion.text}
 
                return displayMode(odiv,portion.text);     
            }
        })
    }
    // 查找番号, 匹配fc2、MGSTAGE(259LUXU等)、一本道、东京热、HEYZO等
        // 只有一个功能就是跳转到 javdb 进行搜索, 没有菜单, 也没有其他任何功能
        // 关于heyzo, 如果是后面跟横杠会触发上面的基础查找, 只有中间没有横杠或者有下划线的情况才会匹配这个。
    function findAndReplaceDOMTextFun_Wuma(element){
        findAndReplaceDOMText(element, {
            find:oRegExp_wuma,
            preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            replace: function(portion,match) {
                // 当番号介于两个HTML元素之中, 只作用最后一个
                if(portion.isEnd){
                    var otext = match[0];
                }else{
                    return "";
                }

                // 检查番号是否合法
                if(IDcheckWuma(otext)){return otext};
                // 添加事件和样式
                var avID = formatWuma(otext);    // 格式化番号
                // 123abc-456 数字字母-数字
                if(avID.match(/\d{3}[a-zA-Z]{2,5}[-\s]?\d{3,4}/)){
                    avID = avID.slice(3);
                    avID = formatAVID(avID)
                }

                var odiv = addEventAndStyle(localInfo[avID],avID)   // 添加事件和样式

                if(debug) {searchTimes++;avIDTimes++; console.log(avIDTimes + "无码番号: " + avID, otext); otext = "[!"+avIDTimes +"]" + otext;}

                odiv.dataset.av_wuma = avID;
                return displayMode(odiv,otext);
            }
        });
    }
    // 查找番号, 连续的 fc2 番号。 例: fc2-123456 567890
    function findAndReplaceDOMTextFun_Wuma2(element){
        findAndReplaceDOMText(element, {
            find:oRegExp_wuma2,
            preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            replace: function(portion,match) {
                // 当番号介于两个HTML元素之中, 只作用最后一个
                if(portion.isEnd){
                    var otext = match[0];
                }else{
                    return "";
                }
                var avID = match[1] + otext;

                avID = formatWuma(avID); // 格式化 fc2 番号

                // 复制上方的。 fc2 番号是否合法: FC2-012345 和 FC2PPV-012345 搜索结果不一样 
                if(avID.match(/fc2/i) && localInfo[avID] && localInfo[avID].noInfo ){
                    let avID2;
                    if(avID.match(/ppv/i)){
                        avID2 = avID.replace("FC2PPV","FC2");
                    }else{
                        avID2 = avID.replace("FC2","FC2PPV");
                    }
                    if(localInfo[avID2] && !localInfo[avID2].noInfo){
                        avID = avID2;
                    }
                }

                var odiv = addEventAndStyle(localInfo[avID],avID)   // 添加事件和样式
                
                if(debug) {searchTimes++;avIDTimes++; console.log(avIDTimes + "连续Fc2番号: " + avID,otext); otext = "[**"+avIDTimes +"]" + otext;}

                odiv.dataset.av_wuma = avID;
                return displayMode(odiv,otext);
            }
        });
    }

    // 点击磁力链接, 可以复制到剪贴板
    function findAndReplaceDOMTextFunMagnet(){
        if(debug){console.log("开始查找磁力链接");};
        observer.disconnect();  // 关闭对 dom 的监听
        findAndReplaceDOMText(allHTML, {
            find:oRegExp_Magnet,
            preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            replace: function(portion,match) {
                // 当番号介于两个HTML元素之中, 只作用最后一个
                if(portion.isEnd){
                    var otext = match[0];
                }else{
                    return "";
                }
                if(debug){console.log("发现磁力链接: " + otext);};
                var magnet = otext
                if(magnet.indexOf("magnet")<0){
                    magnet = "magnet:?xt=urn:btih:" + magnet;
                }

                var odiv = document.createElement('savmagnet');

                if(setting.magnetCopy){
                    odiv.addEventListener("click",function(){
                        GM_setClipboard(magnet);
                        if(setting.qBitHost && setting.qBitDownload){
                            qBit(magnet);
                        }
                    });
                    odiv.title = "点击复制磁力链接";
                } else {
                    otext = "<a href='" +magnet+  "' style='text-decoration:underline;'>" +otext+  "</a>";
                }
                
                odiv.innerHTML = otext;
                odiv.style.textDecoration = "underline #D9B412"
                return odiv;
            }
        });
        observer.observe(observerTarget, observerConfig);   // 开启对 dom 的监听
    }
        
    // 添加页面番号样式 , 传入的参数是番号, 用来判断番号是否在本地存在
    function addEventAndStyle(isExist,avID){
        // 添加事件
        var odiv = document.createElement('savdiv');
        odiv.addEventListener("click",savIDClick);  // 点击番号复制
        if(setting.clickToMenu){
            odiv.addEventListener("click",savIDMouseEnter);    // 点击鼠标 开启菜单
        }else{
            odiv.addEventListener("mouseenter",savIDMouseEnter);    // 鼠标滑过 开启菜单
        }
        odiv.addEventListener("mouseleave",savIDMouseLeave);    // 鼠标离开 关闭菜单

        if(isExist){
            // 添加浏览次数
            if(isExist.visited){
                odiv.dataset.visited = isExist.visited;
            } else {
                odiv.dataset.visited = 1;
            }
            // 添加class 在本地是否存在, (通过添加 class 来改变颜色)
            if(isExist.noInfo){
                odiv.classList.add("sav-id", "infoNonExistent");
            }else{
                odiv.classList.add("sav-id", "infoExistent");
            }
        }else {
            odiv.dataset.visited = 0;
            odiv.classList.add("sav-id", "infoFirst");
        }

        odiv.dataset.av = avID;    

        return odiv;
    }
    // 番号后面添加图标, 不作用于番号 
    function displayMode(odiv,otext){
        if(setting.addSearchButton){
            odiv.innerHTML = setting.searchButtonIcon?setting.searchButtonIcon:"✈";
            var divWrap = document.createElement("savdiv");
            divWrap.innerHTML = otext;
            divWrap.appendChild(odiv);
            return divWrap;
        }else{
            odiv.innerHTML = otext;
            return odiv;
        }
    }

    // 创建搜索基本菜单(搜索按钮)
    function createPattenr(id,id_wuma){
        let aPattern = `<avdivbutton>`
        // 添加 相关页面 按钮
        if(!setting.close_Related_Page){
            aPattern +=  `<avdiv class='savlink relatedPage RPdisabled'><a href='' target='_blank' referrerpolicy='same-origin'>JavBus 页面</a></avdiv>`;
        }
        // 添加特定搜索
        if(id.match(/fc2/i)){
            var basiceSearch = `https://fc2hub.com/search?kw=${id_wuma}`;
            aPattern +=  `<avdiv class='savlink'><a href='${basiceSearch}' target='_blank' referrerpolicy='same-origin'>fc2hub 搜索</a></avdiv><avdiv class='savlink'><a href='${javDBLink}search?q=${id_wuma}&f=all' target='_blank' referrerpolicy='same-origin'>JavDB 搜索</a></avdiv>`;
            var savList = setting.list_wuma;
        }else if(id_wuma){
            var basiceSearch = `${javDBLink}search?q=${id_wuma}&f=all`;
             aPattern +=  `<avdiv class='savlink'><a href='${basiceSearch}' target='_blank' referrerpolicy='same-origin'>JavDB 搜索</a></avdiv>` ;
            var savList = setting.list_wuma;
        } else{
            var basiceSearch = javbusLink + "search/" + id;
             aPattern +=  "<avdiv class='savlink'>" + "<a href='" + basiceSearch +"' target='_blank' referrerpolicy='same-origin'>JavBus 搜索</a>" +"</avdiv>" ;
            var savList = setting.list;
        }
        if(savList){
            for(let i=0; i<savList.length;i++){
                aPattern += "<avdiv class='savlink'>" + "<a href='" + savList[i][1].replace("%s", id) +" 'target='_blank' referrerpolicy='same-origin'>" + savList[i][0] + "</a>" + "</avdiv>"
            }
        }

        // 添加通用搜索按钮
        if(setting.list_all && setting.list_all.length>0){
            var savListAll = setting.list_all;
            for(let i=0; i<savListAll.length;i++){
                aPattern += "<avdiv class='savlink'>" + "<a href='" + savListAll[i][1].replace("%s", id) +" 'target='_blank' referrerpolicy='same-origin'>" + savListAll[i][0] + "</a>" + "</avdiv>"
            }
        }

        // 添加色花堂搜索
        if(setting.sehuatang){
            aPattern += `<avdiv class='savlink savsehuatang'  data-avid=${id}> 色花堂 </avdiv>`
            sehuatang_getFormHash();
        }

        // 添加jellyfin按钮
        if(setting.jellyfinHost && setting.jellyfinApiKey){
            if(setting.emby){
                aPattern += "<avdiv class='savlink jellyfin'> Emby </avdiv>"
            }else{
                aPattern += "<avdiv class='savlink jellyfin'> Jellyfin </avdiv>"
            }
        }
        // 添加额外按钮
        if(debug){
            let debugSearchList = [
                [
                    "dmm",
                    "https://www.dmm.co.jp/search/?redirect=1&enc=UTF-8&category=&searchstr=%s&commit.x=11&commit.y=14"
                ],
                [
                    "google",
                    "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8"
                ]
            ];
            for(let i=0; i<debugSearchList.length;i++){
                aPattern += "<avdiv class='savlink'>" + "<a href='" + debugSearchList[i][1].replace("%s", id) +" 'target='_blank' referrerpolicy='same-origin'>" + debugSearchList[i][0] + "</a>" + "</avdiv>"
            }
        }
        if(debug || setting.addOtherButton){aPattern += "<avdiv class='savlink savSetting'>设置</avdiv><avdiv class='savlink savCopyID' data-av='"+ id +"'>" + id + "</avdiv>"};
        if(setting.dontClearMenu || setting.addOtherButton){aPattern += "<avdiv class='savlink savCloseMenu'> 关闭 </avdiv>"};
        
        aPattern += `</avdivbutton>`
    
        var odiv = document.createElement("avdiv")
        if(localInfo[id]){
            odiv.classList.add("sav-menu","idExistent");
            odiv.dataset.visited = localInfo[id].visited?localInfo[id].visited:1;
        }else{
            odiv.classList.add("sav-menu","idNonExistent");
            odiv.dataset.visited = 0;
        }
        odiv.addEventListener("mouseenter",savMenuMouseEnter)
        odiv.addEventListener("mouseleave",savMenuMouseLeave)
        odiv.addEventListener("click",savMenuClick)
        // 鼠标在图片上点击和滚轮放大缩小图片
        if(!setting.dontImgBig){ 
            odiv.addEventListener("wheel",savImgWheel)
        };
        odiv.dataset.av = id; 
        odiv.innerHTML=aPattern;
        return odiv;
    }

    // 点击番号复制
    function savIDClick(e){
        if(!document.querySelector(".sav-menu")){
            e.preventDefault();
            return false;
        }

        var avid = e.target.dataset.av
        if(avid){
            GM_setClipboard(avid);
            if(debug) console.log("粘贴成功: ", avid);
        }
        e.preventDefault();
        return false;
    }

    // 鼠标经过番号
    function savIDMouseEnter(e){ 
        // 进入番号, 如果之前存在菜单, 就判断是否是现在番号的菜单, 如果是, 退出; 否则删掉菜单, 重新获取
        if(divTarget && e.target.dataset.av==divTarget.dataset.av){
            clearTimeout(timerMouseLeaveMenu)
            return
        }else if (divTarget){
            clearTimeout(timerMouseLeaveMenu)

            let odiv = document.querySelector(".sav-menu");
            odiv.parentNode.removeChild(odiv);
        }

        // 
        observer.disconnect();
        if(e.buttons != 0) return;  // 如果是按键的情况下划过番号, 则不触发
        divTarget = e.target;
        clearTimeout(timerMouseLeave);   
        clearTimeout(timerGetInfo);
        avmouseenter(e);
    }
    // 鼠标离开番号
    function savIDMouseLeave(e){ 
        observer.observe(observerTarget, observerConfig);    
        timerMouseLeave = setTimeout(function(){
            avInfo = {};
            avInfoID = "";
            savMenuMouseLeave();
            removeLoading();
            clearTimeout(timerGetInfo);
        },50)

    }
    // 鼠标进入菜单
    function savMenuMouseEnter(e){  
        observer.disconnect();  
        clearTimeout(timerMouseLeave);
    }
    // 鼠标离开菜单
    function savMenuMouseLeave(e){
        timerMouseLeaveMenu = setTimeout(function(){

            var odiv = document.querySelector(".sav-menu");
            if(odiv){
                if(setting.dontClearMenu){
                    console.log("移除");
                } else {
                    // odiv.parentNode.removeChild(odiv);
                    odiv.classList.add("savCloseAnim")
                    setTimeout(function(){
                        if(odiv){
                            odiv.parentNode.removeChild(odiv);
                        }
                    },100)
                }
                Imgscall = 1.0;
                divTarget = null;
            }
            avInfo = {};
            avInfoID = "";
            clearTimeout(timerGetInfo);
            // clearInterval(timerImgLoading); // 重置位置的定时器
            observer.observe(observerTarget, observerConfig);     
        },10);
    }

    // 鼠标滑过 显示菜单
    function avmouseenter(e){
        if(document.querySelector(".sav-menu")){
            return; // 防止出现菜单后重复触发, 尤其是margin上移两像素后
        } 
        var wuma = e.target.dataset.av_wuma;
        var avid = e.target.dataset.av;

        if(e.target.classList.contains("infoFirst")){
            // e.target.classList.remove("infoFirst");
            // e.target.classList.add("infoExistent");
            let allDoms = document.querySelectorAll(`savdiv.infoFirst[data-av='${avid}']`)
            for( let i=0; i<allDoms.length; i++){
                allDoms[i].classList.remove("infoFirst");
                allDoms[i].classList.add("infoExistent");
            }
        }

        var avdiv = document.querySelector(".sav-menu")
        if(avdiv){
            avdiv.parentNode.removeChild(avdiv)
        }
        var oPosition = e.target.getBoundingClientRect()
        var odiv = createPattenr(avid,wuma);
        // e.target.appendChild(odiv);

        // 信息加载时的动画
        if(!setting.closeLoadingAnimation && (setting.infoReload || !localInfo[avid])){
            addLoading(odiv)
        }

        var posRight =630 - (document.documentElement.clientWidth-divTarget.getBoundingClientRect().x);
        if(posRight<15){
            posRight = 15
        }
        odiv.style.transformOrigin = posRight + "px 5px";

        document.body.appendChild(odiv);
        odiv.style.left = oPosition.x + "px";
        odiv.style.top = oPosition.y + oPosition.height - 2 + "px";

        // return;  // 停止一切信息获取

        if(localInfo[avid]){
            avInfo = localInfo[avid];
            avInfoID = avid;
            timerGetInfo = setTimeout(() => {  
                if(wuma){
                    if(setting.infoReload){
                        getInfo_wuma(avid);
                    }else{
                        getInfo_local(avid)
                    }
                }else{
                    if(setting.infoReload){
                        getInfo(avid);
                    }else{
                        getInfo_local(avid)
                    }
                }
            }, 100);
        } else{
            timerGetInfo = setTimeout(() => {
                if(wuma){
                    getInfo_wuma(avid);
                }else{
                    getInfo(avid);
                }
            }, 300);
        }
        
        var otherInfo = document.createElement('avdivsInfo');
        otherInfo.innerHTML=addOtherInfo(avid);
        odiv.appendChild(otherInfo);
        
        e.target.parentNode.title = "";
        e.target.parentNode.parentNode.title = "";
        settingPostion();  //重置位置
        if(setting.emby){
            getEmby(avid);
        }else{
            getJellyfin(avid);
        }
    }

    // 点击事件, 图片放大缩小, debug中复制番号
    function savMenuClick(e){
        // 测试使用
        if(e.target.classList.contains("savCopyID")){
            GM_setClipboard(e.target.dataset.av)
        } else if(e.target.classList.contains("savCloseMenu")){
            var odiv = document.querySelector(".sav-menu");
            
            odiv.classList.add("savCloseAnim")
            setTimeout(function(){
                odiv.parentNode.removeChild(odiv);

            },100)

            Imgscall = 1.0;
            avInfo = {};
            avInfoID = "";
            divTarget = null;
            clearTimeout(timerGetInfo);
            return;
        } else if(e.target.classList.contains("savSetting")){
            savBoxEdit();
            return;
        } else if(e.target.classList.contains("jellyfin")){
            if(e.target.classList.contains("noJellyfin")){
                console.log(e.target.dataset.avid);
                GM_setClipboard(e.target.dataset.avid);
            }
            // console.log(e.target.dataset.url);
            if(debug)console.log(e.target.dataset.url);
            GM_openInTab(e.target.dataset.url,{active: true, insert: true,setParent:true});
            return;
        } else if(e.target.classList.contains("savsehuatang")){
            // 防止多次点击导致重复发送请求
            e.target.classList.remove("savsehuatang");
            sehuatang(e.target.dataset.avid);
            return;
        }  else if(e.target.classList.contains("savVideoClose")){
            let videoDiv = document.querySelector("avdivVideo");
            if(videoDiv){
                videoDiv.classList.add("savCloseAnim2");
                setTimeout(()=>{
                    videoDiv.parentNode.removeChild(videoDiv);
                },200)
            }
            return;
        }


        // 图片放大缩小
        if(!setting.dontImgBig){
            // odiv.addEventListener("click",savMenuClick)
            if(e.target.tagName == "IMG"){
                if( e.target.classList.contains("imageBig")){    
                    e.target.classList.remove("imageBig");
                    Imgscall = 1.0
                    e.target.style = "";
                } else {
                    Imgscall = 1.3  // 重置大小
                    e.target.classList.add("imageBig");
                }
            } else {
                var oImg = document.querySelector(".sav-menu").querySelector("img");
                if(oImg){
                    oImg.classList.remove("imageBig");
                    Imgscall = 1.0
                    oImg.style = "";
                }
            } 
        };
    }
    // 滚动图片放大缩小
    function savImgWheel(e){
        if(e.target.tagName == "IMG"){
            if(e.wheelDelta>0){
                e.target.classList.add("imageBig"); // 点击后可以恢复
                Imgscall += 0.15
                e.target.style.transform = "scale(" + Imgscall +")"
            } else if(e.wheelDelta<0){
                if(Imgscall>1){
                    Imgscall -= 0.15;
                    if(Imgscall<1){Imgscall=1}; // 偶尔会继续减小, 明明已经小于1还是会执行到这
                    e.target.style.transform = "scale(" + Imgscall +")";
                    if(Imgscall==1){ // 缩放到1就去掉class, 之前是缩放到1后继续滚动一次才会去掉class
                        e.target.classList.remove("imageBig");
                        e.target.style = "";
                    };
                }else{
                    e.target.classList.remove("imageBig");
                    e.target.style = "";
                }
            }
        }
        e.preventDefault();
        return false;
    }

    // 鼠标选中 划词搜索
    function selectSearch(e){
        if(e.button !=0) return;    // 排除非左键点击
        if(document.activeElement.tagName.toUpperCase() == "INPUT" || document.activeElement.tagName.toUpperCase() == "TEXTAREA") return;   // 排除inpu和textarea内的文本
        if(document.querySelector(".sav-menu")) return; //如果已经存在菜单, 退出
        
        var selectText = window.getSelection().toString().trim();
        if (selectText.length > setting.selectLength) return; //如果复制的文字过长,退出。避免复制网址时自己弹出。
        selectText = selectText.replace(/[^a-zA-Z0-9-]/g,"");  //去掉一些莫名其妙的符号。网友分享的番号总是各种各样
        var avid = selectText.match(/[a-z|A-Z]{2,8}-?\d{2,6}/i);
        if(!avid) return;  //如果没搜索到,退出
        
        observer.disconnect();  // 关闭dom变动的监听

        avid = formatAVID(avid[0]);
        var odiv = createPattenr(avid);
        
        var divClientRect = odiv.getBoundingClientRect()
        var divWidth = divClientRect.right - divClientRect.left;
        odiv.style.left = e.pageX - divWidth/2 + "px";
        odiv.style.top = e.pageY + "px";
        odiv.style.position = "absolute";
        
        if(localInfo[avid]){
            avInfo = {};
            avInfo = localInfo[avid];
            avInfoID = avid;
            timerGetInfo = setTimeout(() => {
                if(setting.infoReload){
                    getInfo(avid);
                }else{
                    getInfo_local(avid)
                }
            }, 500);
        } else{
            timerGetInfo = setTimeout(() => {
                getInfo(avid,true);
            }, 300);
        }
        
        document.body.appendChild(odiv);
    }

    // 调整距离底部的距离,以防越界
    function settingPostion(image){
        if(debug){console.log("正在重置位置");};
        // if(image && image.complete){
        //     if(debug){console.log("图片加载情况: " + image.complete)};
        //     clearInterval(timerImgLoading);
        // }
        var odiv = document.querySelector(".sav-menu");
        if(!odiv)  return;
        var oClient = odiv.getBoundingClientRect()
        var oTop = oClient.top; // 距离顶部举例
        var oHeight = oClient.height;   //自身高度
        // var oWidth = oClient.Width;  // 自身宽度
        var winHeight = document.documentElement.clientHeight;  //可视窗口高度
        var winWidth = document.documentElement.clientWidth;    //可视窗口宽度
        let loadingContainerHeight = document.querySelector(".savLoadingContainer")?8:0;
        if(oTop + oHeight - loadingContainerHeight > winHeight){ // 越出了屏幕底边
            odiv.style.position = "fixed";
            odiv.style.top = winHeight-oHeight + 2*loadingContainerHeight - 16 +"px";
            var posBottom =oHeight - (document.documentElement.clientHeight-divTarget.getBoundingClientRect().y) +30;
            if(posBottom<5){
                posBottom = 5
            }
            odiv.style.transformOrigin = odiv.style.transformOrigin.replace(/\s.+px/,` ${posBottom}px`)
        }
        if(oClient.x<0){   //左边
            odiv.style.position = "fixed";
            odiv.style.left = 0;
        }else if(winWidth-oClient.x<600){  // 越出了屏幕右边
            odiv.style.position = "fixed";
            odiv.style.right = "4px";
            odiv.style.left = "";
        }
    }

    // 获取番号相关的信息, 添加图片,调用其他函数添加信息
    function getInfo(avID,oFirstBrowse){
        if(debug){console.log("从javbus获取信息中 getInfo: " + avID);}
        if(setting.getInfoFromJavDB){
            console.log("直接从javdb获取信息")
            getInfo_wuma_javdb1(avID);
            return;
        }
        console.log("javbus获取信息");
        if(setting.dontGetInfo){
            getInfo_end_error(`<avdiv>已经设置为禁止获取番号信息</avdiv>`,avID);
            return;
        };

        GM_xmlhttpRequest({
            method: 'get',
            url: javbusLink + avID,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            timeout: 3000,  // 应对2023-12月 出现的javbus 无法访问的问题
            onload: function (data) {
                // noReferrer();   // 针对防盗链问题
                javbusloading();
                if(data.status==403 || data.status==522){
                    if(setting.getInfoFailToJavDB??true){
                        getInfo_wuma_javdb1(avID);
                    } else{
                        getInfo_end(avID,data);
                    }
                    return;
                }else if(data.status==404){
                    // javbus 对于番号中002简写成02的会识别错误, 只认准确的番号。 一些网友分享的番号会简写, 此处做个判断。不能全部补全, 因为以前的番号确实有两位数字的, 补全后javbus不识别。
                    if( avID.length - avID.indexOf("-") ==3){
                        // 将错误番号存储到本地
                        localInfo[avID] = {};   
                        localInfo[avID].title = "番号可能存在问题";
                        localInfo[avID].noInfo = true;
                        GM_setValue("avInfo2",localInfo);
                        setTimeout(() => {
                            var avdivinfo = document.querySelector("avdivsinfo");
                            avdivinfo.parentNode.removeChild(avdivinfo);
                        }, 300);
                        // 重新获取信息
                        getInfo(avID.replace("-","-0"),true);
                        let relatedPage = document.querySelector(".relatedPage a");
                        if(relatedPage){
                            relatedPage.href = relatedPage.href.replace("-","-0");
                        }
                    } else if(avID.match(oRegExp_SuRen) || (setting.getInfoFailToJavDB??true) ){
                        getInfo_wuma_javdb1(avID);
                    } else {
                        getInfo_end(avID,data);
                    }
                    return;
                }

                var parser=new DOMParser();
                var htmlDoc=parser.parseFromString(data.responseText, "text/html");

                // 标题
                avInfo.title = htmlDoc.title.replace(avID,"").replace(" - JavBus","");
                // 获取演员名字
                var starNameList = htmlDoc.querySelectorAll(".star-name");
                var starName = [];
                for(let i=0;i<starNameList.length;i++){
                    starName.push(starNameList[i].querySelector("a").innerHTML);
                }
                avInfo.starName = starName;
                // 获取标签
                var tagList = htmlDoc.querySelectorAll("input[name='gr_sel']");
                var tags = "";
                for(let i=0;i<tagList.length;i++){
                    tags += tagList[i].nextSibling.innerHTML + " ";
                }
                avInfo.tags = tags;
                // 其他: 发行日期和系列  此处的“发行日期”必须是繁体, 因为是匹配的具体的字。
                var other = htmlDoc.querySelectorAll(".header");
                for(let i=0;i<other.length;i++){
                    if(other[i].innerHTML=="發行日期:"){
                        avInfo.date = other[i].parentNode.innerText.replace("發行日期","日期");
                    }
                    if(other[i].innerHTML=="系列:"){
                        avInfo.series = other[i].parentNode.innerText;
                        avInfo.seriesLink = other[i].nextElementSibling.href;
                    }
                }
                // 封面
                var image = htmlDoc.querySelector(".bigImage img");
                if(image){ 
                    changeRelatedPage(javbusLink + avID, "JavBus 页面");

                    var imgSrc = image.src;
                    if(imgSrc.search("pics.dmm.co.jp")<0){
                        // var imgNum = imgSrc.search(/(imgs|pics)/i);
                        imgSrc = imgSrc.slice(imgSrc.search(/(imgs|pics)/i));
                        image.src = javbusLink + imgSrc;
                    }
                    // console.log(image.src)
                    image.removeAttribute("title");     //鼠标经过的时候会触发离开事件,所以删掉
                }
                // console.log(image);
                // 链接
                avInfo.link = javbusLink + avID;

                // 视频链接部分
                let avIDsplit = avID.toLowerCase().split("-");
                if(debug){
                    console.log(avIDsplit)
                    console.log(cid[avIDsplit[0]])
                }
                if(!setting.dontGetVideo && !cid[avIDsplit[0]]){
                    let videoURL = htmlDoc.querySelector("#sample-waterfall a")?.href;
                    if(videoURL?.includes("dmm.co.jp")){
                        videoURL = videoURL.match(/(?<=.*video\/).*?(?=\/)/)
                        // 1bkynb00008
                        let corp_finish = videoURL[0].slice(0,-avIDsplit[1].length);
                        corp_finish = corp_finish.replace("00","");
                        if(corp_finish.length != avIDsplit[0].length){
                            // 只作用2015年以后的番号, 防止污染cid
                            if(avInfo.date && new Date(avInfo.date)>new Date("1/1/2015")){
                                let setting2 = GM_getValue("_setting2");
                                setting2.cid_user = setting2.cid_user ?? {};
                                setting2.cid_user[avIDsplit[0]] = [corp_finish,avID];
                                //       cid_user[bkynb]        = 1bkynb00
                                if(debug) console.log("更新用户规则 cid: ",corp_finish,avID );
                                GM_setValue("_setting2",setting2);
                            }
                        }
                    }
                }

                // 如果不是从javbus访问, 则调用dmm的图片
                // if (window.location.href.indexOf(javbusLink)>-1){
                //     if(debug)console.log("从javbus访问, 默认用javbus的图片");
                // }else{
                //     image.src = getPic_dmm(avID)
                // }
                
                getInfo_end(avID,data,image);
            },
            // 2023-12-20左右, javbus无法访问, 临时使用javdb
            ontimeout(data){
                if(setting.getInfoFailToJavDB??true){
                    getInfo_wuma_javdb1(avID);
                } else{
                    getInfo_end(avID,data);
                }
            }
        });
    }

    // 通过 dmm 获取图片
    function getPic_dmm(avID){
        // https://pics.dmm.co.jp/mono/movie/adult/1start036/1start036pl.jpg 
        let imgSrc_dmm = "https://pics.dmm.co.jp/mono/movie/adult/"
        let cid_user = GM_getValue("_setting2").cid_user ?? {};

        // 提取番号中的英文和数字
        const movieIdSplit = avID.toLowerCase().split("-");
        const corp = movieIdSplit[0];  // 番号中的英文
        const idNum = movieIdSplit[1];    // 返回中的数字
        let urlPart = "";
        // 是否需要特殊处理
        if (cid[corp]) {
            if(debug) console.log("图片加载: 在默认URL规则中: ",cid[corp])
            // if (cid[corp].length>1){
                // console.log("多个")
                // 此处只会处理第2个及之后的, 第一个依旧会判断是否含0, 请求两遍
                // for(let i=0;i<=cid_user.length;i++){
                //     urlPart = cid[corp][i] + idNum;
                //     urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.p576}.mp4`);
                //     urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.old720}.mp4`);
                // }
            // }
            urlPart = cid[corp][0] + idNum;

        } else if (cid_user[corp]){
            if(debug) console.log("图片加载: 在用户学习URL规则中: ",cid_user[corp]);
            urlPart = cid_user[corp][0].replace("00","") + idNum;
            // corp = cid_user[corp][0]
        } else {
            if(debug) console.log("图片加载: URL规则,默认");
            urlPart = corp + idNum;
        }
        imgSrc_dmm +=  urlPart + "/" + urlPart + "pl.jpg"

        return imgSrc_dmm
    }

    // 无码信息获取
    function getInfo_wuma(avID){
        if(debug){console.log("从网络获取信息中 getInfo_wuma: " + avID);}
        if(avID.match(/fc2/i)){
            if(setting.dontGetInfoFc2){
                getInfo_end_error(`<avdiv>已经设置为禁止获取 FC2 信息</avdiv>`,avID);
                return
            };
            getInfo_fc2(avID);
            // getInfo_fc2_market(avID);
        }else{
            getInfo_wuma_javdb1(avID);
        }
    }
    // 无码信息获取 - fc2
    function getInfo_fc2_market(avID){
        if(debug){console.log("从fc2hub获取信息中 getInfo_fc2_market: " + avID);}
        
        let IDnum = avID.slice(4)
        let link = `https://adult.contents.fc2.com/article/${IDnum}/`
        console.log(link)

        GM_xmlhttpRequest({
            method: 'get',
            // https://contents.fc2.com/article/3107706/
            url: link,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {
                console.log(data);
                let parser=new DOMParser();
                let htmlDoc=parser.parseFromString(data.responseText, "text/html");
                console.log(htmlDoc)
                let info = htmlDoc.querySelector(".items_article_headerInfo");

                // 标题
                let title = htmlDoc.title.replace("PPV-","").replace(avID,"").trim();
                // 番号的链接
                // let link = link;
                // 获取名字
                // 获取标签
                let tags = info.querySelector(".items_article_TagArea div").innerText
                // 获取日期
                let d = info.querySelector(".items_article_Releasedate").innerText.slice(7).replaceAll("/","-");
                
                // 获取图片
                let img = htmlDoc.querySelector(".items_article_SampleImages a").href;
                // 获取视频
                let video = htmlDoc.querySelector(".fc2-video-container video");
                console.log(video);
                if(video){
                    console.log(video);
                    var videoURL = video.src;
                    var img2 = video.poster;
                }

                console.log(link)
                console.log(title)
                console.log(tags)
                console.log(d)
                console.log(img)
                console.log(img2)
                console.log(videoURL)
            }
        });
    }
    function getInfo_fc2(avID){
        if(debug){console.log("从fc2hub获取信息中 getInfo_fc2: " + avID);}

        let url = 'https://fc2hub.com/search?kw=' + avID;
        GM_xmlhttpRequest({
            method: 'get',
            url: url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {
                console.log(data);
                if(data.status == 500){
                    data.status = 404
                    getInfo_end(avID,data,false)
                    return
                }
                if(data.finalUrl && data.finalUrl != url){
                    getInfo_fc2_openPage(avID,data.finalUrl)
                } else {
                    data.status = 404
                    getInfo_end(avID,data,false)
                    return
                }
            }
        });
    }
    function getInfo_fc2_openPage(avID,link){
        if(debug){console.log("从fc2hub获取信息中 getInfo_fc2_openPage: " + link);}
        fc2loading();
        GM_xmlhttpRequest({
            method: 'get',
            url: link,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {
                let parser=new DOMParser();
                let htmlDoc=parser.parseFromString(data.responseText, "text/html");

                var iframe = htmlDoc.querySelector("iframe.lazy")
                // 视频
                avInfo.fc2Video = iframe.dataset.src
                // return

                 // 番号的链接
                avInfo.link = link.match(/http.*id\d{5,7}/)[0];
                // 标题
                avInfo.title = htmlDoc.querySelector(".fc2-title");
                if(!avInfo.title){
                    data.status = 404
                    getInfo_end(avID,data,false)
                    return
                }
                avInfo.title = avInfo.title.innerText
                //标签
                avInfo.tags = htmlDoc.body.querySelector("meta[name~='keywords']")?.content.replaceAll(", "," ");
                // 日期
                avInfo.date = "日期: " + htmlDoc.body.querySelector("meta[property~='videos:published_time']")?.content.slice(0,10);
                // 图片
                let imgSrc;
                let img = htmlDoc.querySelector(".col-xl-4 .card-body .row a")
                if(img){
                    imgSrc = img.href;
                    avInfo.imgSrc2 = htmlDoc.querySelector(".des img")?.src;
                }
                // 加载缩略图
                if(setting.fc2Thumbnail){
                    imgSrc = imgSrc.replace("https://","https://contents-thumbnail2.fc2.com/w500/");
                }
                let image = document.createElement("img");
                image.src = imgSrc;
                
                changeRelatedPage(link, "fc2hub 页面");

                getInfo_end(avID,data,image);
            }
        });
    }
    // 从javdb获取信息 - 1.获取链接
    function getInfo_wuma_javdb1(avID){
        if(debug){console.log("从javdb获取信息中 getInfo_wuma_javdb1: " + avID);}

        if(setting.dontGetInfoWuma){
            getInfo_end_error(`<avdiv>已经设置为禁止从 JavDB 获取信息</avdiv>`,avID);
            return
        };

        // 从javdb加一些限制, 防止ip被禁用。 目前是5分钟内限制10个。
        if(setting.closeJavdbLimit){
            console.log("已经关闭对javdb的访问限制, 有封IP的风险");
        }else{
            var oTime = new Date().getTime();
            if(javdbTime.length<10){
                javdbTime.push(oTime);
                setting2.javdbTime = javdbTime;
                GM_setValue("_setting2",setting2);
            }else{
                javdbTime = GM_getValue("_setting2").javdbTime;
                if(oTime-javdbTime[0]>300000){
                    if(debug){console.log("javdb时间保护机制: 正在更新");};
                    javdbTime.shift();
                    javdbTime.push(oTime)
                    setting2.javdbTime = javdbTime;
                    GM_setValue("_setting2",setting2);
                } else {
                    if(debug){console.log("触发保护机制, 停止获取信息")};
                    getInfo_end_error(`<avdiv>提示: <br>由于短时间内过多访问 JavDB, 触发了脚本的自动保护机制 <br>目前已经限制脚本从 JavDB 获取信息, 稍后会自动恢复<br>该消息仅供参考,依旧有被封IP的风险</avdiv>`,avID);
                    return;
                }
            }
        }

        GM_xmlhttpRequest({
            method: 'get',
            url: javDBLink + 'search?q=' + avID ,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {
                noReferrer();   // 针对防盗链问题

                var parser=new DOMParser();
                var htmlDoc=parser.parseFromString(data.responseText, "text/html");
                // console.log("data.status:");
                var searchResult = htmlDoc.querySelectorAll(".movie-list .item")

                var REavID = new RegExp(avID.replace(/-|_/,"[_-]"),"i")

                // 没有搜索结果
                if(!searchResult.length){
                    // console.log(htmlDoc);
                    //  测试了一上午, ip被禁止访问了。。。
                    if(!htmlDoc.querySelector("title")){
                        console.log("ip被ban")
                        
                        if(htmlDoc.body.innerText.indexOf("copyright")>-1){
                            getInfo_end_error(`疑似使用的是日本代理,导致javdb拒绝了您的访问。 网站返回信息:</br></br> ${htmlDoc.querySelector("body").innerHTML}`,avID);
                        }else{
                            // setting.dontGetInfoWuma = true;
                            GM_setValue("_setting",setting);
                            getInfo_end_error(`疑似IP地址被封。 网站返回信息:</br></br> ${htmlDoc.querySelector("body").innerHTML}`,avID);
                        }
                        return;
                    }
                    data.status = 404
                    getInfo_end(avID,data,false)
                    return
                }
                // 有搜索结果, 但是没有该番号
                var fuzzyID = false;
                if(searchResult[0].innerText.search(REavID)<0){
                    fuzzyID = fuzzyMatch(avID,searchResult[0].innerText);
                    if(!fuzzyID){
                        data.status = 404
                        getInfo_end(avID,data,false)
                        return
                    }
                }

                var avLink = searchResult[0].querySelector("a").href;
                avLink = javDBLink.slice(0,-1) + avLink.slice(avLink.search(/\/v\//i));

                changeRelatedPage(avLink, "JavDB 页面")

                getInfo_wuma_javdb2(avID,avLink)
            }
        });
    }
    // 从javdb获取信息 - 2.具体内容
    function getInfo_wuma_javdb2(avID,link){
        if(debug){console.log("从javdb获取信息中 getInfo_wuma_javdb2: " + avID);}
        javdbloading()
        GM_xmlhttpRequest({
            method: 'get',
            url: link,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {
                noReferrer();   // 针对防盗链问题

                var parser=new DOMParser();
                var htmlDoc=parser.parseFromString(data.responseText, "text/html");
                // console.log("真实番号地址");
                // console.log(htmlDoc);
                
                // 标题
                avInfo.title = htmlDoc.title.replace(avID,"").slice(0,-16).trim();
                // 番号的链接
                avInfo.link = link;
                
                // 获取相关信息, 匹配的具体的字。
                var other = htmlDoc.querySelectorAll(".panel-block");
                for(let i=0;i<other.length;i++){
                    if(other[i].innerHTML.search("日期:")>-1){
                        avInfo.date = other[i].innerText.trim();
                    }
                    if(other[i].innerHTML.search("系列")>-1){
                        avInfo.series = other[i].innerText.trim();
                        avInfo.seriesLink = other[i].querySelector("a").href; 
                        avInfo.seriesLink = avInfo.seriesLink.replace(/https:\/\/.*?\//,setting.javDBLink??"https://javdb.com/");
                    }
                    if(other[i].innerHTML.search("類別")>-1){
                        avInfo.tags = other[i].lastElementChild.innerText.trim().replaceAll(", "," ");
                    }
                    if(other[i].innerHTML.search("演員")>-1){
                        var starNameList = other[i].querySelectorAll("a")
                        var starName = [];
                        for(let i=0;i<starNameList.length;i++){
                            if(starNameList[i].nextElementSibling.classList.contains("female")){
                                starName.push(starNameList[i].innerText);
                            }
                        }
                    }
                }
                avInfo.starName = starName;

                // 封面
                var image = htmlDoc.querySelector(".video-meta-panel img");
                image.removeAttribute("title");     //鼠标经过的时候会触发离开事件,所以删掉

                // 预览视频相关
                if(!setting.dontGetVideo){
                    let videoURL = htmlDoc.querySelector("video source")?.src;
                    if(videoURL?.includes("mp4")){
                        avInfo.video = videoURL;
                        javdbVideoTest(videoURL,avID);
                    }
                }
                
                getInfo_end(avID,data,image);
            }
        });
    }
    // javdb网页中自带的视频链接判断是否有效
    async function javdbVideoTest(link,avID){
        await GetMess(link)
            .then((res) =>{
                if(res.status == 200){
                    if(debug)console.log("javdb中的链接正常")
                    return link;
                }else{
                    if(debug)console.error("javdb中的链接有误 X")
                    let videoButton = document.querySelector(".avimg-preview-button");
                    if(videoButton){
                        videoButton.parentNode.removeChild(videoButton);
                        localInfo[avID].video = false;
                        GM_setValue("avInfo2",localInfo);
                    }
                    return false
                }
            })
    }

    // 将获取到的信息进行展示和保存
    function getInfo_end(avID,data,image){
        // removeLoading()
        if(debug){console.log("从网络获取信息结束 end: " + avID, avInfo);}
        let errorDiv = document.querySelector("avdiverror");
        if(errorDiv){
            errorDiv.parentNode.removeChild(errorDiv);
        }

        // 标题翻译
        if(data.status==403){
            avInfo.title = "403错误, javBus 拒绝了您的访问!";
        }else if(data.status==404){
                getInfo_end_error(`脚本没有匹配到 ${avID} 相关页面, 请使用上方搜索进行查找`,avID)
                avInfo.noInfo = true;

                if(divTarget){
                    divTarget.classList.remove("infoExistent");
                    divTarget.classList.add("infoNonExistent");
                }
                
        }else if(setting.dontTransTitle){
            if(debug){console.log("禁止翻译标题 ✖  ✖  ✖ : ", avInfo.title);}
        }else if(!avInfo.titleTrans || avInfo.titleTrans.search("没有找到")>-1){   // 如果本地存在翻译, 就不再重复翻译
            // 删除标题之后的演员名字
            let title = avInfo.title;
            let starName = avInfo.starName;
            if(starName && starName.length ==1 && title.indexOf(starName[0])>-1){
                let oLength = title.length-title.indexOf(starName[0]);
                if( oLength == starName[0].length){
                    title = title.slice(0,(oLength+1)*-1)
                }
            }
            // 删除标题中的番号(这是第二次删除, getInfo中还有一次)
            title = title.replace(avID,"");
            // 删除奇奇怪怪的标点
            let biaodian = /[\※\☆\★\♥️\●\▲\♡]|[\s\……\——\-\】\』\}\、\|\；\‘\’\：\“\”\》\，\。\、\_\]\;\'\'\:\"\"\,\.\/\～]*$/g
            title = title.replace(biaodian,"")
            
            avInfo.title = title;

            if(setting.baiduAppid && setting.baiduKey){
                baiduTrans(avID,title);
            } else{
                googleTrans(avID,title);
            }
        }

        if(avInfo.tags && !setting.dontTransTags){
            avInfo.tags= translateTag(avInfo.tags)
        }
        
        localInfo[avID] = {};   // 重置,防止在一个页面重复划过番号导致系列、发行日期等重复显示。
        if(avInfo.noInfo){
            localInfo[avID].noInfo = true;
        }else{
            localInfo[avID].title = avInfo.title
            localInfo[avID].titleTrans = avInfo.titleTrans;
            localInfo[avID].starName = avInfo.starName;
            
            localInfo[avID].date = avInfo.date?.replace(/\n\s*/g," ")
            localInfo[avID].series = avInfo.series?.replace(/\n\s*/g," ").replace("系列: ","");
            localInfo[avID].seriesLink = avInfo.seriesLink;
            localInfo[avID].tags = avInfo.tags
            if(image){
                localInfo[avID].image = image.src;
            }
            localInfo[avID].link = avInfo.link
            localInfo[avID].visited = localInfo[avID].visited? localInfo[avID].visited+1:1;
            localInfo[avID].tips = avInfo.tips;
            localInfo[avID].correctID = avInfo.correctID;
            localInfo[avID].video = avInfo.video;
            localInfo[avID].fc2Video = avInfo.fc2Video;
        }
        localInfo[avID].getInfo_Time = new Date().getTime();

        if(debug) console.log("保存相关信息: localInfo[avID] : ", localInfo[avID]);
        GM_setValue("avInfo2",localInfo);

        if(!document.querySelector(".sav-menu")){return};
        // 判断是否重复加载图片
        // if(document.querySelector(".avimg")){return};

        // console.log("获取到的所有信息: ");
        // console.log(avInfo);
        // console.log("------------------");
        var otherInfo = document.querySelector("avdivsInfo");
        if(!otherInfo){
            otherInfo = document.createElement('avdivsInfo');
        }
        otherInfo.innerHTML = addOtherInfo(avID);

        if(image){
            let imageDiv = document.createElement('avdivimg');
            image.classList.add("avimg");
            // image.setAttribute("referrerpolicy","same-origin");
            imageDiv.appendChild(image)
            otherInfo.appendChild(imageDiv);
            image.onload = function(){
                if(debug)console.log("getInfo_end: 图片加载完成");
                removeLoading();
                settingPostion();
            }
            image.onerror = ()=>{
                if(debug)console.log("javbus图片加载失败");
                if(avInfo.imgSrc2){
                    image.src = avInfo.imgSrc2;
                    localInfo[avID].image = avInfo.imgSrc2;
                    GM_setValue("avInfo2",localInfo);
                }else{

                    // image.classList.add('savImgError');
                    // image.src = imgErrorSVG;
                    image.src = getPic_dmm(avID);

                    localInfo[avID].image = image.src;
                    GM_setValue("avInfo2",localInfo);
                }
            }
            settingPostion()
        }else{
            removeLoading();
        }
        document.querySelector(".sav-menu").appendChild(otherInfo);

        if(localInfo[avID].fc2Video){
            getVideoURLFC2();
        }else{
            getVideo(avID);
        }
    }
    function getInfo_end_error(errorText,avID){
        if(debug){console.log("getInfo_end_error : ", errorText);}
        let errorInfo = document.createElement('avdivError');
        errorInfo.innerHTML = errorText ;
        document.querySelector(".sav-menu").appendChild(errorInfo);
        removeLoading();
        // 如果获取错误, 会不进入end函数; 错误会导致重新获取, 获取不到会继续保持错误, 然后不断循环
        // 存在一种情况一个新浏览的番号, 没有获取到任何信息, 直接来到这里, 会导致localInfo[avID]是 undefined
        if(localInfo[avID]){
            localInfo[avID].getInfo_Time = new Date().getTime();
        }
        GM_setValue("avInfo2",localInfo);
    }

    // 从本地加载信息
    function getInfo_local(avID){
        if(debug){console.log("从本地加载信息 local: " ,avID, localInfo[avID]);}
        if(!document.querySelector(".sav-menu")){return};
        // 判断是否重复加载图片
        if(document.querySelector(".avimg")){return};
        
        noReferrer();

        if(localInfo[avID].noInfo){
            getInfo_end_error(`脚本没有匹配到 ${avID} 相关页面, 请使用上方搜索进行查找`,avID)
            localInfo[avID].visited = localInfo[avID].visited? localInfo[avID].visited+1:1;
            GM_setValue("avInfo2",localInfo);
            
            reloadGetInfo(avID);
            
            return;
        }

        // 浏览过的番号,从本地加载链接。 信息只获取一次, 避免被网站拉黑IP
        if(localInfo[avID].link){
            if(localInfo[avID].link.indexOf(javDBLink)>-1){
                changeRelatedPage(localInfo[avID].link,"JavDB 页面",avID);
            }else if(localInfo[avID].link.indexOf(javbusLink)>-1){
                changeRelatedPage(localInfo[avID].link,"JavBus 页面",avID);
            }else if(localInfo[avID].link.indexOf("fc2hub")>-1){
                changeRelatedPage(localInfo[avID].link,"fc2Hub 页面",avID);
            }
        }

        let imgDiv = document.createElement("avdivimg");
        let image = document.createElement("img");
        if(localInfo[avID].image){
            // 2022-10-12 0.18.0 之后将只保存网址, 之前的版本是保存的img节点
            image.src = localInfo[avID].image.match(/https.*\.(jpg|jpeg|gif|png)/)[0];
            image.classList.add("avimg");
            image.setAttribute("referrerpolicy","same-origin");
            imgDiv.appendChild(image);
        } else {
            // image.innerHTML = "没有在本地找到图片信息"
            if(debug){console.log("由于本地没有图片, 重新从网络中获取信息: ", avID)}
            reloadGetInfo(avID)
            return;
        }

        var otherInfo = document.querySelector('avdivsInfo');
        otherInfo.appendChild(imgDiv);
        document.querySelector(".sav-menu").appendChild(otherInfo);

        localInfo[avID].visited = localInfo[avID].visited? localInfo[avID].visited+1:1;
        GM_setValue("avInfo2",localInfo);

        image.onload = function(){
            if(debug){console.log("getInfo_local: 图片加载完成")}
            settingPostion()
        }
        image.onerror = ()=>{
            image.classList.add('savImgError');
            image.src = imgErrorSVG;
            // 图片无法加载, 视为网站更换了网址, 重新获取
            reloadGetInfo(avID)
        }
        
        if(localInfo[avID].fc2Video){
            getVideoURLFC2();
        }else{
            getVideo(avID);
        }
    }

    function changeRelatedPage(link,txt,avID){
        // if(avInfo.correctID || localInfo[avID]?.correctID){
        //     return;
        // }
        let relatedPageButton = document.querySelector(".relatedPage");
        let relatedPage = relatedPageButton?.querySelector("a");
        if(relatedPage){
            relatedPage.href = link;
            relatedPage.innerHTML = txt;
        }
        relatedPageButton?.classList.remove("RPdisabled")
    }

    // 重新获取信息, 通常是在本地信息不完整的情况下会调用该函数。例:noInfo为true, 或者缺少图片
    function reloadGetInfo(avID){
        if(debug){console.log("重新获取信息 reloadGetInfo: ",avID)};
        avInfo = {};
        let nowTime = new Date().getTime();
        if(!localInfo[avID].getInfo_Time || nowTime-localInfo[avID].getInfo_Time > 43200000){
            if(avID.match(oRegExp)){
                getInfo(avID)
            }else if(avID.match(/fc2/i)){
                getInfo_fc2(avID)
            } else {
                getInfo_wuma_javdb1(avID)
            }
        }else{
            if(debug){console.log("重新获取信息 reloadGetInfo: 距离上次更新信息时间不足12小时, 将不会重新获取信息。")};
        }
    }
    // 在菜单中添加番号相关的信息(标题,演员等)
    function addOtherInfo(avID){
        if(localInfo[avID] && localInfo[avID].noInfo){return ""};   // 如果没有信息就直接返回
        var actors = ""
        var str = "";
        if(avInfo.titleTrans){
            str += "<avdiv class='sav-title' id='searchAVMenuTitle'>标题: " + avInfo.titleTrans + "</avdiv>"
        }else if(avInfo.title){
            str += "<avdiv class='sav-title' id='searchAVMenuTitle'>标题: " + avInfo.title + "</avdiv>"
        }
        if(avInfo.starName && avInfo.starName.length>0){
            // let actorsSearchURL = "https://www.javbus.com/searchstar/%s"
            let actorsSearchURL = setting.actorsSearchURL?setting.actorsSearchURL:"https://www.javbus.com/searchstar/%s"; 
            for(var i=0;i<avInfo.starName.length;i++){
                actors += "<a class='sav-actors-"+ i + "' target='_blank' title='' href='" + actorsSearchURL.replace("%s",avInfo.starName[i]) + "'>"+ avInfo.starName[i] + "</a>, ";
                getJellyfin_Actor(avInfo.starName[i],i)
            }
            actors = actors.slice(0,actors.length-2);
            str += "<avdiv class='sav-actors'>演员: " + actors + "</avdiv>"
        }
        if(avInfo.tags && avInfo.tags.length>0){
            str += "<avdiv class='avInfoTags'>标签: " + avInfo.tags + "</avdiv>"
        }
        if(avInfo.seriesLink){
            str += `<avdiv class='avInfoSeries'>系列: <a target='_blank' href='${avInfo.seriesLink}' >${localInfo[avID].series}</a></avdiv>`
        }else if(avInfo.series){
            // 2022-10-15 0.18.2  存储的series中, 不再含有汉字 “系列: ”, 此处的replace是与之前的版本兼容
            str += "<avdiv class='avInfoSeries'>系列: " + avInfo.series.replace("系列: ","") + "</avdiv>"
        }
        if(avInfo.date){
            str += "<avdiv>" + avInfo.date + "</avdiv>"
        }
        if(avInfo.tips){
            str += "<avdiv>提示: " + avInfo.tips + "</avdiv>"
        }
        str += ""
        return str;
    }

    // 添加信息加载时的动画
    function addLoading(odiv){
        var savLoading = document.createElement('avdiv');
        savLoading.classList.add("savLoadingContainer");
        var savhr = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" version="1.1">' +
                        '<linearGradient xmlns="http://www.w3.org/2000/svg" id="grad4" x1="0%" y1="50%" x2="100%" y2="50%">' +
                            '<stop class="stop1" offset="30%" />' +
                            '<stop class="stop2" offset="50%" />' +
                            '<stop class="stop3" offset="70%" />' +
                        '</linearGradient>' +
                        '<rect xmlns="http://www.w3.org/2000/svg" width="600" height="5" style="fill:url(#grad4)"/> ' +
                    '</svg>'
        savLoading.innerHTML='<avdiv class="savLoading">' + savhr +savhr + '</avdiv>';
        odiv.appendChild(savLoading);
    }
    function javbusloading(){
        var stop2 = document.querySelector(".stop2");
        if(stop2){
            stop2.classList.toggle("javbusloading")
        }
    }
    function javdbloading(){
        var stop2 = document.querySelector(".stop2");
        if(stop2){
            stop2.classList.remove("javbusloading")
            stop2.classList.toggle("javdbloading")
        }
    }
    function fc2loading(){
        var stop2 = document.querySelector(".stop2");
        if(stop2){
            stop2.classList.toggle("fc2loading")
        }
    }
    // 移除信息加载时的动画
    function removeLoading(){
        // return;
        var loading = document.querySelector(".savLoadingContainer");
        if(loading){
            loading.style.height = "0px";
            loading.style.marginTop = "0px";
            setTimeout(()=>{
                loading.parentNode?.removeChild(loading);
            },200)
        }
    }

    // 格式化番号, 添加中间的横杠
    function formatAVID(otext){
        otext = otext.replace(/\s+|-c|_c|-4k|carib[-_]|1pondo[-_]|-1pon|-paco|-carib|hd_/ig,"");
        if(otext.match((/^[a-z|A-Z]{2,8}\d{2,5}$/i))){
            var oindex = otext.search(/\d/);
            if(oindex>0){
                otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
            }
        }
        return otext.toUpperCase();
    }
    // 格式化无码番号
    function formatWuma(otext){
        otext = otext.replace(/\s+|carib[-_]|1pondo[-_]|-1pon|-paco|-carib|hd_/ig,"");
        // 不再分 "FC2PPV-" 和 "FC2-" 统一为 "FC2-"
        if(otext.match(/fc2/i)){
            var oindex = otext.search(/(?<!fc)\d/i);
            // if(otext.match(/ppv/i)){
            //     otext = "FC2PPV-" + otext.slice(oindex)
            // }else{
                otext = "FC2-" + otext.slice(oindex)
            // }
            return otext.toUpperCase();
        }
        // heyzo
        if(otext.match(/heyzo/i)){  
            var oindex = otext.search(/\d/i);
            return "HEYZO-" + otext.slice(oindex)
        }
        //  东京热 n1234  返回小写
        if(otext.match(/(?:k|n)\d{4}/i)){
            return otext.toLowerCase();
        }

        // 返回大写  MKD-S\d{2,3}(?!\w|-)|(?:SHINKI|KITAIKE)[-\s]?\d{3}(?!\w|-)|JPNXXX[-\s]?\d{5}(?!\w|-)|xxx-av[-\s]\d{4,5}(?!\w|-)|(?<!\w)crazyasia\d{5}(?!\w|-)|(?<!\w)PEWORLD\d{5}(?!\w|-)|(?<!\w)MKBD-S\d{2,3}|(?<!\w)\d{6}[-_]?_01(?=-10mu)/gi;
        if(otext.match(/t28|t-|MKD-S|SHINKI|KITAIKE|JPNXXX|xxx-av|crazyasia|PEWORLD|MKBD-S/i)){
            return otext.toUpperCase();
        }
        // heydouga
        if(otext.match(/HEYDOUGA/i)){
            return "heydouga-" + otext.slice(otext.search(/\d/i))
        }
        
        return otext;
    }

    // 检查番号是否需要排除
    function IDcheck(otext){
        var oOnlyText = otext.replace(/[^a-zA-Z]/gi,"");    // 番号中的英文
        var oOnlyNum = otext.replace(/[^0-9]/ig,"");    // 番号中的数字
        // if(debug) console.table([{name:"完整番号",value:otext},{name:"英文",value:oOnlyText},{name:"数字",value:oOnlyNum},{name:"是否有横杠",value:oNoHyphen},{name:"是否排除",value:oExclude},{name:"占位",value:"占位"}]);

        // 排除 特别的番号
        if(otext.match(oRegExp_Exclude_ID)){
            if(debug) {console.log(searchTimes-avIDTimes,` 特别的番号,略过:  ${otext} `);}
            return true;
        }
        // 包含关键词的情况下
        if(oOnlyText.match(oRegExp_Exclude_en)){    
            if(debug) {console.log(searchTimes-avIDTimes,` 存在排除词 ${oOnlyText} ,略过 ${otext} `);}
            return true;
        }
        if(otext.match((/^[a-z|A-Z]{2,8}\s?\d{2,5}$/i))){
            // 没有横杠的情况下, 含有需要排除的数字
            if(oOnlyNum.match(oRegExp_Special_num)){
                if(debug) {console.log(searchTimes-avIDTimes,` 无横杠,且存在需要排除的数字 ${oOnlyNum},略过 ${otext} `)};
                return true;
            }
            // 没有横杠的情况下, 并且含有关键词
            if(oOnlyText.match(oRegExp_Special_en)){
                if(debug) {console.log(searchTimes-avIDTimes,` 无横杠,且有关键词 ${oOnlyText},略过 ${otext} `)} ;
                return true;
            }
        }
        return false;
    }
    // 检查番号是否需要排除 无码
    function IDcheckWuma(otext){
        if(otext.match(/\d{3}[a-zA-Z]{2,5}[-\s]?\d{3,4}/i)){
            if(otext.replace(/[^a-zA-Z]/gi,"").match(/^cm$/i)){
                return true;
            }
        }
        if(otext.match(oRegExp_Exclude_wuma)){
            if(debug) {console.log(searchTimes-avIDTimes,` 存在无码排除词,略过:  ${otext} `);}
            return true;
        }
        return false;
    }

    // 动态添加的元素, 检查所有父元素的class是否是排除项
    function checkParentClass(startDom){
        if(startDom.classList && startDom.classList.length && startDom.className.match(window.qxin.RE_Exclude_className)){
            if(debug)console.log("checkParentClass: 父元素存在相关class, 已排除: ",startDom.className);
            return true;
        }
        if(startDom.parentElement && "body" !== startDom.parentElement.nodeName){
            return checkParentClass(startDom.parentElement)
        } else {
            return false
        }
    }
    
    // 模糊匹配
    function fuzzyMatch(avID,title){
        if(debug){console.log("进入模糊匹配, 标题: ",title)}
        let onlyText = avID.replace(/[^a-zA-Z]/gi,"");    // 番号中的英文
        let onlyNum = avID.replace(/[^0-9]/ig,"");    // 番号中的数字

        // 数字都是错误的情况下, 直接返回
        if(title.indexOf(onlyNum)<0){
            console.log("数字错误");
            return false;
        }

        let searchIDLength = onlyText.length;
        // 紧邻两个字符错位的情况
        for(let i =1;i<onlyText.length-1; i++ ){
            let newID = onlyText.slice(0,i) + onlyText.charAt(i+1) + onlyText.charAt(i)
            if(i+2<onlyText.length){
                newID += onlyText.slice(i+2)
            }
            if(title.indexOf(newID)>-1){
                let wrongId1 = newID.slice(0,i) +"<b><u>" + newID.slice(i,i+2) +"</u></b>"+ newID.slice(i+2);
                let wrongId2 = avID.slice(0,i) +"<b><u>" + avID.slice(i,i+2) +"</u></b>"+ avID.slice(i+2);
                avInfo.tips = `这是 ${wrongId1}-${onlyNum} 的搜索结果, 如果继续搜索 ${wrongId2}, 请使用上方按钮`
                avInfo.correctID = `${newID}-${onlyNum}`
                return true
            }
        }
        // 单个字符错误的情况
        let titleID = title.match(/\w{2,6}(?=-)/);
        if(!titleID || searchIDLength<3 || titleID[0].length != searchIDLength){
            return
        }
        let title_ID = titleID[0];

        let rightNum = 1;   // 共同的次数
        let wrongNum ;
        if(title_ID.length == searchIDLength){
            // 第一个字符就错的情况, 直接返回
            if(onlyText.charAt(0)!=title_ID.charAt(0)){
                // console.log("第 1 个字符出现错误");
                return false
            }
            for(let i =1;i<searchIDLength; i++ ){
                if(onlyText.charAt(i)==title_ID.charAt(i)){
                    rightNum++;
                } else {
                    wrongNum = i
                    // console.log(`第 ${i} 个字符出现错误。`)
                }
            }
            if(rightNum==searchIDLength-1){
                let wrongId1 = title_ID.slice(0,wrongNum) +"<b><u>" + title_ID.charAt(wrongNum) +"</u></b>"+ title_ID.slice(wrongNum+1);
                let wrongId2 = avID.slice(0,wrongNum) +"<b><u>" + avID.charAt(wrongNum) +"</u></b>"+ avID.slice(wrongNum+1);
                avInfo.tips = `这是 ${wrongId1}-${onlyNum} 的搜索结果, 如果继续搜索 ${wrongId2}, 请使用上方按钮`
                avInfo.correctID = `${title_ID}-${onlyNum}`;
                return true
            }
        }
        return false;
    }

    // 谷歌翻译
    function googleTrans(avID,transText) {
        if(debug){console.log("谷歌翻译 googleTrans: ",transText);}

        var translate_url = "";
        var googleTransApi = "https://translate.google.com.hk/translate_a/single?client=gtx&dt=t&dj=1&sl=auto&tl=zh-CN&hl=zh-CN&q=";
        translate_url = googleTransApi + encodeURIComponent(transText);

        GM_xmlhttpRequest({
            method: "GET",
            url: translate_url,
            onload: function (r) {
                setTimeout(function () {
                    // 如果返回结果不对
                    console.log(r.responseText)
                    if(r.responseText.indexOf("sentences")<0){
                        console.log("谷歌翻译失败: ",r.responseText);
                        return;
                    } 
                    var data = JSON.parse(r.responseText);
                    var trans = "";
                    for (var i = 0; i < data.sentences.length; i++) {
                        var getransCont = data.sentences[i];
                        trans += getransCont.trans;
                    }
                    trans_end(avID,trans)
                }, 100);
            },
            onerror: function (e) {
                console.error(e);
                console.log("谷歌翻译失败");
            }
        });
    }
    // 百度翻译
    function baiduTrans(avID,transText) {
        if(debug){console.log("百度翻译 baiduTrans: ",transText);}
        var appid = setting.baiduAppid;
        var key = setting.baiduKey;
        var salt = (new Date).getTime();
        // var query = 'apple';
        // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
        // var from = 'jp';
        // var to = 'zh';
        var str1 = appid + transText + salt +key;
        var sign = MD5(str1);
        var translate_url = "http://api.fanyi.baidu.com/api/trans/vip/translate?q="+ encodeURIComponent(transText) +"&from=jp&to=zh&appid="+appid+"&salt="+salt+"&sign="+sign;
        GM_xmlhttpRequest({
            method: "GET",
            url: translate_url,
            onload: function (r) {
                console.log(r)
                if(r.responseText.indexOf("error_code")>0){
                    console.log("百度翻译失败:",r.responseText)
                    return;
                } 
                var data = JSON.parse(r.responseText);
                trans_end(avID,data.trans_result[0].dst)
            },
            onerror: function (e) {
                console.error(e);
                console.log("百度翻译失败");
            }
        });
    }
    // 翻译结束
    function trans_end(avID,result){
        if(debug){console.log("翻译结束 trans_end: ",result)}
        localInfo[avID].titleTrans = result;
        GM_setValue("avInfo2",localInfo);
        if(document.querySelector("#searchAVMenuTitle")){
            document.querySelector("#searchAVMenuTitle").innerHTML = "标题: (译)" + result;
        }
    }

    // 防盗链
    function noReferrer(){
        // 相关代码地址 https://greasyfork.org/zh-CN/scripts/376884
        // 名称: 显示防盗链图片 for Inoreader
        // 作者: maboloshi
        var meta = document.createElement('meta');
        meta.name = "referrer";
        meta.content = "no-referrer";
        // meta.content = "same-origin";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
        
    // 预览视频 项目名称: "JAVBUS影片预告" 作者:"bigwolf99"  相关代码: https://sleazyfork.org/zh-CN/scripts/450740
    async function getVideo(avID) {
        if(setting.dontGetVideo) return;
        if(avInfo.noInfo) return;
        if(debug) console.log("getVideo  开始");
        
        let videoURL;
        if(!localInfo[avID].video){
            videoURL = await queryVideoURL(avID);
            
            if(debug)console.log("最终url: ", videoURL);

            if(videoURL){
                localInfo = GM_getValue("avInfo2")
                localInfo[avID].video = videoURL;
                GM_setValue("avInfo2",localInfo);
            }else{
                if(debug)console.log("未获取到视频链接: ", videoURL);
                return;
            }
        }else{
            // videoURL = localInfo[avID].video;
            // 大概从 2024-12-03 左右, dmm.co.jp 域名的预览视频, 非日本IP会出现 403 拒绝访问的问题
            videoURL = localInfo[avID].video.replace("dmm.co.jp", "dmm.com");
            localInfo[avID].video = videoURL;
            GM_setValue("avInfo2",localInfo);
            if(debug)console.log("本地存在视频链接: ", videoURL)
        }
        
        let avimg = document.querySelector(".avimg")
        if(avimg){
            let videoButton = document.createElement("savdiv");
            videoButton.classList.add("avimg-preview-button");
            avimg.parentNode.insertBefore(videoButton,avimg);
            videoButton.addEventListener("click",addVideoDiv(videoURL, avID));
        }

        return videoURL;
    }

    // 获取播放地址
    async function queryDMMVideoURL(avID, host = "cc3001.dmm.com") {
        // if (movieInfo.isUncensored)
        //   return Promise.reject("DMM server not support uncensored movie.");
        //see https://www.javbus.com/forum/forum.php?mod=viewthread&tid=63374
        //see https://bit.ly/3wXLj6T
        let infix = "litevideo/freepv";
        //1500kbps = _dmb_w || 3000kbps = _mhb_w || vrlite
        // 1080p:hhb 720p:hmb  576p:mhb
        let quality ={
            "p1080":"hhb",
            "p720":"hmb",
            "p576":"mhb",
            "old720":"_dmb_w",
        }
        // vr 影片
        // if (avID.search("VR-")) {
        //   postfix = "vrlite";
        //   infix = "vrsample";
        //   url =  `https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPartAdd00}/${urlPartAdd00}${postfix}.mp4`
        // }
    
        // 提取番号中的英文和数字
        const movieIdSplit = avID.toLowerCase().split("-");
        const corp = movieIdSplit[0];  // 番号中的英文
        const idNum = movieIdSplit[1];    // 返回中的数字
        let urlPart;
    
        let cid_user = GM_getValue("_setting2").cid_user ?? {};
        var urls = [];

        // 是否需要特殊处理
        if (cid[corp]) {
            if(debug) console.log("视频加载: 在默认URL规则中: ",cid[corp])
            if (cid[corp].length>1){
                console.log("多个")
                // 此处只会处理第2个及之后的, 第一个依旧会判断是否含0, 请求两遍
                for(let i=1;i<=cid_user.length;i++){
                    urlPart = cid[corp][i] + idNum;
                    urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.p576}.mp4`);
                    urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.old720}.mp4`);
                }
            }
            urlPart = cid[corp][0] + idNum;
            // corp = cid[corp][0]
        } else if (cid_user[corp]){
            if(debug) console.log("视频加载: 在用户学习URL规则中: ",cid_user[corp]);
            urlPart = cid_user[corp][0] + idNum;
            // corp = cid_user[corp][0]
        } else {
            if(debug) console.log("视频加载: URL规则,默认添加00");
            urlPart = corp + "00" + idNum;
        }

        //  https:// cc3001.dmm.co.jp / litevideo/freepv /  s            / ssn                       / ssni00378       / ssni00378       _dmb_w    .mp4    
        // `https:// ${host}          / ${infix}         / ${urlPart[0]} / ${urlPart.substring(0,3)} / ${urlPart}      / ${urlPart}      ${postfix}.mp4`;
        // var videoURL = `https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${postfix}.mp4`;

        let urlPartAdd00 = replace00(urlPart);
        // 根据番号发布时间 访问不同的网址
        // if(avInfo.date && new Date(avInfo.date)>new Date("1/1/2024")){
            // urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.p576}.mp4`);
            // urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPartAdd00}/${urlPartAdd00}${quality.p576}.mp4`);
        // }else 
        if(avInfo.date && new Date(avInfo.date)>new Date("8/29/2023")){
            urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.p576}.mp4`);
            urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPartAdd00}/${urlPartAdd00}${quality.p576}.mp4`);
            // urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.old720}.mp4`);
            // urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPartAdd00}/${urlPartAdd00}${quality.old720}.mp4`);
        }else{
            urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPart}/${urlPart}${quality.old720}.mp4`);
            urls.push(`https://${host}/${infix}/${urlPart[0]}/${urlPart.substring(0,3)}/${urlPartAdd00}/${urlPartAdd00}${quality.old720}.mp4`);
        }

        var urlListGetMess = [];
        for(let i=0;i<urls.length;i++){
            let p = GetMess(urls[i])
            urlListGetMess.push(p)
        }

        return Promise.any(urlListGetMess)
            .then(res=>{
                if(debug)console.log(res);
                return res.finalUrl;
            })
            .catch(e=>{
                if(debug)console.log(e);
                return queryJavSpylVideoURL(avID)
                            .then(res=>{
                                let resJSON = JSON.parse(res.response)
                                if(resJSON?.info?.url){
                                    return "https://" + resJSON.info.url
                                }
                                return false
                            })
                            .catch(()=>{return false})
            })
    }

    async function queryJavSpylVideoURL(avID) {
        if(debug)console.log("通过javspyl获取链接中:");
        let javspylURL = "https://api.javspyl.eu.org/api/";
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                url:javspylURL,
                method :"POST",
                headers: {
                    origin: "https://api.javspyl.eu.org",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                data: `ID=${avID}`,
                onload:function(xhr){
                    resolve(xhr);
                },
                onerror:function(xhr){
                    resolve(xhr);
                }
            });
        })}

    // 用来替换番号中的 00 , 预览视频使用
    function replace00(urlPart){
        if(urlPart.search(/00\d{3,4}/)>0){
            return urlPart.replace("00","");
        } else {
            let oindex = urlPart.search(/[a-z]\d/i) +1;
            return urlPart.slice(0,oindex) + "00" + urlPart.slice(oindex)
        }
    }

    // 其他番号的播放地址
    async function queryVideoURL(avID){
        let link = "";
        if(avID.match(/[01]\d{5}\-(?:1)?\d{2,3}/i)){ 
            if(debug) {console.log("加勒比: ", avID);}
            link = `http://smovie.caribbeancom.com/sample/movies/${avID}/480p.mp4`
        }else if(avID.match(/[01]\d{5}\_(?:1)?\d{2,3}/i)){ 
            if(debug) {console.log("一本道: ", avID);}
            link = `http://smovie.1pondo.tv/sample/movies/${avID}/480p.mp4`
        }else if(avID.match(/HEYZO/i)){  
            if(debug) {console.log("HEYZO: ", avID);}

            link = `https://www.heyzo.com/contents/3000/${avID.slice(6)}/heyzo_hd_${avID.slice(6)}_sample.mp4`
        }else if(avID.match(/HEYDOUGA/i)){
            if(debug) {console.log("HEYDOUGA视频无法解析: ",avID)}
            return false;
            // heydouga-4037-445
            let avIDSplit = avID.split("-");
            link = `https://hls-mediaac.heydouga.com/sample/${avIDSplit[1]}/${avIDSplit[2]}/mb.m3u8`;
        }else if(avID.match(/(?:k|n)\d{4}/i)){
            //  东京热 n1234 
            link = `https://my.cdn.tokyo-hot.com/media/samples/${avID}.mp4`;
        }else if(avID.search(/^[A-Z]{2,7}-\d{2,6}$/i>-1)){
            return await queryDMMVideoURL(avID)
        }else{
            if(debug) {console.log("该视频目前无法解析视频: ",avID);}
            return false;
        }

        return await GetMess(link)
            .then((res) =>{
                if(res.status == 200){
                    return link;
                }else{
                    return false
                }
            })
            .catch((e) =>{
                return false;
            })
    }

    function GetMess(link){
        if(debug)console.log("GetMess请求: ", link);
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                url:link,
                method :"HEAD",
                headers: {
                },
                fetch:link,
                onload:function(xhr){
                    if(xhr.status ==200){
                        resolve(xhr);
                    } else{
                        reject(xhr)
                    }
                },
                onerror:function(xhr){
                    resolve(xhr);
                }
            });
        })
    }

    // 添加视频
    function addVideoDiv(videoURL, avID){
        return function(){
            let videoDiv = document.createElement("avdivVideo");
            videoDiv.innerHTML = `
                <video class="avVideo" poster="${localInfo[avID].image}" controls autoplay loop >
                    <source src="${videoURL}" type="video/mp4">
                </video>
                <avidv class="savVideoClose"> X </avdiv>
                `
            let imgDiv = document.querySelector("avdivimg");
            imgDiv.appendChild(videoDiv)

            let videoSelect = document.querySelector(".avVideo");
            if(videoSelect){
                videoSelect.volume = setting.videoVolume??0.2;
            }
        }
    }
    // fc2 预览视频
    function getVideoURLFC2(avID) {
        if(setting.dontGetVideo) return;
        if(debug) console.log("getVideoURLFC2  开始");

        let videoButton = document.createElement("savdiv");
        videoButton.classList.add("avimg-preview-button");

        let avimg = document.querySelector(".avimg")
        avimg.parentNode.insertBefore(videoButton,avimg);

        videoButton.addEventListener("click",addVideoDivFc2(avInfo.fc2Video));

        return 
    }
    // 添加fc2视频
    function addVideoDivFc2(videoURL){
        return function(){
            let videoDiv = document.createElement("avdivVideo");
            videoDiv.innerHTML = `
                <iframe src="${videoURL}"></iframe>
                <avidv class="savVideoClose"> X </avdiv>
                `
            let imgDiv = document.querySelector("avdivimg");

            imgDiv.appendChild(videoDiv)
        }
    }
    //  切换页面 暂停预览视频播放
    function visibilitychangeFun(e){
        if(e.target.hidden){
            document.querySelector("avdiv .avVideo")?.pause();
            document.querySelector(".main-video")?.pause(); // FC2
        }else{
            document.querySelector("avdiv .avVideo")?.play(); 
            // document.querySelector(".main-video")?.play();  // FC2 仅自动暂停, 不会自动播放
        }
    }

    // 获取色花堂的formhash
    function sehuatang_getFormHash(){
        let setting2 = GM_getValue("_setting2");
        let sehuatang_getTime = setting2.sehuatang_getTime;
        let nowTime = new Date().getTime();
        let sehuatangURL = setting.sehuatangURL?setting.sehuatangURL.replace(/\/$/,""):"https://www.sehuatang.org";

        // 不确定这个值会不会变动, 12小时获取一次
        if(!sehuatang_getTime || nowTime-sehuatang_getTime > 43200000 || setting2.sehuatang_url != sehuatangURL){
            GM_xmlhttpRequest({
            method:"get",
            url:sehuatangURL,
            onload:function(data){
                // console.log(data);
                var parser=new DOMParser();
                let htmlDoc=parser.parseFromString(data.responseText, "text/html");
                let odom = htmlDoc.querySelector('input[name="formhash"]');
                // console.log(odom);
                if(!odom) return;
                let formhash_value = odom.value;
                // console.log(formhash_value);
    
                let setting2 = GM_getValue("_setting2");
                setting2.sehuatang_formhash = formhash_value;
                setting2.sehuatang_getTime = nowTime;
                setting2.sehuatang_url = sehuatangURL;
                GM_setValue("_setting2",setting2);
                }
            })
            if(debug){console.log(`重新获取色花堂的formhash`)};
        }else{
            if(debug){console.log(`没有重新获取色花堂的formhash`)}
        }
    }
    // 色花堂搜索
    function sehuatang(avID){
        let formhash = GM_getValue("_setting2").sehuatang_formhash;
        let sehuatangURL = setting.sehuatangURL?setting.sehuatangURL.replace(/\/$/,""):"https://www.sehuatang.org";

        if(formhash){
            GM_xmlhttpRequest({
                method: "post",
                url: sehuatangURL+"/search.php?mod=forum",
                data: `formhash=${formhash}&srchtxt=${avID}&searchsubmit=yes`,
                headers:  {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Origin":sehuatangURL,
                    "Referer":sehuatangURL
                },
                onload: function(data){
                    // console.log(data);
                    // console.log(data.finalUrl);
                    if(data.finalUrl){
                        window.open(data.finalUrl);
                    }else{
                        GM_setClipboard(avID)
                        window.open(`${sehuatangURL}/search.php`);
                    }
                },
                onerror : function(err){
                    console.log('error')
                    console.log(err)
                }
            });
        }else{
            GM_setClipboard(avID)
            window.open(`${sehuatangURL}/search.php`);
        }
    }

    // 查看本地 jellyfin 中是否存在
    function getJellyfin(avID){
        if(setting.jellyfinHost && setting.jellyfinApiKey){
            if(debug){console.log("查询本地jellyfin: getJellyfin");};
        } else {
            if(debug){console.log("退出jellfin函数, 其中host和apiKey: ", setting.jellyfinHost , setting.jellyfinApiKey)}
            return;
        }

        GM_xmlhttpRequest({
            method: 'get',
            url: setting.jellyfinHost + "emby/Search/Hints?searchTerm=" + avID,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Emby-Token":setting.jellyfinApiKey
            },
            data: "",
            timeout: 1000, 
            onload: function (r) {
                var div_jellyfin = document.querySelector(".jellyfin");
                if(!div_jellyfin){return};

                // ApiKey输入错误的情况下, 会出现401错误, 身份验证错误
                if(r.status == 401){
                    console.log("jellyfin: 身份验证错误, 请检查设置中的 ApiKey 是否设置正确");
                    div_jellyfin.classList.add("errJellyfin")
                    return;
                }
                var data = JSON.parse(r.responseText);
                if(data.SearchHints[0]){
                    if(debug){console.log("jellyfin中的标题: ", data.SearchHints[0].Name)};
                    div_jellyfin.dataset.url = setting.jellyfinHost + "web/index.html#!/details?id=" + data.SearchHints[0].Id;
                    div_jellyfin.classList.add("yesJellyfin");
                } else {
                    div_jellyfin.dataset.url = setting.jellyfinHost + "web/index.html#!/search.html";
                    div_jellyfin.dataset.avid = avID;
                    div_jellyfin.classList.add("noJellyfin");
                }
            },
            ontimeout(data){
                console.log("jellyfin访问超时")
                console.log(data)
                document.querySelector(".jellyfin")?.classList.add("errJellyfin")
            }
        });
    }

    function getEmby(avID){
        if(setting.jellyfinHost && setting.jellyfinApiKey){
            if(debug){console.log("查询本地 Emby : getEmby");};
        } else {
            if(debug){console.log("退出 Emby 函数, 其中host和apiKey: ", setting.jellyfinHost , setting.jellyfinApiKey)}
            return;
        }

        GM_xmlhttpRequest({
            method: "GET",
            // url:
                // setting.jellyfinHost+"emby/Users/"+setting.jellyfinApiKey+"/Items?api_key="+setting.jellyfinApiKey+
                // "&Recursive=true&IncludeItemTypes=Movie&SearchTerm="+avID,
            url: setting.jellyfinHost+"emby/Items?api_key="+setting.jellyfinApiKey+"&Recursive=true&IncludeItemTypes=Movie&SearchTerm="+avID,
            headers: {
              accept: "application/json",
            },
            onload: function (r) {
                var data = JSON.parse(r.responseText);
                // console.log(data)
                var div_jellyfin = document.querySelector(".jellyfin");
                if(!div_jellyfin){return};
                if(data.Items[0]){
                    div_jellyfin.dataset.url = ` ${setting.jellyfinHost}web/index.html#!/item?id=${data.Items[0].Id}&serverId=${data.Items[0].ServerId} `;
                    div_jellyfin.classList.add("yesJellyfin");
                } else {
                    div_jellyfin.dataset.url = setting.jellyfinHost + "web/index.html#!/list/list.html?type=search";
                    div_jellyfin.dataset.avid = avID;
                    div_jellyfin.classList.add("noJellyfin");
                }
            }
        });
    }

    // 查看本地 jellyfin 演员
    function getJellyfin_Actor(name,index){
        if(debug){console.log("jellyfin/emby 演员查询: ", index, name);};
        GM_xmlhttpRequest({
            method: 'get',
            url: setting.jellyfinHost + "Persons?searchTerm=" + name,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Emby-Token":setting.jellyfinApiKey
            },
            data: '',
            onload: function (r) {
                if(!r || r?.status != 200){return};
                var data = JSON.parse(r.responseText);
                // TotalRecordCount 查询到的数量
                if(data.TotalRecordCount){
                    var div_actor = document.querySelector(".sav-actors-"+ index)
                    if(div_actor){
                        var div_jellyfin = document.createElement("avspan");
                        if(setting.emby){
                            var jellyfin_ico =  '<svg  role="img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M469.333333 85.333333L256 298.666667l42.666667 42.666666-213.333334 213.333334 213.333334 213.333333 42.666666-42.666667 213.333334 213.333334 213.333333-213.333334-42.666667-42.666666 213.333334-213.333334-213.333334-213.333333-42.666666 42.666667-213.333334-213.333334m-42.666666 277.333334l256 149.333333-256 149.333333v-298.666666z" fill="#05b010" p-id="1934"></path></svg>'
                            div_jellyfin.innerHTML = "<a class='actor-jellyfin' target='_blank' title='' href= '"+ setting.jellyfinHost + "web/index.html#!/item?id=" + data.Items[0].Id  + "&serverId="+ data.Items[0].ServerId +"'>"+ jellyfin_ico + "</a>";
                        }else{
                            var jellyfin_ico =  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" style="stop-color:#AA5CC3;stop-opacity:1" /><stop offset="100%" style="stop-color:#00A4DC;stop-opacity:1" /></linearGradient><path style="fill:url(#grad3)" d="M12 .002C8.826.002-1.398 18.537.16 21.666c1.56 3.129 22.14 3.094 23.682 0C25.384 18.573 15.177 0 12 0zm7.76 18.949c-1.008 2.028-14.493 2.05-15.514 0C3.224 16.9 9.92 4.755 12.003 4.755c2.081 0 8.77 12.166 7.759 14.196zM12 9.198c-1.054 0-4.446 6.15-3.93 7.189.518 1.04 7.348 1.027 7.86 0 .511-1.027-2.874-7.19-3.93-7.19z"/></svg>'
                            div_jellyfin.innerHTML = "<a class='actor-jellyfin' target='_blank' title='' href= '"+ setting.jellyfinHost + "web/index.html#!/details?id=" + data.Items[0].Id  + "&serverId="+ data.Items[0].ServerId +"'>"+ jellyfin_ico + "</a>";
                        }
                        // 插入到演员dom的后面
                        var div_parent = div_actor.parentNode;
                        if(div_parent.lastChild == div_actor){
                            div_parent.appendChild(div_jellyfin);
                        }else{
                            div_parent.insertBefore(div_jellyfin,div_actor.nextSibling);
                        }
                    }
                }else{
                    if(debug){console.log("jellyfin 中没搜到相关演员: ",name)}
                }
            }
        });
    }

    // 搜索本地 jellyf/emby 视频, 返回所有所有的 movie 分类视频的名称列表
    function localVideo_search(){
        // actor_search()
        // console.log("localVideo_search")
        let url;
        if(setting.emby){
            url = setting.jellyfinHost+"emby/Items?Recursive=true&IsMovie=true&IsFolder=false&api_key=" + setting.jellyfinApiKey;
        }else{
            url = setting.jellyfinHost + "Items?recursive=true&filters=IsNotFolder&includeItemTypes=Movie&api_key=" + setting.jellyfinApiKey;
        }
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            headers: {
              accept: "application/json"
            },
            onload: (r) => {
                // console.log(r)
                if(r.status != 200){
                    console.log("搜索本地jellyf视频有误, 返回结果: ");
                    console.log(r);
                    return;
                }
                var data = JSON.parse(r.responseText);
                // console.log(data);
                if(r.status == 200 && data.Items?.length>0){
                    localVideoList = data.Items;
                    localVideo_addStyle();
                }
            },
          });
    }
    function localVideo_comparison(avID){
        let reg = new RegExp(avID,"i")
        return localVideoList.find(value=>{
            return value.Name?.search(reg)>-1
        })
    }

    function actor_search(){
        // const fetch = require('node-fetch');

        // Jellyfin API端点和身份验证令牌
        const baseUrl = setting.jellyfinHost + 'api/';
        const apiKey = setting.jellyfinApiKey;

        // // 构建API请求
        // const endpoint = baseUrl + 'Persons';
        // const headers = {
        // 'X-Emby-Token': apiKey,
        // };
        var url = setting.jellyfinHost + "api/Persons&api_key=" + setting.jellyfinApiKey;
        url = "http://192.168.31.6:8096/Persons?IsMovie=true&api_key=e4c35ab15f9347a0916fe049de870e61"
        GM_xmlhttpRequest({
            method: "GET",
            url: url,
            headers: {
              accept: "application/json"
            },
            onload: (r) => {
                // console.log(r)
                var data = JSON.parse(r.responseText);
                // console.log(data);
                if(r.status == 200 && data.Items?.length>0){
                    // localVideoList = data.Items;
                    // localVideo_addStyle();
                    console.log(data)
                    data.Items.forEach(actor=>{
                        console.log(actor.Name)
                    })
                }
            },
          });

        // 发起API请求
        // fetch(endpoint, { headers })
        // .then(response => {
        //     if (response.ok) {
        //     return response.json();
        //     } else {
        //     throw new Error('Failed to fetch actors. Status code: ' + response.status);
        //     }
        // })
        // .then(actors => {
        //     // 打印演员信息
        //     actors.forEach(actor => {
        //     console.log(actor.Name);
        //     });
        // })
        // .catch(error => {
        //     console.error('Error:', error.message);
        // });

    }

    // 对本地视频(jellyfin/emby)已有的番号添加额外样式
    function localVideo_addStyle(){
        let avdivs = document.querySelectorAll('.sav-id');
        for(let i=0;i<avdivs.length;i++){
            // 判断本地有没有相关视频
            let localVideoExist = localVideo_comparison(avdivs[i].dataset.av);
            if(localVideoExist){
                if(setting.LocalVideoSearchExtraButton){
                    let exDiv = document.createElement("savdiv");
                    let url;
                    if(setting.emby){
                        exDiv.innerHTML =  '<svg  role="img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path d="M469.333333 85.333333L256 298.666667l42.666667 42.666666-213.333334 213.333334 213.333334 213.333333 42.666666-42.666667 213.333334 213.333334 213.333333-213.333334-42.666667-42.666666 213.333334-213.333334-213.333334-213.333333-42.666666 42.666667-213.333334-213.333334m-42.666666 277.333334l256 149.333333-256 149.333333v-298.666666z" fill="#05b010" p-id="1934"></path></svg>'
                        url = ` ${setting.jellyfinHost}web/index.html#!/item?id=${localVideoExist.Id}&serverId=${localVideoExist.ServerId} `
                    }else{
                        exDiv.innerHTML =  '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="30%" style="stop-color:#AA5CC3;stop-opacity:1" /><stop offset="100%" style="stop-color:#00A4DC;stop-opacity:1" /></linearGradient><path style="fill:url(#grad3)" d="M12 .002C8.826.002-1.398 18.537.16 21.666c1.56 3.129 22.14 3.094 23.682 0C25.384 18.573 15.177 0 12 0zm7.76 18.949c-1.008 2.028-14.493 2.05-15.514 0C3.224 16.9 9.92 4.755 12.003 4.755c2.081 0 8.77 12.166 7.759 14.196zM12 9.198c-1.054 0-4.446 6.15-3.93 7.189.518 1.04 7.348 1.027 7.86 0 .511-1.027-2.874-7.19-3.93-7.19z"/></svg>'
                        url = setting.jellyfinHost + "web/index.html#!/details?id=" + localVideoExist.Id;;
                    }
                    exDiv.classList.add("jellyfin_openPage");
                    exDiv.addEventListener("click",function(e){
                        GM_openInTab(url,{active: true, insert: true,setParent:true});
                        e.preventDefault();
                        return;
                    })
                    appendChild_Afterend(exDiv,avdivs[i]);
                }
                // 番号上添加相关标识
                avdivs[i].classList.remove("infoFirst","infoExistent","infoNonExistent");
                avdivs[i].classList.add("infoLocalVideoExistent");   
            }
            avdivs[i].classList.add("infoLocalVideoSearched");
        }
    }

    // 插入到给定元素的后面
    function appendChild_Afterend(obj,oTarget){
        if (oTarget.nextSibling) {
           oTarget.parentNode.insertBefore(obj, oTarget.nextSibling);
        } else {
            oTarget.parentNode.appendChild(obj);
        };
    }

    // 调用qbit下载
    function qBit(torrent){
        if(debug){console.log("正在调用磁力下载, ",torrent);};
        // 弹窗询问是否下载
        let download_check = setting.qBitNoPopup ? setting.qBitNoPopup : window.confirm ("是否调用 qBittorrent 下载磁链: \n" + torrent);
        if (!download_check){
            if(debug){console.log("取消qbit 下载",download_check, setting.qBitNoPopup)}
            return
        }

        var qbi_host = setting.qBitHost
        var download = setting.qBitDownload;
        GM_xmlhttpRequest({
            method: 'POST',
            url: qbi_host + 'api/v2/torrents/add', 
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            timeout:1000,
            data:"urls=" + torrent + "&autoTMM=false&savepath=" + download + "&cookie=&rename=&category=&paused=false&contentLayout=Original&dlLimit=NaN&upLimit=NaN" ,
            onload: function (response) {
                console.log("qBittorrent 返回消息: " ,response);
                if(response.statusText){
                    if(setting.qBitNoPopup && response.statusText.indexOf("OK")>-1){
                        return;
                    }
                    let confirm_r = window.confirm ("qBittorrent 返回消息: \n" + response.statusText + "\n 确定打开 qBit, 取消关闭弹窗");
                    if(confirm_r){
                        window.open(setting.qBitHost, "_blank")
                    }
                } else {
                    alert("网址可能存在问题,  网站返回消息: \n" + response.statusText);
                }
            },
            ontimeout: function (response) {
                console.log(response)
                alert("调用 qBittorrent 出现超时 \n请检查是否已经打开相关软件");
            },
            onerror: function (response) {
                console.log(response)
                alert("调用 qBittorrent 发生错误");
            },
        })
    }

    // 菜单
    // 菜单编辑
    function savBoxEdit(){
        var editbox = document.createElement("div");
        editbox.id = "sav-editCodeBox";
        editbox.style.cssText = "position:fixed;" +
        "z-index:99999;" +
        "top:50%;left:50%;" +
        "transform:translate(-50%,-50%);" +
        "background:#ccc;" +
        "border-radius:4px;" +
        "padding:10px 20px;" ;
        var innerH = " "+
        "<p>搜索词用 %s 代替 <br>格式是 JSON ,修改时注意中英文标点符号 尤其有无逗号 <br>点击“供测试使用”按钮后, 会增加额外选项, 能影响脚本功能 <br><u><a href='https://github.com/qxinGitHub/searchAV'>Github</a></u>上有具体使用说明, 也可以去<u><a href='https://greasyfork.org/zh-CN/scripts/423350/feedback'>greasyfork论坛求助</a></u> </p>" +
        "<textarea wrap='off' cols='66' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify( GM_getValue("_setting"),false,4) + "</textarea>" +
        "<br>" +
        "<p>老司机共浏览了" + Object.keys(localInfo).length + "个番号！</p>" +
        "<button id='savDebug' >供测试使用</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savClearSetting' >清空设置</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savHistory' >清空浏览历史</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savEditBoxCloase' >关闭</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savEditBoxSave' >保存</button>" +
        "";
        editbox.innerHTML = innerH;
        editbox.querySelector("#savDebug").addEventListener("click",savDebug)
        editbox.querySelector("#savClearSetting").addEventListener("click",clearSetting)
        editbox.querySelector("#savHistory").addEventListener("click",clearHistory)
        editbox.querySelector("#savEditBoxCloase").addEventListener("click",savBoxClose)
        editbox.querySelector("#savEditBoxSave").addEventListener("click",savBoxSave)
        document.body.appendChild(editbox);
    }
    // 菜单保存
    function savBoxSave(){
        var codevalue = savBoxGetValue();
        if(codevalue){
            GM_setValue("_setting",codevalue);
            setTimeout(function(){
                window.location.reload();
            },300);
        }
    }
    // 关闭菜单
    function savBoxClose(){
        var box = document.querySelector("#sav-editCodeBox");
        if(box){
            box.parentNode.removeChild(box);
        }
    }
    // 开启debug, 会加入额外的信息  
    function savDebug(){
        // 如果是想自定义搜索列表和颜色, 去设置里点击“测试”,然后“保存”, 不要改动此处
        var debug_setting = {
            "debug":false,   // 会在番号上额外添加一些信息, 不建议开启
            "selectLength":0,  // 选中搜索的字符长度。超过该长度的会忽略掉, 设置0可以关闭划词搜索。 
                                // 设置更大的数字,例如16,可以应对一些超长的番号。实际使用中颇多的问题。
            "javbus":"https://www.javbus.com/", // 自定义javbus网站地址 "https://www.javsee.bid/"
            "javdb":"https://javdb.com/",    // 自定义javdb网站地址 "https://javdb004.com/"
            "sehuatangURL":"https://www.sehuatang.net", // 自定义色花堂网址
            "actorsSearchURL":"https://www.javbus.com/searchstar/%s",  // 自定义演员搜索地址, 搜索词用 %s 代替
            "addSearchButton":false,    // 在番号后面添加一个图标, 鼠标滑过作用于图标, 而不是番号
            "searchButtonIcon":"✈",    // 番号后面的图标样式
            "clickToMenu":false,    // 鼠标点击番号才会出现菜单
            "dontClearMenu": false, // 鼠标移出后,菜单不会消失(测试时找问题使用, 开启会影响脚本使用)
            "includeIDinLinks":true,    // 番号本身是个链接的情况下是否识别
            "dontImgBig": false,    // 图片点击放大, 包括滚动放大
            "dontGetInfo":false,    // 获取番号的相关信息(从javbus获取),
            "getInfoFromJavDB":false, // 直接从 JavDB 获取信息, 不使用Javbus
            "dontGetInfoFc2":false, // 获取fc2的相关信息(从javmenu获取)
            "dontGetInfoWuma":false,    // 获取无码番号的信息, 大量访问会导致javdb禁止你的ip访问一到两个星期。
            "getInfoFailToJavDB":true,    // 从javbus获取不到信息时, 会从javdb尝试获取。有被javDB封IP的风险
            "dontMagnetDiscern":false,   // 将磁链转为链接
            "magnetCopy":false,     // 磁链不转化链接,点击磁链复制到剪贴板
            // "avLinkMagnet":false,       // 链接是磁链的番号是否添加复制功能
            "dontTransTitle":false, // 翻译标题
            "dontTransTags":false,  // 翻译标签
            "dontGetVideo":false,   // 关闭视频预览
            "videoVolume":0.2, // 视频播放音量,取值0-1, 对fc2的预览视频无效
            "fc2Thumbnail":false,   // fc2 的预览图是否用缩略图, 用低画质换取快速加载图片
            "infoReload": false,    // 浏览过的番号将不会重复获取信息, 避免IP地址被网站拉黑。
            "closeJavdbLimit":false,    // 禁止在短时间内多次访问javdb。 设为 true 可以关闭限制, 容易封IP
            "closeLoadingAnimation":false,  // 关闭信息加载时的动画
            "close_Related_Page":false, // 关闭相关页面的按钮(第一个按钮)
            "addOtherButton":false, // 添加3个额外的按钮: 1,设置按钮; 2,番号按钮,点击复制; 3,关闭按钮
            "sehuatang":false,  // 添加色花堂的搜索按钮
            "emby":false,   // 将 Jellyfin 替换成 Emby, 如果使用 emby, 必须改为true
            "jellyfinHost":"http://localhost:8096/",    // 本地的jellyfin/emby的地址
            "jellyfinApiKey":"",    // 外部程序需要密钥才能和jellyfin/emby通信。  “设置 - 控制台 - API密钥” 点击加号生成一个
            "LocalVideoSearch":false,    // 如果在本地有相关视频, 显示样式为 “infoLocalVideoStyle”, 该样式的优先级最高
            "LocalVideoSearchExtraButton": false,   // 如果在本地有相关视频, 会直接在番号后面显示跳转按钮
            "qBitHost":"http://localhost:8080/", //本地 qbit 的地址
            "qBitDownload":"",    // 在qbit中才下载地址,注意双斜杠: D:\\_下载\\qBittorrent
            "qBitNoPopup":false,   // qbit 弹窗询问是否调用qbit下载
            "baiduAppid":"",    // 百度翻译的 APP ID
            "baiduKey":"",    // 百度翻译的 密钥
            "linkStyle":{   // 没浏览的番号
                "color":"green",  // 颜色  名称:green  十六进制:#00FF00  RGB:rgb(0,255,0) 
                "text-decoration":"underline green",  //下划线
                "font-weight":"normal",   // 加粗: normal、bold、lighter 
                "text-shadow":"rgb(177 177 177 / 70%) 1px 1px",    // 字体阴影
            },
            "visitStyle":{  // 已经浏览过的番号
                "color":"chocolate",  // 颜色
                "text-decoration":"underline dotted chocolate",   // 下划线
                "font-weight":"normal", // 加粗
                "text-shadow":"rgb(177 177 177 / 65%) 1px 1px", // 字体阴影
            },
            "noExistStyle":{  // 已经浏览过, 但是没有获取到信息的番号
                "color":"red",    // 颜色
                "text-decoration":"underline dotted red",   // 下划线
            },
            "infoLocalVideoStyle":{ //本地视频(jellyfin/emby)已有的番号
                "color":"#00ADB0",    // 颜色
                "text-decoration":"underline dotted #00ADB0",   // 下划线
            },
            "list":[],  // 普通番号的搜索列表, 建议直接将搜索加在 "list_all"
            "list_wuma":[], // 素人番号的搜索列表, 建议直接将搜索加在 "list_all"
            "list_all":[]   // 它俩共同的搜索, 会同时加在上面两个列表的后面, 建议使用这个。
        }
        Object.assign(debug_setting,savBoxGetValue());
        document.querySelector("#sav-editCodeBox textarea").value = JSON.stringify(debug_setting,false,4)
    }
    // 返回设置选择的json格式
    function savBoxGetValue(){
        var codevalue = document.querySelector("#sav-editCodeBox textarea").value;
        if(codevalue.length ==0){
            codevalue = "{}"
        }
        var return_value ;
        try{
            return_value = JSON.parse(codevalue)
        }catch(err){
            alert("保存失败,请按照下方提示修改后重新保存\n"+err);
        }
        return return_value;
    }
    // 清空设置
    function clearSetting(){
        GM_deleteValue("_setting");
        GM_deleteValue("_setting2");
        localInfo = {};
        savBoxClose();
        location.reload();
    }
    // 清除浏览历史
    function clearHistory(){
        GM_setValue("avInfo2",{});
        localInfo = {}
        savBoxClose()
        location.reload();
    }
    GM_registerMenuCommand("自定义搜索", savBoxEdit)
    // 添加样式
    function addStyle(){
        var styleText = "";
        var styleAVID = "";
        if(setting.linkStyle){
            styleAVID += ".infoFirst{"
            for(let key in setting.linkStyle){
                styleAVID += key + ":" + setting.linkStyle[key] + ";"
            }
            styleAVID += "}"
        }else {
            styleAVID += ".infoFirst{text-decoration:underline green;}"
        }
        if(setting.visitStyle){
            styleAVID += ".infoExistent{"
            for(let key in setting.visitStyle){
                styleAVID += key + ":" + setting.visitStyle[key] + ";"
            }
            styleAVID += "}"
        }else {
            styleAVID += ".infoExistent{text-decoration:underline dotted #66ccff;}"
        }    
        if(setting.noExistStyle){
            styleAVID += ".infoNonExistent{"
            for(let key in setting.noExistStyle){
                styleAVID += key + ":" + setting.noExistStyle[key] + ";"
            }
            styleAVID += "}"
        }else {
            styleAVID += ".infoNonExistent{text-decoration:underline dotted red;}"
        }
        if(setting.infoLocalVideoStyle){
            styleAVID += ".infoLocalVideoExistent{"
            for(let key in setting.infoLocalVideoStyle){
                styleAVID += key + ":" + setting.infoLocalVideoStyle[key] + ";"
            }
            styleAVID += "}"
        }else {
            styleAVID += ".infoLocalVideoExistent{text-decoration:underline dotted #598987;}"
        }

        styleText = `
            .sav-menu{
                font-family: Microsoft YaHei,sans-serif;
                position:fixed;
                display: block;
                text-align: left;
                color: #000;
                background:rgba(255,255,255,.8);
                backdrop-filter: blur(5px);
                border-radius: 4px;
                padding:6px 12px 10px 9px;
                /* margin-top: -2px; */
                z-index: 99999; 
                font-size: 14px;
                max-width: 600px;
                box-shadow: 4px 4px 12px #ccc, -1px -1px 5px #eee;
                border-top: 2px solid #fff;
                border-left: 2px solid #fff;
                transform:scale(1);
                transition:0.2s;
                transition-timing-function: ease-out;
                animation: savOpenAnim 0.15s;
            }
            .savCloseAnim{
                animation: savCloseAnim 0.15s;
            }
            @keyframes savOpenAnim {
                0% {
                    transform:scale(0.5);
                    background:rgba(255,255,255,.1);
                }
                100% {
                    transform:scale(1);
                    background:rgba(255,255,255,.8);
                }
            }
            @keyframes savCloseAnim {
                0% {
                    opacity: 1;
                    transform:scale(1);
                }
                100% {
                    opacity: 0;
                    transform:scale(0.5);
                }
            }
            /* 链接相关 */
            .savlink{
                margin: 4px 4px 4px 4px;
                border-radius: 4px;
                padding: 3px 5px;
                background: #fff;
                display: inline-block;
                transition: 0.2s;
                transition-timing-function: ease-out;
                box-shadow: -2px -2px 4px rgb(240 240 240), 2px 2px 4px rgb(70 70 70 / 50%);
                cursor: pointer;
                user-select: none;
            }
            .savlink:not(.RPdisabled):hover{
                background: aliceblue;
                box-shadow: -2px -2px 6px rgb(255 255 255 / 50%), 1px 1px 2px rgb(70 70 70 / 50%), inset -2px -2px 6px rgb(255 255 255 / 50%),inset 2px 2px 6px rgb(100 100 100 / 50%);
            }
            .sav-menu .savlink a{
                color:#459df5;
                text-decoration:none;
                transition:0.4s;
            }
            .sav-menu .savlink:not(.RPdisabled):hover a {
                color: #039cff;
                text-shadow: 0 0 #7cfb80;
            }
            avdivsinfo a,
            avdivsinfo a:visited,
            avdivsinfo a:link{
                color: #000;
                transition:0.2s;
            }
            avdivsinfo a:hover{
                color: #850000; 
            }
            /* 相关页面按钮 */
            .relatedPage.RPdisabled{
                cursor:default;
            }
            .relatedPage.RPdisabled a{
                cursor:default;
                pointer-events:none;
                text-decoration:line-through;
                color:#333;
            }

            avdivsinfo{
                text-indent: -2.5em;
                line-height: normal;
            }
            avdivsinfo avdiv{
                display:block;
                margin-bottom: 5px;
                text-shadow: 0 0 #d9d9d9;
                transition: 0.2s;
                padding-left: 2.5em;
            }
            avdivsinfo .avInfoTags,
            avdivsinfo .avInfoSeries{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            avdiverror{
                display:block;
                margin-top: 10px;
                padding-left: 10px;
            }
            avdiverror avdiv{
                display:block;
                margin-bottom: 5px;
                transition: 0.2s;
            }
            avdiv .avimg{
                height: 400px;
                max-width: 100%;
                max-height: 500px;
                cursor: pointer;
                box-shadow: -2px -2px 4px rgb(230 230 230), 2px 2px 2px rgb(70 70 70 / 50%);
                border-top: 1px solid #fff;
                border-left: 1px solid #fff;
                border-radius: 4px;
                transform-origin: center 80%;
                transition:0.2s;
                transition-timing-function: ease-out;
            }
            /* .avimg-preview-button:hover + .avimg,
            avdiv .avimg:hover{
                scale:1.01;
                box-shadow: -2px -2px 4px rgb(160 160 160), 4px 4px 4px rgb(70 70 70 / 60%);
            } */
            avdiv .imageBig{
                max-height: 600px;
                transform: scale(1.3);
                border-radius: 10px;
                border-top: 2px solid #fff;
                border-left: 2px solid #fff;
                box-shadow: -2px -2px 4px rgb(160 160 160), 4px 4px 4px rgb(70 70 70 / 60%);
            }
            avdiv .imageBig:hover{
                box-shadow: -4px -4px 8px rgb(160 160 160), 6px 6px 8px rgb(70 70 70 / 60%);
            }

            savdiv.sav-id{
                transition: 0.5s;
            }
            savdiv.sav-id,
            savmagnet {
                cursor: pointer;
            }
            .jellyfin_openPage svg{
                cursor:pointer;
                width:1em;
                scale:0.9;
                vertical-align:text-bottom;
            }
            u:has(savdiv){
                text-decoration: none;
            }
            .yesJellyfin{
                color:#459df5
            }
            .noJellyfin{
                text-decoration:line-through;
            }
            .errJellyfin{
                cursor:default;
                pointer-events:none;
                text-decoration:line-through;
                color:#333;
            }
            avspan svg {
                height: 14px;
                position: relative;
                top: 0.1em;
                opacity:0.8;
                transition:0.2s;
                display: inline-block;
                vertical-align: baseline;
            }
            avspan svg:hover {
                opacity:1;
            }
            avdiv.sav-menu .avimg.savImgError{
                height: 400px;
                width: 600px;
            }
            /* 动画: 横线加载时的动画 */
            @keyframes sav-loading-animation {
                from{ transform: translate(0, 0); }
                to{ transform: translate(50%, 0); }
            }
            .savLoadingContainer {
                display:block;
                overflow: hidden;
                width: 100%;
                transition:0.1s;
                height: 3px;
                margin-top: 5px;
            }
            .savLoading {
                display: block;
                font-size: 0;
                height: 100%;
                width: 200%;
                position: relative;
                transition:0.2s;
                animation: sav-loading-animation 3s linear infinite;
            }
            .savLoading svg {
                border: none;
                height: 100%;
                width: 50%;
                position: absolute;
            }
            .savLoading svg:last-child {
                left: -50%;
            }
            .stop1,
            .stop3{
                stop-color:#fff0;
            }
            .stop2{
                stop-color:#6dc4ed;
                transition: 1s;
            }
            .stop2.javbusloading{
                stop-color:#71d99b;
            }
            .stop2.javdbloading{
                stop-color:#cccc00;
            }
            .stop2.fc2loading{
                stop-color:#F8A01C;
            }
            /* 预览视频 */
            avdivimg{
                position: relative;
                display: block;
                text-indent: initial;
                user-select: none;

            }
            .avimg-preview-button{
                width: 40px;
                height: 40px;
                border-radius: 40px;
                background:#00e7ff00;
                opacity: 0.8;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                z-index:1;
                transition:0.4s;
                animation: savOpenAnim2 0.15s;
                
            }
            @keyframes huerotate{
                0%{
                    filter:hue-rotate(0deg);
                }
                100%{
                    filter:hue-rotate(360deg);
                }
            }
            .avimg-preview-button:hover{
                opacity: 1;
                background:#00e7ff;
            }
            .avimg-preview-button:after {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 512 512'%3E%3Cpath d='M448 255c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill=''  fill-opacity='0.8' stroke='none'/%3E%3Cpath fill='white' d='M216.32  334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: 48px 48px;
                content: "";
                display: block;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                /* border: 2px solid;
                border-image:linear-gradient(45deg,gold,deeppink)1; */
            }
            .savCloseAnim2,
            avdivimg:has(avdivVideo) .avimg-preview-button,
            avdivimg:has(.imageBig) .avimg-preview-button{
                animation: savCloseAnim2 0.15s;
                animation-fill-mode: forwards;
            }
            avdivVideo{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                animation: savOpenAnim2 0.15s;
            }
            avdivimg video{
                width: 100%;
                height: 100%;
                object-fit: contain;
                background: #fff9;
                backdrop-filter: blur(5px);
                border-radius:4px;
            }
            .savVideoClose {
                position: absolute;
                right: 0;
                top: 0;
                padding: 7px 10px 7px 97%;
                border-radius: 4px;
                cursor: pointer;
                transition:0.4s;
            }
            iframe + .savVideoClose{
                color:#fff;
            }
            .savVideoClose:hover {
                color:red;
                background: #fff8;
            }
            avdivvideo iframe{
                width:100%;
                height:100%;
                border: none;
            }
            @keyframes savOpenAnim2 {
                0% {
                    opacity: 0;
                    transform:scale(0);
                }
                100% {
                    opacity: 1;
                    transform:scale(1);
                }
            }
            @keyframes savCloseAnim2 {
                0% {
                    opacity: 1;
                    transform:scale(1);
                }
                100% {
                    opacity: 0;
                    transform:scale(0);
                }
            }

            /* 对其他网站的一些更改 */
            .fc2-embed-video-player.opt_logo .fc2-video-player .fc2-video-metadata{
                display:none !important;
            }
            .fc2-video-player-logo{
                display:none !important;
            }
            `;
        styleText += styleAVID;
        GM_addStyle(styleText);
    }

})();
