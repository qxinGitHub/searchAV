// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.11.0
// @description  标记网页上的所有番号, 在相关网站快速方便的进行搜索
// @author       iqxin
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABLdJREFUWEftmG2IVGUUx3//O6MZapIftJTeKAqDiqiPGllZSdqHXsw3KmNnpm1LzYqgAleoMAJLw2xmdtsKqS3BkIy0QDSS6FNIkAgRilhUkPjGprtzTzx3d2fv3L0z986upB+6X+855/6e5znnf55zZWYTOY8fOUBJJ85HxoDtf8BRHM2odtAM0cF0fC6oMnicpoUjEjYKrqpr04DWxTjOsNQ8Chg3AWNiQHoR++RTZCybtYx/RgqbGtA6mej3sVziRaCZqj9h0O79xga109csaCpAK3KDiW7g+mY/ELL/WcZCFfipmRiJgFZinsFHwMXNBK5je1SwSHl2po3VENBKzDWjG3FRQkCXY8chsBvX0NY4LrFQeb5KA1kX0Dq5zip8DVweE8gHDkis5Qxb1cbJQRvbyASyLDHxPHBNLIRxQD53qpUjSZCxgE4+/BKfSDwSE+CU4FlydDSSEmsn61/KCok1wPhoHIP3vRwtSXIUD1jkbhNbYwIPy6FgMWWeE8wyY3emwFthGHuP+SY2x6TJUXnMVwt7G+3iMED3QSuzBXgw4tgjn6V6MgAfEtIOJpvPLgg0cZ887lALf9fYlGkzC8BrNNOgnMmTbw6wzFVuJ6K5V+9ILA1g/ZQ5pF5mqY3D9SCH72CRxSY+BLJD28RxwX0q8N2wXEoB6HysyEyDLyNHfXpAdj5PDVgp8aYIKjD8/KBe7gpXa7Vq0wLW2g2t3ViTKdCeGtAv8xnGwzU5BB9k8iwLLgdF5iGuGHzve1won2cQl2EcNo93PJ+e0O4fosB2V61+iS+AeTWxjY2ZAk+nByyxA7gnArg+k2elFbnaFFTd1CT9Cr2vFk6lxNuCFRHfnV6ee88OYH8BuTycdhYBt3t55qcGrJToEjxe4yC2eDkWBMnewWQqNX15UqBzMAPYL2MpcKzqn+HooOz4DU4nPWCRdonVEYdYfRsETtLBwG4jl9gY9gDXhmML2pTn3dSAFt9FegQLlGf7iGWmzKNmdNbIF5yS8YAKQc+PfYbr4CamWCYQandk4We3xjA3ejtOJdT9EuMgbonE3K8Kt6uVP1MDOsNKkdckXoo4+WZs8PKsCjf4GkDjR8FsFYZycODisU5iOeBFJOb1TIGXGxVc/GWhzAwzvgGmR5x7DVZ7OdbWQJaZis8EQgUR5F1/i3tV4oWY2eWgKsxWKwebBgx2scQawSvRVQPuLrhNWQp6gr/qHs0mplsmyLk5MTH6XLdSnvVJclX/wtrFOOvlU+D+OkF6gV2CbjJ8Tx99ZMnSxywTi4GZdSa+wXB7VGFBo/zrP4UGfxbMFYzHDsTNSSsd4ftEyOShqZNp5rMN49YRQiS5NYRMBAy22c3EleCWk4vJpyQA994NVa4YnEjXVPKAc13IVICDBFbmRrMgsW9LCeoK6lsZrfzOL/401rnO0QxkU4BV0E1M8bM8Jp9FiCuBSQMfdUDHMA66mcar0BWe3IJBqknIEQGmOdP6nSHQxljhjjvu/xwwJOB1IcPD1DkBTAG5VyeZo1X0nDPARpAmPs7kWJIo1KPJtbS+A/36DYmVQedxF44KD+kpfj0vAKvK4P7pjGW8cvxRe+MZaHVpV3wu7P4FjSUI5qMsu14AAAAASUVORK5CYII=
// @license      MIT
// @match        *://**/*
// @require     https://greasyfork.org/scripts/447533-findandreplacedomtext-v-0-4-6/code/findAndReplaceDOMText%20v%20046.js?version=1085855
// @connect     *
// @exclude	    *://www.52pojie.cn/*
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
// @exclude	    *.qq.com/*
// @exclude	    *.live.com/*
// @exclude	    *docs.google.com/*
// @exclude	    *.kdocs.cn/*
// @exclude	    *baike.baidu.com//*
// @exclude	    *.wikipedia.org/*
// @exclude     *://*.amazon.tld/*
// @exclude	    *.flightradar24.com/*
// @exclude	    https://regex101.com/
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @run-at      document-end

// ==/UserScript==

