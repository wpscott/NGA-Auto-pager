// ==UserScript==
// @name         NGA Auto Pager V2
// @version      1.02
// @description  NGA自动翻页插件
// @include      /^http(s):\/\/(bbs\.ngacn\.cc|nga\.178\.com|bbs\.nga\.cn|bbs\.bigccq\.cn)\/(read\.php|thread\.php|wow|wow\/pvp|wow\/pve|wow\/rogue|wow\/druid|wow\/dk|wow\/mage|wow\/monk|wow\/priest|wow\/shaman|wow\/paladin|wow\/warrior|wow\/warlock|wow\/hunter|wow\/ui|wow\/lore|it|auto|ink|ng2|play|tvgame|wa2|wow\/justice|wow\/job|ccq|gw2|bns|heroes|lol|hs|wot|wowp|wows|jx3|coc|pad|d3|dota|wt|ff14|poi|gta|sc|ow|cr|king)/
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
