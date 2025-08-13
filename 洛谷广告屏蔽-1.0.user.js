// ==UserScript==
// @name         洛谷广告屏蔽
// @license      MIT
// @version      1.0
// @description  洛谷广告屏蔽
// @author       wangzhaohan2910
// @match        https://www.luogu.com.cn/*
// ==/UserScript==
setInterval(() => {document.querySelectorAll("div[data-v-0a593618]").forEach(el => {el.remove();});
document.querySelectorAll("div[data-v-fdcd5a58]").forEach(el => {el.remove();});}, 1);
document.getElementsByClassName('am-u-md-8')[0].remove();
document.getElementsByClassName('am-u-md-4 lg-punch am-text-center')[0].style = 'position: relative; left:33%';