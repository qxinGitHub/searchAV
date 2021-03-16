// ==UserScript==
// @name         根据番号快速搜索
// @namespace    https://github.com/qxinGitHub/searchAV
// @version      0.1
// @description  标记网页上的所有番号, 在相关网站快速方便的进行搜索
// @author       iqxin
// @match        *://**/*
// @require     https://greasyfork.org/scripts/423347-findandreplacedomtext-v-0-4-0/code/findAndReplaceDOMText%20v%20040.js?version=911450
// @grant       GM_addStyle
// @grant       GM_setClipboard

// ==/UserScript==

(function() {
    'use strict';

    var allHTML = document.querySelector("body");
    // var avReg = /[a-z|A-Z]{2,5}-\d{2,5}/gi;
    // var allAV = allHTML.outerHTML.match(avReg);
    // console.log(allAV)
    
    // 最基础的番号
    findAndReplaceDOMText(allHTML, {
        find:/[a-z|A-Z]{2,5}-\d{2,5}/gi,
        replace: function(portion) {
            var odiv = document.createElement('avdivs');
            odiv.classList.add("avclass");
            odiv.style.color = "green";
            odiv.dataset.av = portion.text;        
            odiv.innerHTML = portion.text;
            // console.log("替换完成");
            return odiv;
        }
    });

    function createPattenr(id){
        // var linkJavbus = "https://www.javbus.com/search/" + id;
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

    document.onmouseover = function(e){
        if(e.target.className=="avclass"){
            // console.log(e.target.dataset.av);
            if(document.querySelector(".av-float")){
                console.log("已存在");
            }else{
                var offsetleft = e.target.offsetLeft;
                var offsetheight = e.target.offsetHeight + e.target.offsetTop;

                var odiv = createPattenr(e.target.dataset.av)

                e.target.appendChild(odiv);
                odiv.style.left = offsetleft + "px";
                odiv.style.top = offsetheight + "px";
            }
        }else if(e.target.className=="av-float" || e.target.className=="avclass"|| e.target.className=="av-floatdiv"){
            console.log("class : avfloat");
        }else{
            var odiv = document.querySelector(".av-float")
            if(odiv){
                odiv.parentNode.removeChild(odiv)
            }
        }
    }

    document.onclick=function(e){
        if(e.target.dataset.av){
            GM_setClipboard(e.target.dataset.av)
        }
    }

    GM_addStyle(".av-float{" +
                "position: absolute;" +
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