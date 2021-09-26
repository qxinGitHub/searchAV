// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.7.7
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
// @exclude	    *://www.douyin.com/*
// @exclude	    *.1688.com/*
// @exclude	    *.taobao.com/*
// @exclude	    *.jd.com/*
// @exclude	    *.smzdm.com/*
// @exclude	    *.zhihu.com/*
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
    var oregExp = /(?<!(\w|-))[a-z|A-Z]{2,5}-?\d{2,4}(?!(\w|\d|-))/gi;
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
        console.log(allHTML);
        findAndReplaceDOMText(allHTML, {
            // find:/[a-z|A-Z]{2,5}-\d{2,4}/gi,
            find:oregExp,
            replace: function(portion) {
                var odiv = document.createElement('avdivs');
                odiv.classList.add("avclass");
                odiv.style.color = "green";
                // console.log(portion);
                var otext = portion.text;
    
                if(otext.length<4) return otext;
    
                var otemp = otext.indexOf("-"); // 如果没有,返回-1
                var oOnlyText = otext.replace(/[^a-zA-Z]/gi,""); //番号中的英文
                var oOnlyNum = otext.replace(/[^0-9]/ig,"");    // 番号中的数字
                // 此类关键词不会自动添加横杠横杠, ;网站的排行旁,类似 top10 这种,带来的副作用就是遇到真正的top番号,如果没有中间的横杠无法识别。
                var oSpecial = oOnlyText.search(/cat/i)    // 弃用, 和下面的效果一样
                // 排除所有包含在此的关键词 :  例: covid-19 win10
                var oExclude = oOnlyText.search(/^(cpu|dos|win|os|osx|ipad|lumia|miui|flyme|emui|note|snh|bej|gnz|ckg|akb|gp|gt|gts|gtx|covid|aptx|rx|mh|bmw|sn|au|cc|cctv|shp|hao|top|scp|iso|it|ilc|ax|gbx|aes|nc|ds|error|hp|df|qbz|qsz|ak)$/i)  
                //  和番号重名的没有排除: 
                // 操作系统:dos|win|os|osx|lumia|miui|flyme|emui
                // 特殊的:covid|aptx|rx|mh|bmw
                // 名称:snh|bej|gnz|ckg|akb
                // 显卡:gp|gt|gts|gtx
                // 真理:df|qbz|qsz|ak  例:太多,没有进行排除 https://zhidao.baidu.com/question/2051972899944030547.html?qbl=relate_question_0&word=%CE%E4%C6%F7%BC%F2%B3%C6
                console.log(portion);
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
                    if(oSpecial>-1){  // 匹配到 特殊的单词, 直接返回
                        return otext;
                    }else if(oOnlyNum.length==3 && oSpecial<0){   // 未匹配到特殊的单词,并且数字的个数为3 将其视为番号, 添加横杠
                        var oindex = otext.search(/\d/);
                        otext = otext.slice(0,oindex) + "-" + otext.slice(oindex)
                    } else {    // 如果数字的个数是2个或者4个,不是番号的可能性更大些,直接返回。
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
    var findFun = setInterval(findAndReplaceDOMTextFun,1000);


    function createPattenr(id){
        var linkJavbusPage = "https://www.javbus.com/" + id;
        var linkJavbus = "https://www.javbus.com/search/" + id;
        var linkJavLib = "http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=" + id;
        var linkbtsow = "https://btsow.com/search/" +id;

        var aPattern = "<avdiv class='av-floatdiv'>" +
            "<a href='" + linkJavbusPage +"' target='_blank' class='av-floatdiv' style='color:#459df5;'>javbus 页面</a>" +
            "</avdiv><avdiv class='av-floatdiv'>" +
            "<a href='" + linkJavbus +"' target='_blank' class='av-floatdiv' style='color:#459df5;'>javbus 搜索</a>" +
            "</avdiv><avdiv class='av-floatdiv'>" +
            "<a href='" + linkJavLib +" 'target='_blank' class='av-floatdiv' style='color:#459df5;'>javLib 搜索</a>" +
            "</avdiv><avdiv class='av-floatdiv'>" +
            "<a href='" + linkbtsow +" 'target='_blank' class='av-floatdiv' style='color:#459df5;'>btsow 搜索</a>" +
            "</avdiv>";
        var ofloat = document.createElement("avdiv")
        ofloat.classList.add("av-float");
        ofloat.innerHTML=aPattern;
        return ofloat;
    }

    // 点击番号复制
    document.onclick=function(e){
        if(e.target.dataset.av){
            GM_setClipboard(e.target.dataset.av)
        }
    }
    // 鼠标划过显示信息
    document.onmouseover = function(e){
        if(e.target.className=="avclass"){
            var avid = e.target.dataset.av;

            if(document.querySelector(".av-float")){
                console.log("已存在");
            }else{
                var oPosition = e.target.getBoundingClientRect()
                var odiv = createPattenr(e.target.dataset.av)    
                document.body.appendChild(odiv);
                odiv.style.left = oPosition.x + "px";
                odiv.style.top = oPosition.y + oPosition.height + "px";
                
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
                    }, 1500);
                } else{
                    console.log("需要从网络获取");
                    getInfo(e.target.dataset.av);
                }
                
                var otherInfo = document.createElement('avdivs');
                otherInfo.innerHTML=addOtherInfo();
                odiv.appendChild(otherInfo);

                
                settingPostion();  //重置位置
                
            }
        }else if(e.target.className=="av-float" || e.target.className=="avclass"|| e.target.className=="av-floatdiv" || e.target.nodeName == "avdiv" ||e.target.nodeName =="IMG"){
            // console.log("这是一条没有意义的消息");
            ;
        }else{
            var odiv = document.querySelector(".av-float")
            if(odiv){
                odiv.parentNode.removeChild(odiv)
                // console.log("移除");
            }
            clearTimeout(timer);
        }
    }

    // 调整距离底部的距离,以防越界
    function settingPostion(){
        var odiv = document.querySelector(".av-float");
        if(!odiv)  return;
        var oClient = odiv.getBoundingClientRect()
        var oTop = oClient.top;
        var oHeight = oClient.height;
        var winHeight = document.documentElement.clientHeight;
        if(oTop + oHeight > winHeight){
            // console.log("越界");
            odiv.style.top = "unset";
            odiv.style.bottom = 0;
        }
    }
    
    function getInfo(avID,oReload){
        // console.log("函数:getInfo(avID,oReload)");

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
                    if(other[i].innerHTML=="發行日期:"){
                        avInfo.date = other[i].parentNode.innerText
                    }
                    if(other[i].innerHTML=="系列:"){
                        avInfo.series = other[i].parentNode.innerText
                    }
                }
                // 封面
                var image = htmlDoc.querySelector(".bigImage img");
                var imgSrc = image.src;
                var imgNum = imgSrc.search(/(imgs|pics)/i);
                imgSrc = imgSrc.slice(imgNum);
                image.src = "https://www.javbus.com/" + imgSrc;

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
                
                if(oReload){
                    console.log("图片加载完成");
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
            str += "<avdiv class='av-floatdiv'>演员: " + actors + "</avdiv>"
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
                    document.querySelector("#searchAVMenuTitle").innerHTML = "标题(译): " + trans;

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
                    "position: fixed;" +
                    "display: block;" +
                    "color: #000;" +
                    "background:rgba(255,255,255,.8);" +
                    "backdrop-filter: blur(5px);" +
                    "border:1px solid #fff;" +
                    "border-radius: 4px;" +
                    "padding:6px;" +
                    "margin-top: -2px; " +
                    "z-index: 99999; " +
                    "font-size: 14px;" +
                "}" +
                "avdiv{" +
                    "display:block;" +
                "}" +
                ".av-float img{" +
                    "max-width: 100%;" +
                "}" +
                ".av-float a:link," +
                ".av-float a:visited{" +
                    "color: #000" +
                "}" +
    "");

})();