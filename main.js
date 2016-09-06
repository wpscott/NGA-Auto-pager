// ==UserScript==
// @name         NGA Auto Pager V2
// @version      1.00
// @description  NGA自动翻页插件
// @include      /^http:\/\/(bbs\.ngacn\.cc|nga\.178\.com|bbs\.nga\.cn|bbs\.bigccq\.cn)\/(read\.php|thread\.php)/
// @author       Sunness
// ==/UserScript==

var threshold = 2400;
var delay = 1500;
var exist = true;
var running = false;

window.addEventListener('scroll', function(e) {
    if (exist && !running && (document.body.scrollHeight - document.body.scrollTop < threshold)) {
        running = true;
        var a = document.querySelector("a.uitxt1[title=加载下一页]");
        if (a !== null) {
            a.click();
            setTimeout(function() { running = false; }, delay);
        } else {
            exist = false;
        }
    }
});
