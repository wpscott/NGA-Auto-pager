// ==UserScript==
// @name        NGA Auto Pager V2
// @version     2.0
// @description NGA自动翻页插件
// @match		http*://bbs.ngacn.cc/read.php*
// @match		http*://nga.178.com/read.php*
// @match		http*://bbs.nga.cn/read.php*
// @match		http*://bbs.bigccq.cn/read.php*
// @match		http*://bbs.ngacn.cc/thread.php*
// @match		http*://nga.178.com/thread.php*
// @match		http*://bbs.nga.cn/thread.php*
// @match		http*://bbs.bigccq.cn/thread.php*
// @match		http*://bbs.ngacn.cc/wow*
// @match		http*://nga.178.com/wow*
// @match		http*://bbs.nga.cn/wow*
// @match		http*://bbs.bigccq.cn/wow*
// @match		http*://bbs.ngacn.cc/wow/pvp*
// @match		http*://nga.178.com/wow/pvp*
// @match		http*://bbs.nga.cn/wow/pvp*
// @match		http*://bbs.bigccq.cn/wow/pvp*
// @match		http*://bbs.ngacn.cc/wow/pve*
// @match		http*://nga.178.com/wow/pve*
// @match		http*://bbs.nga.cn/wow/pve*
// @match		http*://bbs.bigccq.cn/wow/pve*
// @match		http*://bbs.ngacn.cc/wow/rogue*
// @match		http*://nga.178.com/wow/rogue*
// @match		http*://bbs.nga.cn/wow/rogue*
// @match		http*://bbs.bigccq.cn/wow/rogue*
// @match		http*://bbs.ngacn.cc/wow/druid*
// @match		http*://nga.178.com/wow/druid*
// @match		http*://bbs.nga.cn/wow/druid*
// @match		http*://bbs.bigccq.cn/wow/druid*
// @match		http*://bbs.ngacn.cc/wow/dk*
// @match		http*://nga.178.com/wow/dk*
// @match		http*://bbs.nga.cn/wow/dk*
// @match		http*://bbs.bigccq.cn/wow/dk*
// @match		http*://bbs.ngacn.cc/wow/mage*
// @match		http*://nga.178.com/wow/mage*
// @match		http*://bbs.nga.cn/wow/mage*
// @match		http*://bbs.bigccq.cn/wow/mage*
// @match		http*://bbs.ngacn.cc/wow/monk*
// @match		http*://nga.178.com/wow/monk*
// @match		http*://bbs.nga.cn/wow/monk*
// @match		http*://bbs.bigccq.cn/wow/monk*
// @match		http*://bbs.ngacn.cc/wow/priest*
// @match		http*://nga.178.com/wow/priest*
// @match		http*://bbs.nga.cn/wow/priest*
// @match		http*://bbs.bigccq.cn/wow/priest*
// @match		http*://bbs.ngacn.cc/wow/shaman*
// @match		http*://nga.178.com/wow/shaman*
// @match		http*://bbs.nga.cn/wow/shaman*
// @match		http*://bbs.bigccq.cn/wow/shaman*
// @match		http*://bbs.ngacn.cc/wow/paladin*
// @match		http*://nga.178.com/wow/paladin*
// @match		http*://bbs.nga.cn/wow/paladin*
// @match		http*://bbs.bigccq.cn/wow/paladin*
// @match		http*://bbs.ngacn.cc/wow/warrior*
// @match		http*://nga.178.com/wow/warrior*
// @match		http*://bbs.nga.cn/wow/warrior*
// @match		http*://bbs.bigccq.cn/wow/warrior*
// @match		http*://bbs.ngacn.cc/wow/warlock*
// @match		http*://nga.178.com/wow/warlock*
// @match		http*://bbs.nga.cn/wow/warlock*
// @match		http*://bbs.bigccq.cn/wow/warlock*
// @match		http*://bbs.ngacn.cc/wow/hunter*
// @match		http*://nga.178.com/wow/hunter*
// @match		http*://bbs.nga.cn/wow/hunter*
// @match		http*://bbs.bigccq.cn/wow/hunter*
// @match		http*://bbs.ngacn.cc/wow/ui*
// @match		http*://nga.178.com/wow/ui*
// @match		http*://bbs.nga.cn/wow/ui*
// @match		http*://bbs.bigccq.cn/wow/ui*
// @match		http*://bbs.ngacn.cc/wow/lore*
// @match		http*://nga.178.com/wow/lore*
// @match		http*://bbs.nga.cn/wow/lore*
// @match		http*://bbs.bigccq.cn/wow/lore*
// @match		http*://bbs.ngacn.cc/it*
// @match		http*://nga.178.com/it*
// @match		http*://bbs.nga.cn/it*
// @match		http*://bbs.bigccq.cn/it*
// @match		http*://bbs.ngacn.cc/auto*
// @match		http*://nga.178.com/auto*
// @match		http*://bbs.nga.cn/auto*
// @match		http*://bbs.bigccq.cn/auto*
// @match		http*://bbs.ngacn.cc/ink*
// @match		http*://nga.178.com/ink*
// @match		http*://bbs.nga.cn/ink*
// @match		http*://bbs.bigccq.cn/ink*
// @match		http*://bbs.ngacn.cc/ng2*
// @match		http*://nga.178.com/ng2*
// @match		http*://bbs.nga.cn/ng2*
// @match		http*://bbs.bigccq.cn/ng2*
// @match		http*://bbs.ngacn.cc/play*
// @match		http*://nga.178.com/play*
// @match		http*://bbs.nga.cn/play*
// @match		http*://bbs.bigccq.cn/play*
// @match		http*://bbs.ngacn.cc/tvgame*
// @match		http*://nga.178.com/tvgame*
// @match		http*://bbs.nga.cn/tvgame*
// @match		http*://bbs.bigccq.cn/tvgame*
// @match		http*://bbs.ngacn.cc/wa2*
// @match		http*://nga.178.com/wa2*
// @match		http*://bbs.nga.cn/wa2*
// @match		http*://bbs.bigccq.cn/wa2*
// @match		http*://bbs.ngacn.cc/wow/justice*
// @match		http*://nga.178.com/wow/justice*
// @match		http*://bbs.nga.cn/wow/justice*
// @match		http*://bbs.bigccq.cn/wow/justice*
// @match		http*://bbs.ngacn.cc/wow/job*
// @match		http*://nga.178.com/wow/job*
// @match		http*://bbs.nga.cn/wow/job*
// @match		http*://bbs.bigccq.cn/wow/job*
// @match		http*://bbs.ngacn.cc/ccq*
// @match		http*://nga.178.com/ccq*
// @match		http*://bbs.nga.cn/ccq*
// @match		http*://bbs.bigccq.cn/ccq*
// @match		http*://bbs.ngacn.cc/gw2*
// @match		http*://nga.178.com/gw2*
// @match		http*://bbs.nga.cn/gw2*
// @match		http*://bbs.bigccq.cn/gw2*
// @match		http*://bbs.ngacn.cc/bns*
// @match		http*://nga.178.com/bns*
// @match		http*://bbs.nga.cn/bns*
// @match		http*://bbs.bigccq.cn/bns*
// @match		http*://bbs.ngacn.cc/heroes*
// @match		http*://nga.178.com/heroes*
// @match		http*://bbs.nga.cn/heroes*
// @match		http*://bbs.bigccq.cn/heroes*
// @match		http*://bbs.ngacn.cc/lol*
// @match		http*://nga.178.com/lol*
// @match		http*://bbs.nga.cn/lol*
// @match		http*://bbs.bigccq.cn/lol*
// @match		http*://bbs.ngacn.cc/hs*
// @match		http*://nga.178.com/hs*
// @match		http*://bbs.nga.cn/hs*
// @match		http*://bbs.bigccq.cn/hs*
// @match		http*://bbs.ngacn.cc/wot*
// @match		http*://nga.178.com/wot*
// @match		http*://bbs.nga.cn/wot*
// @match		http*://bbs.bigccq.cn/wot*
// @match		http*://bbs.ngacn.cc/wowp*
// @match		http*://nga.178.com/wowp*
// @match		http*://bbs.nga.cn/wowp*
// @match		http*://bbs.bigccq.cn/wowp*
// @match		http*://bbs.ngacn.cc/wows*
// @match		http*://nga.178.com/wows*
// @match		http*://bbs.nga.cn/wows*
// @match		http*://bbs.bigccq.cn/wows*
// @match		http*://bbs.ngacn.cc/jx3*
// @match		http*://nga.178.com/jx3*
// @match		http*://bbs.nga.cn/jx3*
// @match		http*://bbs.bigccq.cn/jx3*
// @match		http*://bbs.ngacn.cc/coc*
// @match		http*://nga.178.com/coc*
// @match		http*://bbs.nga.cn/coc*
// @match		http*://bbs.bigccq.cn/coc*
// @match		http*://bbs.ngacn.cc/pad*
// @match		http*://nga.178.com/pad*
// @match		http*://bbs.nga.cn/pad*
// @match		http*://bbs.bigccq.cn/pad*
// @match		http*://bbs.ngacn.cc/d3*
// @match		http*://nga.178.com/d3*
// @match		http*://bbs.nga.cn/d3*
// @match		http*://bbs.bigccq.cn/d3*
// @match		http*://bbs.ngacn.cc/dota*
// @match		http*://nga.178.com/dota*
// @match		http*://bbs.nga.cn/dota*
// @match		http*://bbs.bigccq.cn/dota*
// @match		http*://bbs.ngacn.cc/wt*
// @match		http*://nga.178.com/wt*
// @match		http*://bbs.nga.cn/wt*
// @match		http*://bbs.bigccq.cn/wt*
// @match		http*://bbs.ngacn.cc/ff14*
// @match		http*://nga.178.com/ff14*
// @match		http*://bbs.nga.cn/ff14*
// @match		http*://bbs.bigccq.cn/ff14*
// @match		http*://bbs.ngacn.cc/poi*
// @match		http*://nga.178.com/poi*
// @match		http*://bbs.nga.cn/poi*
// @match		http*://bbs.bigccq.cn/poi*
// @match		http*://bbs.ngacn.cc/gta*
// @match		http*://nga.178.com/gta*
// @match		http*://bbs.nga.cn/gta*
// @match		http*://bbs.bigccq.cn/gta*
// @match		http*://bbs.ngacn.cc/sc*
// @match		http*://nga.178.com/sc*
// @match		http*://bbs.nga.cn/sc*
// @match		http*://bbs.bigccq.cn/sc*
// @match		http*://bbs.ngacn.cc/ow*
// @match		http*://nga.178.com/ow*
// @match		http*://bbs.nga.cn/ow*
// @match		http*://bbs.bigccq.cn/ow*
// @match		http*://bbs.ngacn.cc/cr*
// @match		http*://nga.178.com/cr*
// @match		http*://bbs.nga.cn/cr*
// @match		http*://bbs.bigccq.cn/cr*
// @match		http*://bbs.ngacn.cc/king*
// @match		http*://nga.178.com/king*
// @match		http*://bbs.nga.cn/king*
// @match		http*://bbs.bigccq.cn/king*
// @author      Sunness
// @namespace https://greasyfork.org/users/63731
// ==/UserScript==

