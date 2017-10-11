// ==UserScript==
// @name         NGA Auto Pager V2
// @version      1.00
// @description  NGA自动翻页插件
// @include      /^http:\/\/(bbs\.ngacn\.cc|nga\.178\.com|bbs\.nga\.cn|bbs\.bigccq\.cn)\/(read\.php|thread\.php)/
// @author       Sunness
// ==/UserScript==

let threshold = 2400, delay = 1500, exist = true, running = false;

window.addEventListener('scroll', e => {
    if (exist && !running && (document.documentElement.scrollHeight - document.documentElement.scrollTop < threshold)) {
        running = true;
        let a = document.querySelector("a.uitxt1[title=加载下一页]");
        if (a !== null) {
            a.click();
            setTimeout(() => { running = false; }, delay);
        } else {
            exist = false;
        }
    }
});
