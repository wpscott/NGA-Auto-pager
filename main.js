// ==UserScript==
// @name        NGA Auto Pager V2
// @version     2.2
// @description NGA自动翻页插件
// @match *://bbs.nga.cn/read.php*
// @match *://bbs.nga.cn/thread.php*
// @match *://bbs.nga.cn/wow*
// @match *://bbs.nga.cn/it*
// @match *://bbs.nga.cn/auto*
// @match *://bbs.nga.cn/ink*
// @match *://bbs.nga.cn/ng2*
// @match *://bbs.nga.cn/play*
// @match *://bbs.nga.cn/tvgame*
// @match *://bbs.nga.cn/wa2*
// @match *://bbs.nga.cn/ccq*
// @match *://bbs.nga.cn/gw2*
// @match *://bbs.nga.cn/bns*
// @match *://bbs.nga.cn/heroes*
// @match *://bbs.nga.cn/lol*
// @match *://bbs.nga.cn/hs*
// @match *://bbs.nga.cn/wot*
// @match *://bbs.nga.cn/jx3*
// @match *://bbs.nga.cn/coc*
// @match *://bbs.nga.cn/pad*
// @match *://bbs.nga.cn/d3*
// @match *://bbs.nga.cn/dota*
// @match *://bbs.nga.cn/wt*
// @match *://bbs.nga.cn/ff14*
// @match *://bbs.nga.cn/poi*
// @match *://bbs.nga.cn/gta*
// @match *://bbs.nga.cn/sc*
// @match *://bbs.nga.cn/fn*
// @match *://bbs.nga.cn/ow*
// @match *://bbs.nga.cn/cr*
// @match *://bbs.nga.cn/king*
// @match *://nga.178.com/read.php*
// @match *://nga.178.com/thread.php*
// @match *://nga.178.com/wow*
// @match *://nga.178.com/it*
// @match *://nga.178.com/auto*
// @match *://nga.178.com/ink*
// @match *://nga.178.com/ng2*
// @match *://nga.178.com/play*
// @match *://nga.178.com/tvgame*
// @match *://nga.178.com/wa2*
// @match *://nga.178.com/ccq*
// @match *://nga.178.com/gw2*
// @match *://nga.178.com/bns*
// @match *://nga.178.com/heroes*
// @match *://nga.178.com/lol*
// @match *://nga.178.com/hs*
// @match *://nga.178.com/wot*
// @match *://nga.178.com/jx3*
// @match *://nga.178.com/coc*
// @match *://nga.178.com/pad*
// @match *://nga.178.com/d3*
// @match *://nga.178.com/dota*
// @match *://nga.178.com/wt*
// @match *://nga.178.com/ff14*
// @match *://nga.178.com/poi*
// @match *://nga.178.com/gta*
// @match *://nga.178.com/sc*
// @match *://nga.178.com/fn*
// @match *://nga.178.com/ow*
// @match *://nga.178.com/cr*
// @match *://nga.178.com/king*
// @author      Sunness
// @namespace https://greasyfork.org/users/63731
// ==/UserScript==

