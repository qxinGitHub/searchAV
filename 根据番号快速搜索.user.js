// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.10.2
// @description  标记网页上的所有番号, 在相关网站快速方便的进行搜索
// @author       iqxin
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABLdJREFUWEftmG2IVGUUx3//O6MZapIftJTeKAqDiqiPGllZSdqHXsw3KmNnpm1LzYqgAleoMAJLw2xmdtsKqS3BkIy0QDSS6FNIkAgRilhUkPjGprtzTzx3d2fv3L0z986upB+6X+855/6e5znnf55zZWYTOY8fOUBJJ85HxoDtf8BRHM2odtAM0cF0fC6oMnicpoUjEjYKrqpr04DWxTjOsNQ8Chg3AWNiQHoR++RTZCybtYx/RgqbGtA6mej3sVziRaCZqj9h0O79xga109csaCpAK3KDiW7g+mY/ELL/WcZCFfipmRiJgFZinsFHwMXNBK5je1SwSHl2po3VENBKzDWjG3FRQkCXY8chsBvX0NY4LrFQeb5KA1kX0Dq5zip8DVweE8gHDkis5Qxb1cbJQRvbyASyLDHxPHBNLIRxQD53qpUjSZCxgE4+/BKfSDwSE+CU4FlydDSSEmsn61/KCok1wPhoHIP3vRwtSXIUD1jkbhNbYwIPy6FgMWWeE8wyY3emwFthGHuP+SY2x6TJUXnMVwt7G+3iMED3QSuzBXgw4tgjn6V6MgAfEtIOJpvPLgg0cZ887lALf9fYlGkzC8BrNNOgnMmTbw6wzFVuJ6K5V+9ILA1g/ZQ5pF5mqY3D9SCH72CRxSY+BLJD28RxwX0q8N2wXEoB6HysyEyDLyNHfXpAdj5PDVgp8aYIKjD8/KBe7gpXa7Vq0wLW2g2t3ViTKdCeGtAv8xnGwzU5BB9k8iwLLgdF5iGuGHzve1won2cQl2EcNo93PJ+e0O4fosB2V61+iS+AeTWxjY2ZAk+nByyxA7gnArg+k2elFbnaFFTd1CT9Cr2vFk6lxNuCFRHfnV6ee88OYH8BuTycdhYBt3t55qcGrJToEjxe4yC2eDkWBMnewWQqNX15UqBzMAPYL2MpcKzqn+HooOz4DU4nPWCRdonVEYdYfRsETtLBwG4jl9gY9gDXhmML2pTn3dSAFt9FegQLlGf7iGWmzKNmdNbIF5yS8YAKQc+PfYbr4CamWCYQandk4We3xjA3ejtOJdT9EuMgbonE3K8Kt6uVP1MDOsNKkdckXoo4+WZs8PKsCjf4GkDjR8FsFYZycODisU5iOeBFJOb1TIGXGxVc/GWhzAwzvgGmR5x7DVZ7OdbWQJaZis8EQgUR5F1/i3tV4oWY2eWgKsxWKwebBgx2scQawSvRVQPuLrhNWQp6gr/qHs0mplsmyLk5MTH6XLdSnvVJclX/wtrFOOvlU+D+OkF6gV2CbjJ8Tx99ZMnSxywTi4GZdSa+wXB7VGFBo/zrP4UGfxbMFYzHDsTNSSsd4ftEyOShqZNp5rMN49YRQiS5NYRMBAy22c3EleCWk4vJpyQA994NVa4YnEjXVPKAc13IVICDBFbmRrMgsW9LCeoK6lsZrfzOL/401rnO0QxkU4BV0E1M8bM8Jp9FiCuBSQMfdUDHMA66mcar0BWe3IJBqknIEQGmOdP6nSHQxljhjjvu/xwwJOB1IcPD1DkBTAG5VyeZo1X0nDPARpAmPs7kWJIo1KPJtbS+A/36DYmVQedxF44KD+kpfj0vAKvK4P7pjGW8cvxRe+MZaHVpV3wu7P4FjSUI5qMsu14AAAAASUVORK5CYII=
// @license      MIT
// @match        *://**/*
// @require     https://greasyfork.org/scripts/447533-findandreplacedomtext-v-0-4-6/code/findAndReplaceDOMText%20v%20046.js?version=1067927
// @connect     *
// @exclude	    *://www.52pojie.cn/*
// @exclude	    *://meta.appinn.net/*
// @exclude	    *://v2ex.com/*
// @exclude	    *://www.v2ex.com/*
// @exclude	    *://greasyfork.org/*
// @exclude	    *://bilibili.com/*
// @exclude	    *://www.bilibili.com/*
// @exclude	    *://www.douyin.com/*
// @exclude	    *.1688.com/*
// @exclude	    *.taobao.com/*
// @exclude	    *.jd.com/*
// @exclude	    *.smzdm.com/*
// @exclude	    *.zhihu.com/*
// @exclude	    *.qq.com/*
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

    // 获取网页
    var allHTML = document.querySelector("body");

    // 删掉以前保存的信息 v0.8.5 2022-07-05
    if(GM_getValue("avInfo")) {
        GM_deleteValue("avInfo")
    }
    
    // 取出本地的信息 
    localInfo = GM_getValue("avInfo2");
    if(!localInfo){
        GM_setValue("avInfo2",{});
        localInfo = {};
    }
    console.log("老司机共浏览了" + Object.keys(localInfo).length + "个番号！");
    
    // 自定义搜索列表
        // 如果是想自定义搜索列表, 去设置里改, 不要改动此处
    var setting = GM_getValue("_setting");  // setting: 相关设置选项, 现在只有搜索列表
    if(!setting){
        setting = {
            "version":1,
            "list":[
                ["FreeJav 搜索","https://freejavbt.com/%s"],
                ["JavLib 搜索","http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=%s"],
                ["JavDB 搜索","https://javdb.com/search?q=%s&f=all"],
                ["Jable 在线","https://jable.tv/search/%s/"],
                ["btsow 下载","https://btsow.com/search/%s"]
            ]
        }
        GM_setValue("_setting",setting);
    }

    // 对于一些网站,可能需要第二种正则来匹配
    // var oregExp = /(?<!(\w|-))[a-z|A-Z]{2,5}[-\s]?\d{2,5}(?!(\w|\d|-))/gi;  // 可以避免很多误报
    var oregExp = /(?<!(\w|-))(?!SCUTE|LUXU|MIUM|DCV)[a-z|A-Z]{2,5}[-\s]?\d{2,5}(?!\d|[A-BD-Za-bd-z0-9]|-)/gi;  // 可以避免很多误报
    var oregExp2 = /[a-z|A-Z]{2,5}-?\d{2,4}/gi;     //更容易将字符串识别成番号, 误报比较严重
    var webList = [
        // https://xslist.org/zh/model/69636.html
        /^https?:\/\/xslist\.org\//,
        /^https?:\/\/192\.168\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
    ]
    var webListTag = webList.some(function hashUrl(element, index, array){
            return ~window.location.href.search(element);
        });
    if(webListTag){
        oregExp = oregExp2;
    }

    findAndReplaceDOMTextFun();     // 查找普通番号
    findAndReplaceDOMTextFunOnlyJump();  // 查找fc2等番号 (无菜单,点击后会跳转到javdb进行搜索)

    // 查找番号, 匹配最基础的番号
    function findAndReplaceDOMTextFun(){
        // console.log(allHTML);
        findAndReplaceDOMText(allHTML, {
            // find:/[a-z|A-Z]{2,5}-\d{2,4}/gi,
            find:oregExp,
            // preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
            // forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
            forceContext: function(el) {
                // 自定义隔断上下文, 如果前后文字在不同的<a>、<div>中, 判定为两段文字,不再合并判断。
                return el.matches('a,div');
              },
            replace: function(portion) {
                var otext = portion.text;
                if(otext.length<4) return otext;

                var odiv = document.createElement('avdiv');
                odiv.classList.add("sav-id");
                odiv.style.textDecoration = "underline green";
                odiv.addEventListener("mouseenter",savIDMouseEnter);    // 鼠标进入 开启菜单
                odiv.addEventListener("mouseleave",savIDMouseLeave);    // 鼠标离开 关闭菜单
                odiv.addEventListener("click",savIDClick);  // 点击番号复制
    
                var otemp = otext.indexOf("-"); // 如果没有,返回-1
                var oOnlyText = otext.replace(/[^a-zA-Z]/gi,""); //番号中的英文
                var oOnlyNum = otext.replace(/[^0-9]/ig,"");    // 番号中的数字
                // 排除所有包含在此的关键词 :  例: covid-19 win10
                var oExclude = oOnlyText.search(/^(cpu|dos|win|os|osx|ipad|lumia|miui|flyme|emui|note|snh|bej|gnz|ckg|akb|gp|gt|gts|gtx|covid|aptx|rx|mh|bmw|sn|au|cc|cctv|shp|hao|top|scp|iso|it|ilc|ILCE|ax|gbx|aes|nc|imx|xfx|fps|ds|error|hp|df|qbz|qsz|ak|jav|javdb)$/i)  
                //  和番号重名的没有排除: 
                // 操作系统:dos|win|os|osx|lumia|miui|flyme|emui
                // 特殊的:covid|aptx|rx|mh|bmw
                // 名称:snh|bej|gnz|ckg|akb
                // 显卡:gp|gt|gts|gtx
                // 真理:df|qbz|qsz|ak  例:太多,没有进行排除 https://zhidao.baidu.com/question/2051972899944030547.html?qbl=relate_question_0&word=%CE%E4%C6%F7%BC%F2%B3%C6
                // console.log(portion);
                // console.log("完整: " + otext);
                // console.log("英文: " + oOnlyText);
                // console.log("数字: " + oOnlyNum);
                // console.log("是否有横杠: " + otemp);
                // console.log("是否特殊: " + oSpecial);
                // console.log("是否排除: " + oExclude);

                if(oExclude>-1){    // 包含关键词的情况下, 跳过
                    return otext;
                }
                if(otemp<0 && oOnlyNum.length!=3){    // 没有横杠的情况,如果数字的个数是2个或者4个,不是番号的可能性更大些,选择跳过。
                    return otext;
                }

                // 浏览过的番号下划线改为虚线
                var avid = addHyphen(otext)
                if(localInfo[avid]){
                    odiv.style.textDecoration = "underline dotted green";
                }
                
                odiv.dataset.av = avid;       
                odiv.innerHTML = otext;
                return odiv;
            }
        });
    }

    // 查找番号, 匹配fc2、200GANA、229SCUTE、259LUXU、261ARA、277DCV、300MIUM、300MAAN、300NTK、345SIMM、358WITH、390JAC、390JNT、428SUKE、一本道、东京热、HEYZO等
        // 只有一个功能就是跳转到 javdb 进行搜索, 没有菜单, 也没有其他任何功能
        // 关于heyzo, 如果是后面跟横杠会触发上面的基础查找, 只有中间没有横杠或者有下划线的情况才会匹配这个。
    function findAndReplaceDOMTextFunOnlyJump(){
                findAndReplaceDOMText(allHTML, {
                    find:/FC2[^\d]*(\d+)|200GANA[-\s]?\d{3,4}|(?:229)?SCUTE[-\s]?\d{3}|(?:259)?LUXU[-\s]?\d{3,4}|261ARA[-\s]?\d{3,4}|(?:277)?DCV[-\s]?\d{3,4}|(?:300)?(?:MIUM|MAAN|NTK)[-\s]?\d{3,4}|345SIMM[-\s]?\d{3}|358WITH[-\s]?\d{3}|390(?:JAC|JNT)[-\s]?\d{3}|428SUKE[-\s]?\d{3}|HEYZO[_\s]?\d{4}|(?<!(\w|-))\d{6}[-_]\d{3}(?!(\w|\d|-))|(?<!(\w|-))n\d{4}(?!(\w|\d|-))/gi,
                    preset: 'prose', // 仅搜索文本元素(不搜索样式、脚本、对象等),开启会会默认启用下面(NON_INLINE_PROSE)的这个功能, 强制隔断上下文。
                    forceContext: findAndReplaceDOMText.NON_INLINE_PROSE,    //调用内置的元素判断, 强制隔断上下文
                    replace: function(portion) {
                        var otext = portion.text;
                        var odiv = document.createElement('jumpJavDB');
                        odiv.style.textDecoration = "underline #66ccff";
                        odiv.style.cursor = "pointer";    
                        odiv.setAttribute("onclick","window.open('https://javdb.com/search?q="+ otext + "&f=all')")
                        odiv.innerHTML = otext;
                        return odiv;
                    }
                });
    }

    // 创建搜索基本菜单
    function createPattenr(id){
        var linkJavbusPage = "https://www.javbus.com/" + id;
        var aPattern =  "<avdiv class='savlink linkJavbusPage'>" + "<a href='" + linkJavbusPage +"' target='_blank' style='color:#459df5;'>JavBus 页面</a>" +"</avdiv>" ;
        if(setting){
            var savList = setting.list;
            for(let i=0; i<savList.length;i++){
                aPattern += "<avdiv class='savlink'>" + "<a href='" + savList[i][1].replace("%s", id) +" 'target='_blank' style='color:#459df5;'>" + savList[i][0] + "</a>" + "</avdiv>"
            }
        }
        var ofloat = document.createElement("avdiv")
        ofloat.classList.add("sav-menu");
        ofloat.addEventListener("mouseenter",savMenuMouseEnter)
        ofloat.addEventListener("mouseleave",savMenuMouseLeave)
        ofloat.innerHTML=aPattern;
        return ofloat;
    }

    // 点击番号复制
    function savIDClick(e){
        var avid = e.target.dataset.av
        if(avid){
            GM_setClipboard(avid)
        }
    }

    // 鼠标经过番号
    function savIDMouseEnter(e){ 
        avInfo = {};
        clearTimeout(timerMouseLeave);   
        avmouseenter(e);
    }
    // 鼠标离开番号
    function savIDMouseLeave(e){    
        timerMouseLeave = setTimeout(function(){
            savMenuMouseLeave();
        },300)
    }
    // 鼠标进入菜单
    function savMenuMouseEnter(e){    
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
    }

    // 鼠标滑过 显示菜单
    function avmouseenter(e){
        var avid = e.target.dataset.av;
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
                // getInfo(avid);
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
        if(document.querySelector(".sav-menu")) return; //如果已经存在菜单, 退出

        var selectText = window.getSelection().toString().trim().replace(/\s+/g,"");
        if (selectText.length>10) return; //如果复制的文字过长,退出。避免复制网址时自己弹出。
        selectText = selectText.replace(/[^a-zA-Z0-9]/g,"");  //去掉一些莫名其妙的符号。网友分享的番号总是各种各样
        var oav = selectText.match(/[a-z|A-Z]{2,5}-?\d{2,5}/i);
        if(!oav) return;  //如果没搜索到,退出
        
        var avid = oav[0]  
        avid = addHyphen(avid);
        var odiv = createPattenr(avid);
        document.body.appendChild(odiv);
        odiv.addEventListener("mouseleave",savMenuMouseLeave);

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
                // getInfo(avid);
                getInfo(avid,true);
            }, 300);
        }
        
        var otherInfo = document.createElement('avdivsInfo');
        otherInfo.innerHTML=addOtherInfo();
        odiv.appendChild(otherInfo);

        settingPostion();  //重置位置
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
            // console.log("越界");
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
    function getInfo(avID,oReload){
        // console.log("从网络获取图片中");
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
                    getInfo(avID.replace("-","-0"));
                    return
                }

                var parser=new DOMParser();
                var htmlDoc=parser.parseFromString(data.responseText, "text/html");
                // console.log("data.status:");
                // console.log(data.status);
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
                        avInfo.date = other[i].parentNode.innerText.replace("發行日期","发行日期");
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
                    avInfo.titleTrans = "没有找到相关页面";
                }else if(!avInfo.titleTrans){   // 如果本地存在翻译, 就不再重复翻译
                    console.log("开始翻译标题");
                    Trans.id = avID;
                    Trans.transText=avInfo.title;
                    googleTrans();
                }

                // 存储
                localInfo[avID] = {}
                localInfo[avID].titleTrans = avInfo.titleTrans;
                localInfo[avID].starName = avInfo.starName;
                if(oReload){
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
        var actors = ""
        var str = "";
        if(!tempTitle){    //判断之前是否已经添加了标题
            if(avInfo.starName && avInfo.starName.length>0){
                for(var i=0;i<avInfo.starName.length;i++){
                    actors += "<a target='_blank' style='text-decoration:underline' title='' href='https://xslist.org/search?query=" + avInfo.starName[i] + "&lg=zh'>"+ avInfo.starName[i] + "</a>, ";
                }
                actors = actors.slice(0,actors.length-2);
                str += "<avdiv class='sav-actors'>演员: " + actors + "</avdiv>"
            }
            if(avInfo.titleTrans){
                str += "<avdiv class='sav-title' id='searchAVMenuTitle'>标题(译): " + avInfo.titleTrans + "</avdiv>"
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

    // 添加番号中间的横杠
    function addHyphen(otext){
        otext = otext.replace(/\s+/g,"")
        if(otext.indexOf("-")<0){
            var oindex = otext.search(/\d/);
            otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
        }
        return otext.toUpperCase();
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
        "top:50%;left:50%;" +
        "transform:translate(-50%,-50%);" +
        "background:#ccc;" +
        "border-radius:4px;" +
        "padding:10px 20px;" ;
        var innerH = " "+
        "<p>搜索词用 %s 代替 <br>修改时注意中英文标点符号 <br>格式是 JSON ,注意有无逗号 <br>点击保存无反应,大概率是修改错误, 可以去<a href='https://greasyfork.org/zh-CN/scripts/423350/feedback'>论坛求助</a> </p>" +
        "<textarea wrap='off' cols='66' rows='20' style='overflow:auto;border-radius:4px;'>" + JSON.stringify( GM_getValue("_setting"),false,4) + "</textarea>" +
        "<br>" +
        "<p>老司机共浏览了" + Object.keys(localInfo).length + "个番号！</p>" +
        "<button id='savHistory' >清空浏览历史</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='editBoxCloase' >关闭</button> &nbsp;&nbsp;&nbsp;" +
        "<button id='editBoxSave' >保存</button>" +
        "";
        editbox.innerHTML = innerH;
        editbox.querySelector("#savHistory").addEventListener("click",clearHistory)
        editbox.querySelector("#editBoxCloase").addEventListener("click",savBoxClose)
        editbox.querySelector("#editBoxSave").addEventListener("click",savBoxSave)
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
    // 清除浏览历史
    function clearHistory(){
        GM_setValue("avInfo2",{});
        localInfo = {}
        savBoxClose()
    }
    GM_registerMenuCommand("自定义搜索", savBoxEdit)


    // 获取演员的相关信息 未用到
    function getActorInfo(acterName){
        console.log("函数: getActorInfo(acterName");
        // https://xslist.org/search?query=%E3%81%95%E3%81%A4%E3%81%8D%E8%8A%BD%E8%A1%A3&lg=zh
        var actor_url = 'https://xslist.org/search?query=' + acterName + "&lg=zh";
        console.log(actor_url);
        GM_xmlhttpRequest({
            method: 'GET',
            url: actor_url,
            onload: function (data) {
                setTimeout(function () {
                    console.log("这是获取到的演员信息");
                    console.log(data.responseXML);
                    var parser=new DOMParser();
                    var htmlDoc=parser.parseFromString(data.responseText, "text/html");
                    var avActorLink = htmlDoc.querySelector("a");
                    console.log(avActorLink);
                }, 300);

            },
            onerror: function (e) {
                console.error(e);
            }
        });
    }

    GM_addStyle("" +
                ".sav-menu{" +
                    "display: block;" +
                    "text-align: left;" +
                    "color: #000;" +
                    "background:rgba(255,255,255,.8);" +
                    "backdrop-filter: blur(5px);" +
                    "border:1px solid #fff;" +
                    "border-radius: 4px;" +
                    "padding:6px;" +
                    "margin-top: -2px; " +
                    "z-index: 99999; " +
                    "font-size: 14px;" +
                    "max-width:666px;" +
                    "box-shadow: 6px 6px 6px #ccc;" +
                    "transition:0.5s;" +
                "}" +
                ".savlink{" +
                    "margin: 4px 10px 4px 5px;" +
                    "border-radius: 4px;" +
                    "padding: 3px;" +
                    "background: aliceblue;" +
                    "display: inline-block;" +
                    "border: 1px solid #eee;" +
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
    "");

})();