(function() {
    'use strict';

    var timerGetInfo;   // 延时获取信息
    var timerMouseLeave;    // 鼠标进入菜单时的定时器, 超时不进入, 菜单消失
    var avInfo = {};    // 临时存储相关信息
    var localInfo = {}; // 从本地获取到的番号信息, 只在判断是否本地存在和存储信息时使用
    var Trans = {       // 临时存储翻译的相关信息
        id:"",
        transText:"",
        trans:[]
    }
    var allHTML = document.querySelector("body");   // 获取网页
    
    // 取出本地的信息 
    localInfo = GM_getValue("avInfo2");
    if(!localInfo){
        GM_setValue("avInfo2",{});
        localInfo = {};
    }
    
    // setting: 相关设置选项
    var setting = GM_getValue("_setting");  
    if(!setting || JSON.stringify(setting) == "{}"){
        setting = {
            "version":1,
            "list":[
                ["JavMenu 搜索","https://javmenu.com/zh/search?wd=%s"],
                ["JavLib 搜索","http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=%s"],
                ["JavDB 搜索","https://javdb.com/search?q=%s&f=all"],
                ["Jable 在线","https://jable.tv/search/%s/"],
                ["btsow 下载","https://btsow.com/search/%s"]
            ]
        }
        GM_setValue("_setting",setting);
    }
    
    // 测试用
    var debug = setting.debug?setting.debug:false
    // debug = true;   // 打开一些console.log提示
    if(debug) {var searchTimes = 0; var avIDTimes=0};    // 计数, 查看有多少番号。searchTimes: 通过正则搜索到的次数。 avIDTimes:最后的实际匹配的番号数量
    
    // 一般发行番号
    // var oRegExp = /[a-zA-Z]{2,6}[-\s]?\d{2,5}/gi; 
    var oRegExp = /(?<!\w|\/|www\.|col-)(?!heyzo|SHINKI|JPNXXX|carib)[a-zA-Z]{2,6}-\d{2,5}(?:-c|_c|-4k)?(?!\d|[A-Za-z]{2,}|[0-9]|-\d|\.com)|(?<!\w|\/|\.|#|www\.)(?!heyzo|SHINKI|JPNXXX|carib|and)[a-zA-Z]{2,6}\s?\d{3,4}(?:-c|_c)?(?!\d|[A-Za-z]|[0-9]|-|\.|％|%|歳| 歲|分| Min| day| time|cm| ppi|\.com)|(?<!\w)(?:PARATHD|3DSVR)[-\s]?\d{3,4}(?!\w)|(?<!\w)(?:HIMEMIX|CASMANI)[-\s]?\d{3}(?!\w)|(?<!\w|\d-|\/)\d{6}-\d{2,3}(?!\w|-\d)|(?<!\w|\d-)\d{6}_(?:1)?\d{3}_0[12](?!\w|-\d)/gi; 
    // 省略字母, 连续数字的番号 例: abc-001、002、003
    var oRegExp2 = /(?<=(?<!\w|\d-)([a-zA-Z]{2,6})(?:[\s,、-]?(?!2022|2021|2020|2019)\d{3,4})+(?!\d)[\s,、和]?)\d{3,4}(?!\w|％|%|人|年|歳|万|の)/gmi
    // 一些素人、无码番号, 仅跳转到javdb搜索, 无菜单等其他功能    
    var oRegExp_OnlyJump = /(?<!\w|-|\/)\d{3}[a-zA-Z]{2,5}[-\s]?\d{3,4}(?!\w|\d|-)|(?<!\w|\/)FC2[^\d]{0,5}\d{6,7}|HEYZO[_-\s]?(?:hd_)?\d{4}|HEYDOUGA[_-\s]?\d{4}-\d{3}|(?<!\w)(?:carib|1pondo)[-_]\d{6}[-_]\d{2,3}(?!\w)|(?<!\w|\d-)\d{6}_\d{2,3}(?:-paco)?(?!\w|-)|(?<!\w)T28-\d{3}|(?<!\w)(?:k|n)\d{4}(?!\w|-)|(?<!\w)T-\d{5}(?!\w|-)|(?<!\w|-|\/)[01]\d{5}-[a-zA-Z]{2,7}(?!\w|-)|(?<!\w)MKD-S\d{2,3}(?!\w|-)|(?:SHINKI|KITAIKE)[-\s]?\d{3}(?!\w|-)|JPNXXX[-\s]?\d{5}(?!\w|-)|xxx-av[-\s]\d{4,5}(?!\w|-)|(?<!\w)crazyasia\d{5}(?!\w|-)|(?<!\w)PEWORLD\d{5}(?!\w|-)|(?<!\w)MKBD-S\d{2,3}|(?<!\w)\d{6}[-_]?_01(?=-10mu)/gi;
    // 省略写的fc2番号 例: fc2-123456 567890
    var oRegExp_OnlyJump2 = /(?<=(FC2[^\d]{0,5})(?:\d{6,7})+[\s,、]?)\d{6,7}/gmi
    // 排除在此的关键词。 个别与番号同名的也被排除, 例如 Top-10 这种
    var oRegExp_Exclude = /^(?:aes|again|all|ak|akko|aptx|au|ax|avhd|bej|bd|by|cc|cctv|ckg|class|covid|cpu|code|df|ds|dx|er|emui|eof|ep|error|fc|file|flyme|fps|for|fuck|gbx|gnz|gp|gt|gts|gtx|hao|her|http|hp|ilc|ilce|imx|index|ipad|is|ISBN|iso|it|jav|javdb|jukujo|joy|lumia|lg|mh|miui|mvp|nc|next|note|ok|os|osx|ppv|qbz|qsz|rfc|rmb|row|rush|rx|sale|scp|shp|sn|snh|status|the|top|usc|vol|win|with|xfx)$/i
    // 在没有横杠的情况下, 会排除在此的关键词 例: 识别 tv-001  但是会排除 tv001
    var oRegExp_Special = /^(?:akb|am|be|best|bt|crc|girl|mk|mx|open|of|over|part|tv|sb|sex)$/i
    // 在没有横杠的情况下, 会排除在此的数字 100  720 2010-2023
    var oRegExp_Num = /^(?:007|100|110|115|123|128|256|365||512|911|996|\d00|19[89]\d|20[012]\d|720|1080|1024|2048)$/
    // 可能是素人番号
    var oRegExp_SuRen = /ANAN|ARA|BEAF|BKKJ|BSKC|BSKJ|CUTE|DAVC|DCV|DDH|ECSN|ENE|ERKR|EROFC|FKNP|FLC|FTHT|GANA|GESB|GRQR|GRMO|GRMR|HABJ|HHL|HMDNC|HMT|HOMEV|IMGN|IND|INSF|INSTC|JAC|JNT|JPNXXX|KING|KNB|LBJ|LOG|LUXU|MAAN|MCHT|MFC|MIUM|MKGF|MONA|NAEN|NMCH|NTK|NTR|OPCYN|OREC|ORECO|PAK|POK|PPZ|PRGO|REIW|RKD|SCOH|SGK|SHE|SHINKI|SIRO|SIROR|SIMM|SQB|SROM|SSK|STCV|STH|SUKE|TEN|TKOL|TKPR|WITH|\d{6}/i
    // 磁力链接
    var oRegExp_Magnet = /magnet:\?xt=urn:btih:[0-9a-fA-F]{40}|(?<!\w|\/|\|)[0-9a-fA-F]{40}(?!\w|-)/i

    // 对动态添加的dom进行检测
    var target = document.querySelector('body');    // 选择目标节点
    var config = {childList: true, characterData: true ,subtree:true,}; // 配置观察选项
    var observer = new window.MutationObserver(function(mutations) {    // 创建观察者对象  
        mutations.forEach(function(mutation) { 
            // if(debug){console.log("节点发生变化");console.log(mutation.target)}
            allHTML = mutation.target
            if(mutation.target.nodeType==1 && mutation.target.querySelector("savdiv")) return;
            findAVID()
        }); 
    }); 
    
    if(debug) {console.clear();console.log("sav已开启debug模式:");}
    findAVID()
    console.log("老司机共浏览了" + Object.keys(localInfo).length + "个番号！");
    if(!setting.dontCopyMagnet){findAndReplaceDOMTextFunMagnet();}

    // 
    function findAVID(){
        if(debug){console.time("正则查询用时");}
        observer.disconnect();  // 关闭对 dom 的监听
        findAndReplaceDOMTextFunOnlyJump2();    //// 查找连续的 fc2 番号。 例: fc2-123456 567890
        findAndReplaceDOMTextFunOnlyJump();  // 查找fc2、素人、无码等番号 (无菜单,点击后会跳转到javdb进行搜索)
        findAndReplaceDOMTextFun2();    // 省略字母, 连续数字的番号 例: abc-001、002、003
        findAndReplaceDOMTextFun();     // 查找普通番号  (与上面的顺序不能变,否则会导致 2函数 失效)
        observer.observe(target, config);   // 开启对 dom 的监听
        if(debug) {console.timeEnd("正则查询用时"); console.log("本页面通过正则匹配的有: " + searchTimes + " . 实际的番号数量: " + avIDTimes);}
    }


    // 查找番号, 匹配最基础的番号
    function findAndReplaceDOMTextFun(){
        // console.log(allHTML);
        findAndReplaceDOMText(allHTML, {
            find:oRegExp,
            preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            replace: function(portion,match) {
                if(debug) {searchTimes++; console.log(portion.text);}
                // 当番号介于两个HTML元素之中, 只作用最后一个
                if(portion.isEnd){
                    var otext = match[0];
                }else{
                    return "";
                }
                
                // 检查番号, 如果存在特殊英文或者数字,则退出
                if(IDcheck(otext)){return otext};

                var odiv = document.createElement('savdiv');
                odiv.classList.add("sav-id");
                odiv.addEventListener("mouseenter",savIDMouseEnter);    // 鼠标进入 开启菜单
                odiv.addEventListener("mouseleave",savIDMouseLeave);    // 鼠标离开 关闭菜单
                odiv.addEventListener("click",savIDClick);  // 点击番号复制
                
                // 自定义颜色
                var avID = formatAVID(otext)
                if(localInfo[avID]){
                    if(setting.visitedColor) odiv.style.color = setting.visitedColor;
                    odiv.style.textDecoration = setting.visitedTextDecoration?setting.visitedTextDecoration:"underline dotted green";
                }else{
                    if(setting.linkColor) odiv.style.color = setting.linkColor; // 自定义颜色
                    odiv.style.textDecoration = setting.linkTextDecoration?setting.linkTextDecoration:"underline green";    // 自定义下滑线
                }
                
                if(debug){avIDTimes++; console.log(avIDTimes + "番号: " + avID);otext = "["+avIDTimes +"]" + otext;}
                odiv.dataset.av = avID;       
                odiv.innerHTML = otext;
                return odiv;
            }
        });
    }
    // 省略字母, 连续数字的番号 例: abc-001、002、003
    function findAndReplaceDOMTextFun2(){
        findAndReplaceDOMText(allHTML,{
            find: oRegExp2,
            preset: "prose",
            forceContext:findAndReplaceDOMText.NON_INLINE_PROSE, 
            replace: function(portion,match){
                if(debug) {searchTimes++; console.log(match.index + ": " + portion.text);}
                var avID = match[1] + " " +match[0] // 视为无横杠番号
                
                // 检查番号, 如果存在特殊英文或者数字,则退出
                if(IDcheck(avID)){return match[0]};

                
                var odiv = document.createElement('savdiv');
                odiv.classList.add("sav-id");
                odiv.addEventListener("mouseenter",savIDMouseEnter);    // 鼠标进入 开启菜单
                odiv.addEventListener("mouseleave",savIDMouseLeave);    // 鼠标离开 关闭菜单
                odiv.addEventListener("click",savIDClick);  // 点击番号复制
                
                // 自定义颜色
                avID = formatAVID(avID)
                if(localInfo[avID]){
                    if(setting.visitedColor) odiv.style.color = setting.visitedColor;
                    odiv.style.textDecoration = setting.visitedTextDecoration?setting.visitedTextDecoration:"underline dotted green";
                }else{
                    if(setting.linkColor) odiv.style.color = setting.linkColor; // 自定义颜色
                    odiv.style.textDecoration = setting.linkTextDecoration?setting.linkTextDecoration:"underline green";    // 自定义下滑线
                }

                if(debug){avIDTimes++; console.log("省略字母,连续数字的番号: " + avID);portion.text = "[*"+avIDTimes +"]" + portion.text}
                odiv.dataset.av = avID;       
                odiv.innerHTML = portion.text;
                return odiv;
            }
        })
    }
    // 查找番号, 匹配fc2、MGSTAGE(259LUXU等)、一本道、东京热、HEYZO等
        // 只有一个功能就是跳转到 javdb 进行搜索, 没有菜单, 也没有其他任何功能
        // 关于heyzo, 如果是后面跟横杠会触发上面的基础查找, 只有中间没有横杠或者有下划线的情况才会匹配这个。
    function findAndReplaceDOMTextFunOnlyJump(){
        findAndReplaceDOMText(allHTML, {
            find:oRegExp_OnlyJump,
            preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            replace: function(portion,match) {
                // 当番号介于两个HTML元素之中, 只作用最后一个
                if(portion.isEnd){
                    var otext = match[0];
                }else{
                    return "";
                }
                // var avID = otext;
                // 对于一些无码番号需要修改后才能搜索
                var avID = otext.replace(/carib[-_]|1pondo[-_]|-paco|-carib|hd_/i,"");

                var odiv = document.createElement('savdiv');
                if(setting.onlyJumpLinkColor) odiv.style.color = setting.onlyJumpLinkColor;
                odiv.style.textDecoration = setting.onlyJumpLinkTextDecoration?setting.onlyJumpLinkTextDecoration:"underline #66ccff";
                if(avID.match(/fc2/i)){
                    avID = formatFC2(avID); // 格式化 fc2 番号
                    var fc2Link = "https://javmenu.com/search?wd=" + avID;
                    if(setting.fc2Link){
                        fc2Link = setting.fc2Link.replace("%s",avID);
                    }
                    odiv.setAttribute("onclick","window.open('"+ fc2Link + "');return false")
                } else{
                    odiv.setAttribute("onclick","window.open('https://javdb.com/search?q="+ avID + "&f=all');return false")
                }
                
                if(debug) {searchTimes++;avIDTimes++; console.log(avIDTimes + "直接跳转的番号: " + portion.text); otext = "[!"+avIDTimes +"]" + otext;}
                odiv.dataset.av = avID;
                odiv.innerHTML = otext;
                return odiv;
            }
        });
    }
    // 查找番号, 连续的 fc2 番号。 例: fc2-123456 567890
    function findAndReplaceDOMTextFunOnlyJump2(){
        findAndReplaceDOMText(allHTML, {
            find:oRegExp_OnlyJump2,
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
                avID = formatFC2(avID); // 格式化 fc2 番号
                var fc2Link = "https://javmenu.com/search?wd=" + avID;
                if(setting.fc2Link){
                    fc2Link = setting.fc2Link.replace("%s",avID);
                }

                var odiv = document.createElement('savdiv');
                if(setting.onlyJumpLinkColor) odiv.style.color = setting.onlyJumpLinkColor;
                odiv.style.textDecoration = setting.onlyJumpLinkTextDecoration?setting.onlyJumpLinkTextDecoration:"underline #66ccff";
                odiv.setAttribute("onclick","window.open('"+ fc2Link + "');return false")
                
                if(debug) {searchTimes++;avIDTimes++; console.log(avIDTimes + "直接跳转的番号: " + portion.text); otext = "[!"+avIDTimes +"]" + otext;}
                odiv.dataset.av = avID;
                odiv.innerHTML = otext;
                return odiv;
            }
        });
    }
    // 点击磁力链接, 可以复制到剪贴板
    function findAndReplaceDOMTextFunMagnet(){
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

                var odiv = document.createElement('savMagnet');
                odiv.addEventListener("click",function(){
                    GM_setClipboard(magnet);
                });
                odiv.style.textDecoration = "underline #D9B412"
                odiv.title = "点击复制磁力链接";
                odiv.innerHTML = otext;
                return odiv;
            }
        });
    }

    // 创建搜索基本菜单
    function createPattenr(id){
        var linkJavbusPage = "https://www.javbus.com/" + id;
        var aPattern =  "<avdiv class='savlink linkJavbusPage'>" + "<a href='" + linkJavbusPage +"' target='_blank' style='color:#459df5;'>JavBus 页面</a>" +"</avdiv>" ;
        var savList = setting.list;
        if(savList){
            for(let i=0; i<savList.length;i++){
                aPattern += "<avdiv class='savlink'>" + "<a href='" + savList[i][1].replace("%s", id) +" 'target='_blank' style='color:#459df5;'>" + savList[i][0] + "</a>" + "</avdiv>"
            }
        }
        if(debug){aPattern += "<avdiv class='savlink'>" + id + "</avdiv>"};
        var odiv = document.createElement("avdiv")
        odiv.classList.add("sav-menu");
        odiv.addEventListener("mouseenter",savMenuMouseEnter)
        odiv.addEventListener("mouseleave",savMenuMouseLeave)
        odiv.innerHTML=aPattern;
        return odiv;
    }

    // 点击番号复制
    function savIDClick(e){
        var avid = e.target.dataset.av
        if(avid){
            GM_setClipboard(avid)
        }
        e.preventDefault();
        return false;
    }

    // 鼠标经过番号
    function savIDMouseEnter(e){ 
        observer.disconnect();
        if(e.buttons != 0) return;  // 如果是按键的情况下划过番号, 则不触发
        avInfo = {};
        clearTimeout(timerMouseLeave);   
        clearTimeout(timerGetInfo);
        avmouseenter(e);
    }
    // 鼠标离开番号
    function savIDMouseLeave(e){ 
        observer.observe(target, config);    
        timerMouseLeave = setTimeout(function(){
            savMenuMouseLeave();
            clearTimeout(timerGetInfo);
        },250)

    }
    // 鼠标进入菜单
    function savMenuMouseEnter(e){  
        observer.disconnect();  
        clearTimeout(timerMouseLeave);
    }
    // 鼠标离开菜单
    function savMenuMouseLeave(e){
        var odiv = document.querySelector(".sav-menu");
        if(odiv){
            odiv.parentNode.removeChild(odiv);
            // console.log("移除");
        }
        avInfo = {};
        clearTimeout(timerGetInfo);
        observer.observe(target, config);     
    }

    // 鼠标滑过 显示菜单
    function avmouseenter(e){
        var avid = e.target.dataset.av;
        if(setting.visitedColor) e.target.style.color = setting.visitedColor;
        e.target.style.textDecoration = "underline dotted green";
        var avdiv = document.querySelector(".sav-menu")
        if(avdiv){
            avdiv.parentNode.removeChild(avdiv)
        }
        var oPosition = e.target.getBoundingClientRect()
        var odiv = createPattenr(avid);
        // e.target.appendChild(odiv);
        document.body.appendChild(odiv);
        odiv.style.left = oPosition.x + "px";
        odiv.style.top = oPosition.y + oPosition.height + "px";
        odiv.style.position = "fixed";
        
        if(localInfo[avid]){
            avInfo = localInfo[avid];
            timerGetInfo = setTimeout(() => {  
                getInfo(avid);
            }, 500);
        } else{
            timerGetInfo = setTimeout(() => {
                getInfo(avid,true);
            }, 300);
        }
        
        var otherInfo = document.createElement('avdivsInfo');
        otherInfo.innerHTML=addOtherInfo();
        odiv.appendChild(otherInfo);
        
        e.target.parentNode.title = "";
        e.target.parentNode.parentNode.title = "";
        settingPostion();  //重置位置
    }

    // 鼠标选中 显示菜单
    document.onmouseup = function(e){
        if(e.button !=0) return;    // 排除非左键点击
        if(document.activeElement.tagName.toUpperCase() == "INPUT" || document.activeElement.tagName.toUpperCase() == "TEXTAREA") return;   // 排除inpu和textarea内的文本
        if(document.querySelector(".sav-menu")) return; //如果已经存在菜单, 退出
        
        var selectText = window.getSelection().toString().trim();
        var selectLength = setting.selectLength?setting.selectLength:10;
        if (selectText.length > selectLength) return; //如果复制的文字过长,退出。避免复制网址时自己弹出。
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
            timerGetInfo = setTimeout(() => {
                getInfo(avid);
            }, 500);
        } else{
            timerGetInfo = setTimeout(() => {
                getInfo(avid,true);
            }, 300);
        }
        
        var otherInfo = document.createElement('avdivsInfo');
        otherInfo.innerHTML=addOtherInfo();
        odiv.appendChild(otherInfo);
        document.body.appendChild(odiv);
        
        // settingPostion();  //重置位置
    }

    // 调整距离底部的距离,以防越界
    function settingPostion(){
        var odiv = document.querySelector(".sav-menu");
        if(!odiv)  return;
        var oClient = odiv.getBoundingClientRect()
        var oTop = oClient.top;
        var oHeight = oClient.height;   //自身高度
        // var oWidth = oClient.Width;  // 自身宽度
        var winHeight = document.documentElement.clientHeight;  //可视窗口高度
        var winWidth = document.documentElement.clientWidth;    //可视窗口宽度
        if(oTop + oHeight > winHeight){ // 越出了屏幕底边
            odiv.style.position = "fixed";
            odiv.style.top = "unset";
            odiv.style.bottom = 0;
        }else if(oClient.x<0){   //左边
            odiv.style.position = "fixed";
            odiv.style.left = 0;
        }else if(winWidth-oClient.x<600){  // 越出了屏幕右边
            odiv.style.position = "fixed";
            odiv.style.right = 0;
            odiv.style.left = "";
        }
    }

    // 获取番号相关的信息, 添加图片,调用其他函数添加信息
    function getInfo(avID,oFirstBrowse){
        // console.log("从网络获取信息中: " + avID);
        if(setting.dontGetInfo){return;};
        GM_xmlhttpRequest({
            method: 'get',
            url: 'https://www.javbus.com/' + avID,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {
                // 相关代码地址 https://greasyfork.org/zh-CN/scripts/376884
                // 名称: 显示防盗链图片 for Inoreader
                // 作者: maboloshi
                var meta = document.createElement('meta');
                meta.name = "referrer";
                meta.content = "no-referrer";
                document.getElementsByTagName('head')[0].appendChild(meta);

                // javbus 对于番号中002简写成02的会识别错误, 只认准确的番号。 一些网友分享的番号会简写, 此处做个判断。不能全部补全, 因为以前的番号确实有两位数字的, 补全后javbus不识别。
                if(data.status==404 && avID.length - avID.indexOf("-") ==3){
                    // 将错误番号存储到本地
                    localInfo[avID] = {};   
                    localInfo[avID].title = "番号可能存在问题";
                    setTimeout(() => {
                        var avdivinfo = document.querySelector("avdivsinfo");
                        avdivinfo.parentNode.removeChild(avdivinfo);
                    }, 300);
                    GM_setValue("avInfo2",localInfo)
                    // 重新获取信息
                    getInfo(avID.replace("-","-0"),true);
                    var linkJavbusPageLink = document.querySelector(".linkJavbusPage a");
                    if(linkJavbusPageLink){
                        linkJavbusPageLink.href = linkJavbusPageLink.href.replace("-","-0");
                    }
                    return
                }

                var parser=new DOMParser();
                var htmlDoc=parser.parseFromString(data.responseText, "text/html");
                // console.log("data.status:");

                // 番号
                avInfo.id = avID;
                // 标题
                avInfo.title = htmlDoc.title.replace(avID,"").replace(" - JavBus","");
                // 获取演员名字
                var starNameList = htmlDoc.querySelectorAll(".star-name");
                var starName = [];
                for(var i=0;i<starNameList.length;i++){
                    starName.push(starNameList[i].querySelector("a").innerHTML);
                }
                avInfo.starName = starName;
                // 获取标签
                var tagList = htmlDoc.querySelectorAll("input[name='gr_sel']");
                var tags = [];
                for(var i=0;i<tagList.length;i++){
                    tags.push(tagList[i].nextSibling.innerHTML);
                }
                avInfo.tags = tags;
                // 其他: 发行日期和系列  此处的“发行日期”必须是繁体, 因为是匹配的具体的字。
                var other = htmlDoc.querySelectorAll(".header");
                for(var i=0;i<other.length;i++){
                    if(other[i].innerHTML=="發行日期:"){
                        avInfo.date = other[i].parentNode.innerText.replace("發行日期","日期");
                    }
                    if(other[i].innerHTML=="系列:"){
                        avInfo.series = other[i].parentNode.innerText
                    }
                }
                // 封面
                var image = htmlDoc.querySelector(".bigImage img");
                if(!image){ // 图片加载失败就判定网页404, 将具体的番号页面替换为搜索
                    var linkJavbusPageLink = document.querySelector(".linkJavbusPage a");
                    if(linkJavbusPageLink){
                        linkJavbusPageLink.href = "https://www.javbus.com/search/" + avID;
                        linkJavbusPageLink.innerHTML = "JavBus 搜索";
                    }
                }else{
                    var imgSrc = image.src;
                    var imgNum = imgSrc.search(/(imgs|pics)/i);
                    imgSrc = imgSrc.slice(imgNum);
                    image.src = "https://www.javbus.com/" + imgSrc;
                    image.removeAttribute("title");     //鼠标经过的时候会触发离开事件,所以删掉
                    image.classList.add("avimg");
                }
                
                // 标题翻译
                if(data.status==404){
                    if(avID.search(oRegExp_SuRen)>-1){
                        avInfo.titleTrans = "未收录,疑似素人番号,请前往 <a target='_blank' style='text-decoration:underline' href='https://javdb.com/search?q="+ avID + "&f=all'> javdb 搜索</a>";
                    }else{
                        avInfo.titleTrans = "没有找到相关页面";
                    }
                }else if(setting.dontTransTitle){
                    if(debug){console.log("禁止翻译标题 ✖  ✖  ✖ ");}
                    avInfo.titleTrans = avInfo.title;
                }else if(!avInfo.titleTrans){   // 如果本地存在翻译, 就不再重复翻译
                    if(debug) console.log("开始翻译标题");
                    Trans.id = avID;
                    Trans.transText=avInfo.title;
                    googleTrans();
                }

                localInfo[avID] = {};   // 重置,防止在一个页面重复划过番号导致系列、发行日期等重复显示。
                localInfo[avID].titleTrans = avInfo.titleTrans;
                localInfo[avID].starName = avInfo.starName;
                // 第一次浏览番号,将信息保存到本地
                if(oFirstBrowse){
                    GM_setValue("avInfo2",localInfo);
                }

                if(!document.querySelector(".sav-menu")){return};
                // 判断是否重复加载图片
                if(document.querySelector(".avimg")){return};

                // console.log("获取到的所有信息: ");
                // console.log(avInfo);
                // console.log("------------------");
                var otherInfo = document.createElement('avdivsInfo');
                otherInfo.innerHTML = addOtherInfo()
                if(image){otherInfo.appendChild(image);};
                document.querySelector(".sav-menu").appendChild(otherInfo);

                // 每200毫秒检查1次, 3s后停止检查
                const interval = setInterval(settingPostion,200);
                setTimeout(() => { 
                    clearInterval(interval)
                }, 3000)
            }
        });
    }

    // 在菜单中添加番号相关的信息
    function addOtherInfo(){
        var tempTitle = document.querySelector(".sav-title"); //判断之前是否已经添加了标题
        var tempActors = document.querySelector(".sav-actors"); //判断之前是否已经添加了演员
        var actors = ""
        var str = "";
        if(!tempActors){
            if(avInfo.starName && avInfo.starName.length>0){
                for(var i=0;i<avInfo.starName.length;i++){
                    // actors += "<a target='_blank' style='text-decoration:underline' title='' href='https://xslist.org/search?query=" + avInfo.starName[i] + "&lg=zh'>"+ avInfo.starName[i] + "</a>, ";
                    actors += "<a target='_blank' style='text-decoration:underline' title='' href='https://db.msin.jp/jp.search/actress?str=" + avInfo.starName[i] + "'>"+ avInfo.starName[i] + "</a>, ";
                }
                actors = actors.slice(0,actors.length-2);
                str += "<avdiv class='sav-actors'>演员: " + actors + "</avdiv>"
            }
        }
        if(!tempTitle){    //判断之前是否已经添加了标题
            if(avInfo.titleTrans){
                str += "<avdiv class='sav-title' id='searchAVMenuTitle'>标题: " + avInfo.titleTrans + "</avdiv>"
            }else if(avInfo.title){
                str += "<avdiv class='sav-title' id='searchAVMenuTitle'>标题: " + avInfo.title + "</avdiv>"
            }
        }
        if(avInfo.tags && avInfo.tags.length>0){
            str += "<avdiv>标签: " + avInfo.tags + "</avdiv>"
        }
        if(avInfo.series){
            str += "<avdiv>" + avInfo.series + "</avdiv>"
        }
        if(avInfo.date){
            str += "<avdiv>" + avInfo.date + "</avdiv>"
        }
        str += ""
        return str;
    }

    // 格式化番号, 添加中间的横杠
    function formatAVID(otext){
        otext = otext.replace(/-c|_c|-4k/i,"").replace(/\s+/g,"")
        if(otext.indexOf("-")<0){
            var oindex = otext.search(/\d/);
            if(oindex>0){
                otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
            }
        }
        return otext.toUpperCase();
    }
    // 格式化 FC2 番号
    function formatFC2(otext){
        otext = otext.replace(/\s+/g,"");
        if(otext.indexOf("-")<0){
            var oindex = otext.search(/(?<!fc)\d/i);
            otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
        }
        return otext.toUpperCase();
    }

    // 检查番号是否合规
    function IDcheck(otext){
        var oNoHyphen = otext.indexOf("-"); // 如果没有,返回-1
        var oOnlyText = otext.replace(/[^a-zA-Z]/gi,"");    // 番号中的英文
        var oOnlyNum = otext.replace(/[^0-9]/ig,"");    // 番号中的数字
        var oExclude = oOnlyText.match(oRegExp_Exclude)    // 排除所有包含在此的关键词, 和番号重名的没有排除:  例: covid-19 win10
        var oSpecial = oOnlyText.match(oRegExp_Special)    // 没有横杠的情况下, 会排除在此的关键词 
        // if(debug) console.table([{name:"完整番号",value:otext},{name:"英文",value:oOnlyText},{name:"数字",value:oOnlyNum},{name:"是否有横杠",value:oNoHyphen},{name:"是否排除",value:oExclude},{name:"占位",value:"占位"}]);

        if(oExclude || oOnlyNum=="000" || oOnlyNum=="00"){    // 包含关键词 oRegExp_Exclude 的情况下, 跳过. 数字完全是000的情况下跳过
            if(debug) {console.log("存在排除词,略过: " + oOnlyText);}
            return true;
        }
        if(oNoHyphen<0){
            // 没有横杠的情况下, 含有需要排除的数字
            if(oOnlyNum.match(oRegExp_Num)){
                if(debug) {console.log("无横杠,且存在需要排除的数字,略过: " + oOnlyNum);}
                return true;
            }
            // 没有横杠的情况下, 并且含有关键词 oRegExp_Special
            if(oSpecial){
                if(debug) {console.log("无横杠,且有关键词,略过: " + oOnlyText);}
                return true;
            }
        }
        return false;
    }

    // 脚本 “网页翻译助手” 
    // 作者 Johnny Li 
    // version:1.2.9, 
    // https://greasyfork.org/zh-CN/scripts/389784 
    // 许可协议 MIT
    function googleTrans() {
        var h_url = "";
        var googleTransApi = "https://translate.google.cn/translate_a/single?client=gtx&dt=t&dj=1&sl=auto&tl=zh-CN&hl=zh-CN";
        h_url = googleTransApi + "&q=" + encodeURIComponent(Trans.transText);

        GM_xmlhttpRequest({
            method: "GET",
            url: h_url,
            onload: function (r) {
                setTimeout(function () {
                    var data = JSON.parse(r.responseText);
                    var trans = [];
                    for (var i = 0; i < data.sentences.length; i++) {
                        var getransCont = data.sentences[i];
                        trans.push(getransCont.trans);
                    }
                    Trans.trans = trans;
                    // console.log("翻译结果:");
                    // console.log(trans[0]);

                    localInfo[Trans.id].titleTrans = trans;
                    GM_setValue("avInfo2",localInfo);
                    if(document.querySelector("#searchAVMenuTitle")){
                        document.querySelector("#searchAVMenuTitle").innerHTML = "标题(译): " + trans;
                    }
                }, 300);
            },
            onerror: function (e) {
                console.error(e);
            }
        });
    }

    // 菜单
    // 菜单编辑
    function savBoxEdit(){
        var editbox = document.createElement("div");
        editbox.id = "sav-editCodeBox";
        editbox.style.cssText = "position:fixed;" +
        "z-index:9;" +
        "top:50%;left:50%;" +
        "transform:translate(-50%,-50%);" +
        "background:#ccc;" +
        "border-radius:4px;" +
        "padding:10px 20px;" ;
        var innerH = " "+
        "<p>搜索词用 %s 代替 <br>格式是 JSON ,修改时注意中英文标点符号 尤其有无逗号 <br>点击保存无反应,大概率是修改错误, 可以去<a href='https://greasyfork.org/zh-CN/scripts/423350/feedback'>论坛求助</a> </p>" +
        "<textarea wrap='off' cols='66' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify( GM_getValue("_setting"),false,4) + "</textarea>" +
        "<br>" +
        "<p>老司机共浏览了" + Object.keys(localInfo).length + "个番号！</p>" +
        "<button id='savDebug' >供测试使用</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savSetting' >清空设置</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savHistory' >清空浏览历史</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savEditBoxCloase' >关闭</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='savEditBoxSave' >保存</button>" +
        "";
        editbox.innerHTML = innerH;
        editbox.querySelector("#savDebug").addEventListener("click",savDebug)
        editbox.querySelector("#savSetting").addEventListener("click",clearSetting)
        editbox.querySelector("#savHistory").addEventListener("click",clearHistory)
        editbox.querySelector("#savEditBoxCloase").addEventListener("click",savBoxClose)
        editbox.querySelector("#savEditBoxSave").addEventListener("click",savBoxSave)
        document.body.appendChild(editbox);
    }
    // 菜单保存
    function savBoxSave(){
        var codevalue = document.querySelector("#sav-editCodeBox textarea").value;
        if(codevalue){
            GM_setValue("_setting",JSON.parse(codevalue));
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
            "selectLength":16,  // 选中搜索的字符长度。超过该长度的会忽略掉, 设置0可以关闭划词搜索。 
                                // 设置更大的数字,例如16,可以应对一些超长的番号。
            "linkColor": "red", // 一般番号, 没有浏览过的颜色
            "linkTextDecoration": "underline red",   // 一般番号, 没有浏览过的下划线样式
            "visitedColor": "green", //一般番号, 浏览过的字体颜色
            "visitedTextDecoration": "underline dotted green",   // 一般番号, 浏览过的下划线样式
            "onlyJumpLinkColor": "#66ccff", // 特殊番号(素人、稀缺、无码等所有直接跳转的番号)  字体颜色
            "onlyJumpLinkTextDecoration": "underline #66ccff",   // 特殊番号(……) 下划线颜色
            "dontGetInfo":false,    // 获取番号的相关信息(标题、演员、封面图等)
            "dontCopyMagnet":false, // 点击磁链复制到剪贴板
            "dontTransTitle":false, // 翻译标题
            "fc2Link": "https://javmenu.com/search?wd=%s",  // 自定义 fc2 跳转链接
        }
        Object.assign(debug_setting,setting);
        document.querySelector("#sav-editCodeBox textarea").value = JSON.stringify(debug_setting,false,4)
    }
    // 清空设置
    function clearSetting(){
        GM_deleteValue("_setting");
        localInfo = {}
        savBoxClose()
        location.reload();
    }
    // 清除浏览历史
    function clearHistory(){
        GM_setValue("avInfo2",{});
        localInfo = {}
        savBoxClose()
    }
    GM_registerMenuCommand("自定义搜索", savBoxEdit)

    GM_addStyle("" +
                ".sav-menu{" +
                    "display: block;" +
                    "text-align: left;" +
                    "color: #000;" +
                    "background:rgba(255,255,255,.8);" +
                    "backdrop-filter: blur(5px);" +
                    "border:1px solid #cafaff;" +
                    "border-radius: 4px;" +
                    "padding:6px;" +
                    "margin-top: -2px; " +
                    "z-index: 99999; " +
                    "font-size: 14px;" +
                    "max-width:666px;" +
                    "box-shadow: 6px 6px 6px #ccc,-3px -3px 6px #ffffff6b;" +
                    "transition:0.5s;" +
                "}" +
                ".savlink{" +
                    "margin: 4px 10px 4px 5px;" +
                    "border-radius: 4px;" +
                    "padding: 3px 5px;" +
                    "background: #fff;" +
                    "display: inline-block;" +
                    "transition: 0.2s;" +
                    "box-shadow: -2px -2px 6px rgb(255 255 255 / 50%), 2px 2px 10px rgb(70 70 70 / 50%);" +
                "}" +
                ".savlink:hover{" +
                    "background: aliceblue;" +
                    "box-shadow: -2px -2px 6px rgb(255 255 255 / 50%), 2px 2px 10px rgb(70 70 70 / 50%), inset -2px -2px 6px rgb(255 255 255 / 50%),inset 2px 2px 6px rgb(100 100 100 / 50%);" +
                "}" +
                ".savlink a{" +
                    "text-decoration:none;" +
                "}" +
                "avdivsinfo avdiv{" +
                    "display:block;" +
                    "margin-bottom: 5px;" +
                "}" +
                "avdiv.sav-menu img{" +
                    "height: 100%;" +
                    "max-width: 100%;" +
                    "box-shadow: -5px -5px 15px rgb(255 255 255 / 50%), 2px 2px 10px rgb(70 70 70 / 50%);" +
                "}" +
                ".sav-menu a:link," +
                ".sav-menu a:visited{" +
                    "color: #000" +
                "}" +
                ".savdisabled a{" +
                    "pointer-events:none;" +
                    "text-decoration: line-through;" +
                    "color: #000; " +
                "}" +
                "savdiv," +
                "savMagnet {" +
                    "cursor: pointer;" +
                "}" +
                // 根据子元素选择父元素。 2022-08-02 现版本的edge和chrome都不支持,  chrome的105版本据说已经支持, 不过目前下载到的是103
                "u:has(savdiv){" +
                    "text-decoration: none;" +
                "}" +
    "");

})();