const snackbar_css=document.createElement('style');snackbar_css.innerHTML=".pager_style{background-color:#333;color:#fff;text-align:center;border-radius:6px;padding:8px;position:fixed}#snackbar{visibility:hidden;padding:12px;right:50px;bottom:30px}#snackbar.show{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}";const snackbar=document.createElement('div');snackbar.setAttribute('id','snackbar');document.getElementsByTagName('body')[0].appendChild(snackbar_css);document.getElementsByTagName('body')[0].appendChild(snackbar);const backToTop=document.createElement('a');backToTop.setAttribute('id','btt');backToTop.setAttribute('href','#');const backToTop_css=document.createElement('style');backToTop_css.innerHTML="#btt{visibility:hidden;background:url('data:image/svg+xml;utf8,<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" enable-background=\"new 0 0 16 16\" xml:space=\"preserve\"><polygon fill=\"#FFFFFF\" points=\"8,2.8 16,10.7 13.6,13.1 8.1,7.6 2.5,13.2 0,10.7 \"/></svg>') center 50% no-repeat #333;right:30px;bottom:72px;height:16px;width:16px}#btt.show{visibility:visible}";document.getElementsByTagName('body')[0].appendChild(backToTop_css);document.getElementsByTagName('body')[0].appendChild(backToTop);const reply=document.createElement('a');reply.setAttribute('id','quick_reply');reply.setAttribute('href','#');reply.innerText="回";const reply_css=document.createElement('style');reply_css.innerHTML="#quick_reply:hover{color:#FFF;}#quick_reply{visibility:hidden;text-decoration:none;user-select:none;right:63px;bottom:72px;height:16px;width:16px}#quick_reply.show{visibility:visible}.fast_reply{position:fixed;left:33vw;top:25vh;background:#FFF0CD;box-shadow:0 0 16px #403C33;border-radius:6px}";document.getElementsByTagName('body')[0].appendChild(reply_css);document.getElementsByTagName('body')[0].appendChild(reply);const old_post_btn=document.querySelector("#fast_post_c a.uitxt1");const new_post_btn=old_post_btn.cloneNode(!0);const subject=document.querySelector("#fast_post_c .row1 .c2 input");const content=document.querySelector("#fast_post_c .row1 .c2 textarea");const threshold=3000,topPosition=Math.round((document.getElementById("topicrows")||document.getElementById("m_posts")).getBoundingClientRect().top+window.scrollY);let exist=!1,running=!1,opt=2,ip=1;if(typeof __PAGE!=="undefined"){ip=__PAGE[2];opt=__PAGE[0].indexOf("/read")===0?2:1026;exist=!0}
backToTop.addEventListener('click',event=>{event.preventDefault();window.scrollTo({top:topPosition,left:0,behavior:'smooth'})});reply.addEventListener('click',event=>{event.preventDefault();const fr=document.getElementById("fast_post_c");if(fr.className.length===0){fr.className="fast_reply";old_post_btn.parentNode.replaceChild(new_post_btn,old_post_btn)}else{new_post_btn.parentNode.replaceChild(old_post_btn,new_post_btn);fr.className=""}});new_post_btn.addEventListener('click',event=>{event.preventDefault();commonui.newPost(new_post_btn,postfunc.__REPLY_BLANK,window.__CURRENT_F_BIT,window.__CURRENT_FID,window.__CURRENT_TID,0,null,subject.value,content.value);snackbar.innerHTML=`正在回复`;snackbar.className='show';setTimeout(()=>{snackbar.className=""},3000)});window.addEventListener('scroll',async()=>{if(document.documentElement.scrollTop<1000){backToTop.className="pager_style";if(opt===2){reply.className="pager_style"}}else{backToTop.className="pager_style show";if(opt===2){reply.className="pager_style show"}}
if(exist&&!running&&(document.documentElement.scrollHeight-document.documentElement.scrollTop<threshold)){running=!0;const a=document.querySelector("a.uitxt1[title=加载下一页]");if(a!==null){snackbar.innerHTML=`正在加载第${__PAGE[2] + 1}页`;snackbar.className='pager_style show';setTimeout(()=>{snackbar.className="pager_style"},3000);const res=await fetch(`${__PAGE[0]}&page=${__PAGE[2] + 1}`,{credentials:"same-origin"});const fr=new FileReader();fr.addEventListener('loadend',()=>{console.log(`opt: ${opt}`);const data=pr(fr.result,opt);const c=data[1].match(/\s*<tbody/)?_$('/table'):_$('/span');const pb=document.getElementsByName('pageball');const iPc=$('m_posts_c')||$('topicrows');eval(data[0]);c.innerHTML=data[1];c.childNodes.forEach(n=>{if(((opt&1024)&&(n.nodeName=="TBODY"))||(n.className=="forumbox postbox"))iPc.insertBefore(n,null)});data[2].forEach(d=>eval(d));__PAGE[2]++;commonui.pageBtn(pb[0],{0:__PAGE[0],1:__PAGE[1],2:ip,3:__PAGE[3]},4|16);commonui.pageBtn(pb[1],{0:__PAGE[0],1:__PAGE[1],2:__PAGE[2],3:__PAGE[3]},2|8);running=!1});fr.readAsText(await res.blob(),"gbk")}else{exist=!1}}})
