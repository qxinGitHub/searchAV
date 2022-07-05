// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.8.4
// @description  标记网页上的所有番号, 在相关网站快速方便的进行搜索
// @author       iqxin
// @match        *://**/*
// @require     https://greasyfork.org/scripts/423347-findandreplacedomtext-v-0-4-0/code/findAndReplaceDOMText%20v%20040.js?version=911450
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
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard
// @run-at      document-end

// ==/UserScript==

(function() {
    'use strict';

    var timer;
    var avInfo = {};  // 临时存储相关信息
    var localInfo = {}; // 从本地获取到的番号信息
    var Trans = {       // 临时存储翻译的相关信息
        id:"",
        transText:"",
        trans:[]
    }

    var allHTML = document.querySelector("body");

    // 对于一些网站,可能需要第二种正则来匹配
    var oregExp = /(?<!(\w|-))[a-z|A-Z]{2,5}[-\s]?\d{2,4}(?!(\w|\d|-))/gi;
    var oregExp2 = /[a-z|A-Z]{2,5}-?\d{2,4}/gi;
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
    // console.log("使用的正则: " + oregExp);

    // 查找番号, 匹配最基础的番号
    function findAndReplaceDOMTextFun(){
        // console.log(allHTML);
        findAndReplaceDOMText(allHTML, {
            // find:/[a-z|A-Z]{2,5}-\d{2,4}/gi,
            find:oregExp,
            replace: function(portion) {
                var odiv = document.createElement('avdivs');
                odiv.classList.add("avclass");
                odiv.style.textDecoration = "underline green";
                // odiv.style.textDecorationColor = "green";

                odiv.addEventListener("mouseenter",avmouseenter);
                odiv.addEventListener("mouseleave",avmmouseleave);
                
                // console.log(portion);
                var otext = portion.text;
    
                if(otext.length<4) return otext;
    
                var otemp = otext.indexOf("-"); // 如果没有,返回-1
                var oOnlyText = otext.replace(/[^a-zA-Z]/gi,""); //番号中的英文
                var oOnlyNum = otext.replace(/[^0-9]/ig,"");    // 番号中的数字
                // 此类关键词不会自动添加横杠横杠, ;网站的排行旁,类似 top10 这种,带来的副作用就是遇到真正的top番号,如果没有中间的横杠无法识别。
                // var oSpecial = oOnlyText.search(/cat/i)    // 弃用, 和下面的效果一样
                // 排除所有包含在此的关键词 :  例: covid-19 win10
                var oExclude = oOnlyText.search(/^(cpu|dos|win|os|osx|ipad|lumia|miui|flyme|emui|note|snh|bej|gnz|ckg|akb|gp|gt|gts|gtx|covid|aptx|rx|mh|bmw|sn|au|cc|cctv|shp|hao|top|scp|iso|it|ilc|ax|gbx|aes|nc|imx|xfs|fps|ds|error|hp|df|qbz|qsz|ak)$/i)  
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
                if(oExclude>-1){
                    return otext;
                }
    
                if(otemp<0){    // 没有横杠
                    // if(oSpecial>-1){  // 匹配到 特殊的单词, 直接返回
                    //     return otext;
                    // }else if(oOnlyNum.length==3 && oSpecial<0){   // 未匹配到特殊的单词,并且数字的个数为3 将其视为番号, 添加横杠
                    //     // var oindex = otext.search(/\d/);
                    //     otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
                    // } else {    // 如果数字的个数是2个或者4个,不是番号的可能性更大些,直接返回。
                    //     return otext;
                    // }
                    if(oOnlyNum.length!=3){
                        return otext;
                    }
                }
                
                odiv.dataset.av = otext;        
                odiv.innerHTML = otext;
                return odiv;
            }
        });
    }
    findAndReplaceDOMTextFun();

    // 增加中间的横杠
    function addHyphen(otext){
        otext = otext.replace(/\s+/g,"")
        if(otext.indexOf("-")<0){
            var oindex = otext.search(/\d/);
            otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
        }
        return otext;
    }

    // 下面这行会导致无限循环,无限嵌套
    // var findFun = setInterval(findAndReplaceDOMTextFun,1000);
    // setTimeout(findAndReplaceDOMTextFun,1500);

    function createPattenr(id){
        var linkJavbusPage = "https://www.javbus.com/" + id;
        var linkJavdb = "https://javdb.com/search?q=" + id + "&f=all";
        var linkJavbus = "https://www.javbus.com/search/" + id;
        var linkJavLib = "http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=" + id;
        var linkbtsow = "https://btsow.com/search/" +id;

        var aPattern = "<avdiv class='av-floatdiv savlink linkJavbusPage'>" + "<a href='" + linkJavbusPage +"' target='_blank' class='av-floatdiv' style='color:#459df5;'>javbus 页面</a>" +"</avdiv>" +
                        "<avdiv class='av-floatdiv savlink linkJavbus'>" + "<a href='" + linkJavbus +"' target='_blank' class='av-floatdiv' style='color:#459df5;'>javbus 搜索</a>" + "</avdiv>"+
                        "<avdiv class='av-floatdiv savlink'>" + "<a href='" + linkJavdb +"' target='_blank' class='av-floatdiv' style='color:#459df5;'>javDB 搜索</a>" + "</avdiv> "+
                        "<avdiv class='av-floatdiv savlink'>" + "<a href='" + linkJavLib +" 'target='_blank' class='av-floatdiv' style='color:#459df5;'>javLib 搜索</a>" +"</avdiv>" +
                        "<avdiv class='av-floatdiv savlink'>" + "<a href='" + linkbtsow +" 'target='_blank' class='av-floatdiv' style='color:#459df5;'>btsow 搜索</a>" + "</avdiv>";
        var ofloat = document.createElement("avdiv")
        ofloat.classList.add("av-float");
        ofloat.innerHTML=aPattern;
        // ofloat.addEventListener("mouseleave",mouseleave)
        return ofloat;
    }

    // 点击番号复制
    document.onclick=function(e){
        var avid = e.target.dataset.av
        if(avid){
            avid = addHyphen(avid)
            GM_setClipboard(avid)
        }
    }

    // 鼠标滑过 增加菜单
    function avmouseenter(e){
        var avid = e.target.dataset.av;
        avid = addHyphen(avid);
        // if(document.querySelector(".av-float")){
        var avdiv = document.querySelector(".av-float")
        if(avdiv){
            if(avdiv){
                avdiv.parentNode.removeChild(avdiv)
            }
        }
        // }else{
            var oPosition = e.target.getBoundingClientRect()
            var odiv = createPattenr(e.target.dataset.av);
            e.target.appendChild(odiv);
            // document.body.appendChild(odiv);
            odiv.style.left = oPosition.x + "px";
            odiv.style.top = oPosition.y + oPosition.height + "px";

            odiv.style.position = "fixed";
            // var divClientRect = odiv.getBoundingClientRect()
            // var divWidth = divClientRect.right - divClientRect.left;
            // odiv.style.left = e.pageX - divWidth/2 + "px";
            // odiv.style.top = e.pageY + "px";
            
            avInfo = {};
            localInfo = GM_getValue("avInfo");
            if(!localInfo){
                GM_setValue("avInfo",{});
                localInfo = {};
            }
            if(localInfo[avid]){
                console.log("老司机共浏览了" + Object.keys(localInfo).length + "个番号！");
                avInfo = localInfo[avid];
                timer = setTimeout(() => {
                    // console.log("停留超过0.5s, 重新加载图片");
                    getInfo(avid,true);
                    settingPostion();  //重置位置
                }, 500);
            } else{
                // console.log("需要从网络获取");
                getInfo(avid);
            }
            
            var otherInfo = document.createElement('avdivs');
            otherInfo.innerHTML=addOtherInfo();
            odiv.appendChild(otherInfo);
            
            odiv.parentNode.title = "";
            odiv.parentNode.parentNode.title = "";
            settingPostion();  //重置位置
            
        // }
    }
    // 鼠标划出  移除菜单
    function avmmouseleave(e){
        var odiv = document.querySelector(".av-float");
        if(odiv){
            odiv.parentNode.removeChild(odiv);
            // console.log("移除");
        }
        clearTimeout(timer);
    }


    // 鼠标选中弹出菜单
    document.onmouseup = function(e){
        // console.log(e);
        var selectText = window.getSelection().toString().trim().replace(/\s+/g,"");
        if (selectText.length>15) return; //如果过长,退出
        var oav = selectText.match(/[a-z|A-Z]{2,5}-?\d{2,5}/i);
        if(!oav) return;  //如果没搜索到,退出
        if(document.querySelector(".av-float")) return; //如果已经存在菜单, 退出
        
        var avid = oav[0]  
        
            avid = addHyphen(avid);
            var odiv = createPattenr(avid);
            document.body.appendChild(odiv);
            odiv.addEventListener("mouseleave",avmmouseleave);

            var divClientRect = odiv.getBoundingClientRect()
            var divWidth = divClientRect.right - divClientRect.left;
            odiv.style.left = e.pageX - divWidth/2 + "px";
            odiv.style.top = e.pageY + "px";
            odiv.style.position = "absolute";

            avInfo = {};
            localInfo = GM_getValue("avInfo");
            if(!localInfo){
                GM_setValue("avInfo",{});
                localInfo = {};
            }
            if(localInfo[avid]){
                console.log("老司机共浏览了" + Object.keys(localInfo).length + "个番号！");
                avInfo = localInfo[avid];
                timer = setTimeout(() => {
                    console.log("停留超过1.5s, 重新加载图片");
                    getInfo(avid,true);
                    settingPostion();  //重置位置
                }, 500);
            } else{
                console.log("需要从网络获取");
                getInfo(avid);
            }
            
            var otherInfo = document.createElement('avdivs');
            otherInfo.innerHTML=addOtherInfo();
            odiv.appendChild(otherInfo);

            settingPostion();  //重置位置
        
    }

    // 调整距离底部的距离,以防越界
    function settingPostion(){
        var odiv = document.querySelector(".av-float");
        if(!odiv)  return;
        var oClient = odiv.getBoundingClientRect()
        var oTop = oClient.top;
        var oHeight = oClient.height; //自身高度
        // var oWidth = oClient.Width; // 自身宽度
        var winHeight = document.documentElement.clientHeight; //可视窗口高度
        var winWidth = document.documentElement.clientWidth; //可视窗口宽度
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
    
    function getInfo(avID,oReload){
        // console.log("函数:getInfo(avID,oReload)");
        console.log("从网络获取图片中");

        GM_xmlhttpRequest({
            method: 'get',
            url: 'https://www.javbus.com/' + avID,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: "",
            onload: function (data) {

                var parser=new DOMParser();
                var htmlDoc=parser.parseFromString(data.responseText, "text/html");
                
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
                // 其他
                var other = htmlDoc.querySelectorAll(".header");
                for(var i=0;i<other.length;i++){
                    if(other[i].innerHTML=="发行日期:"){
                        avInfo.date = other[i].parentNode.innerText
                    }
                    if(other[i].innerHTML=="系列:"){
                        avInfo.series = other[i].parentNode.innerText
                    }
                }
                // 封面
                var image = htmlDoc.querySelector(".bigImage img");
                if(!image){
                    // 禁用 “javbus页面” 的搜索
                    var linkJavbusPage = document.querySelector(".linkJavbusPage");
                    if(linkJavbusPage){
                        // linkJavbusPage.parentNode.removeChild(linkJavbusPage);
                        linkJavbusPage.classList.add("savdisabled");
                        document.querySelector(".linkJavbusPage a").style.color = "#000";
                    }
                    return;
                }
                var imgSrc = image.src;
                var imgNum = imgSrc.search(/(imgs|pics)/i);
                imgSrc = imgSrc.slice(imgNum);
                image.src = "https://www.javbus.com/" + imgSrc;
                image.removeAttribute("title"); //鼠标经过的时候会触发离开事件,所以删掉
                image.classList.add("avimg");

                // 相关代码地址 https://greasyfork.org/zh-CN/scripts/376884
                // 名称: 显示防盗链图片 for Inoreader
                // 作者: maboloshi
                var meta = document.createElement('meta');
                meta.name = "referrer";
                meta.content = "no-referrer";
                document.getElementsByTagName('head')[0].appendChild(meta);
                

                // 标题翻译
                Trans.id = avID;
                Trans.transText=avInfo.title;
                googleTrans();

                // 存储
                localInfo[avID] = avInfo;
                GM_setValue("avInfo",localInfo);
                if(!document.querySelector(".av-float")){return};
                // 判断是否重复加载图片
                if(document.querySelector(".avimg")){return};
                if(oReload){
                    // console.log("图片加载完成");
                    var otherInfo = document.createElement('avdivs');
                    otherInfo.appendChild(image);
                    document.querySelector(".av-float").appendChild(otherInfo);

                    settingPostion();  //重置位置

                    // 会出现第一次依旧越界的情况, 已浏览过的番号在重新加载图片的情况下
                        // 每秒检查5次, 2s后停止检查
                    const interval = setInterval(settingPostion,200);
                    setTimeout(() => { 
                        clearInterval(interval)
                    }, 2000)

                    return;
                }
                // console.log("获取到的所有信息: ");
                // console.log(avInfo);
                // console.log("------------------");
                var otherInfo = document.createElement('avdivs');
                otherInfo.innerHTML = addOtherInfo()
                otherInfo.appendChild(image);
                document.querySelector(".av-float").appendChild(otherInfo);

                settingPostion();  //重置位置
                setTimeout(() => { 
                    settingPostion();
                }, 500)
            }
        });
    }

    function addOtherInfo(){
        // console.log("函数: addOtherInfo()");
        // console.log(avInfo.starName);
        var actors = ""
        var str = "";
        if(avInfo.starName && avInfo.starName.length>0){
            for(var i=0;i<avInfo.starName.length;i++){
                actors += "<a class='av-floatdiv' target='_blank' title='' href='https://xslist.org/search?query=" + avInfo.starName[i] + "&lg=zh'>"+ avInfo.starName[i] + "</a>, ";
            }
            actors = actors.slice(0,actors.length-2);
            str += "<avdiv class='av-floatdiv' style='text-decoration:underline'>演员: " + actors + "</avdiv>"
        }
        if(avInfo.titleTrans){
            str += "<avdiv class='av-floatdiv' id='searchAVMenuTitle'>标题(译): " + avInfo.titleTrans + "</avdiv>"
        }else if(avInfo.title){
            str += "<avdiv class='av-floatdiv' id='searchAVMenuTitle'>标题: " + avInfo.title + "</avdiv>"
        }
        if(avInfo.tags && avInfo.tags.length>0){
            str += "<avdiv class='av-floatdiv'>标签: " + avInfo.tags + "</avdiv>"
        }
        if(avInfo.series){
            str += "<avdiv class='av-floatdiv'>" + avInfo.series + "</avdiv>"
        }
        if(avInfo.date){
            str += "<avdiv class='av-floatdiv'>" + avInfo.date + "</avdiv>"
        }
        return str;
    }

    // 翻译函数取自于作者 Johnny Li 的脚本 “网页翻译助手” version:1.2.9, https://greasyfork.org/zh-CN/scripts/389784 许可协议MIT
    // 作者 Johnny Li 
    // 脚本 “网页翻译助手” 
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
                    // console.log(trans);

                    localInfo[Trans.id].titleTrans = trans;
                    GM_setValue("avInfo",localInfo);
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

    GM_addStyle(".av-float{" +
                    // "position: absolute;" +
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
                "}" +
                ".savlink a{" +
                    "text-decoration:none;" +
                "}" +
                "avdivs avdiv{" +
                    "display:block;" +
                    "margin-bottom: 5px;" +
                "}" +
                "avdivs .av-float img{" +
                    "height: 100%;" +
                    "max-width: 100%;" +
                "}" +
                ".av-float a:link," +
                ".av-float a:visited{" +
                    "color: #000" +
                "}" +
                ".savdisabled a{" +
                    "pointer-events:none;" +
                    "text-decoration: line-through;" +
                    "color: #000; " +
                "}" +
    "");

})();