const snackbar_css = document.createElement('style');
snackbar_css.innerHTML = "#snackbar {visibility: hidden;background-color: #333;color: #fff;text-align: center;border-radius: 6px;padding: 12px;position: fixed;right: 50px;bottom: 30px;}#snackbar.show {visibility: visible;-webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;animation: fadein 0.5s, fadeout 0.5s 2.5s;}@-webkit-keyframes fadein {from {bottom: 0; opacity: 0;} to {bottom: 30px; opacity: 1;}}@keyframes fadein {from {bottom: 0; opacity: 0;}to {bottom: 30px; opacity: 1;}}@-webkit-keyframes fadeout {from {bottom: 30px; opacity: 1;} to {bottom: 0; opacity: 0;}}@keyframes fadeout {from {bottom: 30px; opacity: 1;}to {bottom: 0; opacity: 0;}}";
const snackbar = document.createElement('div');
snackbar.setAttribute('id', 'snackbar');
document.getElementsByTagName('body')[0].appendChild(snackbar_css);
document.getElementsByTagName('body')[0].appendChild(snackbar);
const backToTop = document.createElement('a');
backToTop.setAttribute('id', 'btt');
const backToTop_css = document.createElement('style');
backToTop_css.innerHTML="#btt {visibility: hidden;background: #333 url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\"><polygon fill=\"#FFFFFF\" points=\"8,2.8 16,10.7 13.6,13.1 8.1,7.6 2.5,13.2 0,10.7 \"/></svg>') no-repeat center 50%;color: #fff;text-align: center;border-radius: 6px;padding: 8px;position: fixed;right: 30px;bottom: 72px;height: 16px; width: 16px;}#btt.show {visibility: visible;}body {scroll-behavior: smooth;}";
document.getElementsByTagName('body')[0].appendChild(backToTop_css);
document.getElementsByTagName('body')[0].appendChild(backToTop);

