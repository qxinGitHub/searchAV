// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.5.1
// @description  标记网页上的所有番号, 在相关网站快速方便的进行搜索
// @author       iqxin
// @match        *://**/*
// @require     https://greasyfork.org/scripts/423347-findandreplacedomtext-v-0-4-0/code/findAndReplaceDOMText%20v%20040.js?version=911450
// @connect     *
// @exclude	    *://www.52pojie.cn/*
// @exclude	    *://meta.appinn.net/*
// @exclude	    *://v2ex.com/*
// @exclude	    *://greasyfork.org/*
// @exclude	    *://bilibili.com/*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM_setClipboard

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

    // 查找番号, 匹配最基础的番号
    findAndReplaceDOMText(allHTML, {
        // find:/[a-z|A-Z]{2,5}-\d{2,4}/gi,
        find:/(?<!(\w|-))[a-z|A-Z]{2,5}-?\d{2,4}(?!(\w|\d|-))/gi,
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
            var oSpecial = oOnlyText.search(/cat/i)   
            // 排除所有包含在此的关键词 :  例: covid-19 win10
            var oExclude = oOnlyText.search(/^(dos|win|os|osx|ipad|lumia|miui|flyme|emui|note|snh|bej|gnz|ckg|akb|gp|gt|gts|gtx|covid|aptx|rx|mh|bmw|sn|au|cc|cctv|shp|hao|top|scp|df|qbz|qsz|ak)$/i)  
            //  和番号重名的没有排除: 
            // 操作系统:dos|win|os|osx|lumia|miui|flyme|emui
            // 特殊的:covid|aptx|rx|mh|bmw
            // 名称:snh|bej|gnz|ckg|akb
            // 显卡:gp|gt|gts|gtx
            // 真理:df|qbz|qsz|ak  例:太多,没有进行排除 https://zhidao.baidu.com/question/2051972899944030547.html?qbl=relate_question_0&word=%CE%E4%C6%F7%BC%F2%B3%C6
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

    function createPattenr(id){
        var linkJavbusPage = "https://www.javbus.com/" + id;
        var linkJavbus = "https://www.javbus.com/uncensored/search/" + id;
        var linkJavLib = "http://www.javlibrary.com/cn/vl_searchbyid.php?keyword=" + id;
        var linkbtsow = "https://btsow.cam/search/" +id;

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
                e.target.appendChild(odiv);
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
                    }, 1500);
                } else{
                    console.log("需要从网络获取");
                    getInfo(e.target.dataset.av);
                }
                
                var otherInfo = document.createElement('avdivs');
                otherInfo.innerHTML=addOtherInfo();
                odiv.appendChild(otherInfo);
                
            }
        }else if(e.target.className=="av-float" || e.target.className=="avclass"|| e.target.className=="av-floatdiv" || e.target.nodeName =="IMG"){
            // console.log("这是一条没有意义的消息");
            ;
        }else{
            var odiv = document.querySelector(".av-float")
            if(odiv){
                odiv.parentNode.removeChild(odiv)
            }
            clearTimeout(timer);
        }
    }

    
    function getInfo(avID,oReload){
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
                    return;
                }
                // console.log("获取到的所有信息: ");
                // console.log(avInfo);
                // console.log("------------------");
                var otherInfo = document.createElement('avdivs');
                otherInfo.innerHTML = addOtherInfo()
                otherInfo.appendChild(image);
                document.querySelector(".av-float").appendChild(otherInfo);
            }
        });
    }
    
    function addOtherInfo(){
        var str = "";
        if(avInfo.starName && avInfo.starName.length>0){
            str += "<avdiv class='av-floatdiv'>演员: " + avInfo.starName + "</avdiv>"
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
                    console.log("翻译结果:");
                    console.log(trans);

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

    GM_addStyle(".av-float{" +
                    "position: fixed;" +
                    "display: block;" +
                    "background:rgba(255,255,255,.3);" +
                    "backdrop-filter: blur(5px);" +
                    "padding:6px;" +
                    "margin-top: -2px; " +
                "}" +
                "avdiv{" +
                    "display:block;" +
                "}" +
    "");

})();