const ip = __PAGE[2], threshold = 3000, opt = __PAGE[0].indexOf("/read") === 0 ? 2 : 1026, topPosition = document.getElementById("topicrows") ? 921 : 321;
let exist = true, running = false;

backToTop.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({
      top: topPosition,
      left: 0,
      behavior: 'smooth'
    });
});

window.addEventListener('scroll', async () => {
    if (document.documentElement.scrollTop < 1000) {
        backToTop.className = "";
    } else {
        backToTop.className = 'show';
    }
    if (exist && !running && (document.documentElement.scrollHeight - document.documentElement.scrollTop < threshold)) {
        running = true;
        const a = document.querySelector("a.uitxt1[title=加载下一页]");
        if (a !== null) {
            const sb = document.getElementById("snackbar");
            sb.innerHTML = `正在加载第${__PAGE[2] + 1}页`;
            sb.className = 'show';
            setTimeout(() => {sb.className = ""}, 3000);

            const res = await fetch(`${__PAGE[0]}&page=${__PAGE[2] + 1}`, {credentials: "same-origin"});
            const fr = new FileReader();

            fr.addEventListener('loadend', () => {
                const data = pr(fr.result, opt);
                const c = data[1].match(/\s*<tbody/) ? _$('/table') : _$('/span');
                const pb = document.getElementsByName('pageball');
                const iPc = $('m_posts_c') || $('topicrows');

                eval(data[0]);

                c.innerHTML = data[1];
                c.childNodes.forEach(n => {if (((opt & 1024) && (n.nodeName == "TBODY")) || (n.className == "forumbox postbox")) iPc.insertBefore(n, null);});

                data[2].forEach(d => eval(d));

                __PAGE[2]++;

                commonui.pageBtn(pb[0], {0: __PAGE[0], 1: __PAGE[1], 2: ip, 3: __PAGE[3]}, 4|16);
                commonui.pageBtn(pb[1], {0: __PAGE[0], 1: __PAGE[1], 2: __PAGE[2], 3: __PAGE[3]}, 2|8);

                running = false;
            });

            fr.readAsText(await res.blob(), "gbk");
        } else {
            exist = false;
        }
    }
});
