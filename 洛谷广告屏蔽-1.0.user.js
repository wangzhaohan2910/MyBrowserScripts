// ==UserScript==
// @name         洛谷广告屏蔽
// @license      The Unlicense
// @version      1.0
// @description  洛谷广告屏蔽
// @author       wangzhaohan2910
// @match        https://www.luogu.com.cn/*
// @match        https://www.luogu.me/*
// @match        https://dev.luogu.me/*
// ==/UserScript==
setInterval(() => {document.querySelectorAll("div[data-v-0a593618]").forEach(el => {el.remove();});
document.querySelectorAll("div[data-v-fdcd5a58]").forEach(el => {el.remove();});}, 1);
document.getElementsByClassName('am-u-md-8')[0].remove();
document.getElementsByClassName('am-u-md-4 lg-punch am-text-center')[0].style = 'position: relative; left:33%';
document.querySelector("div#propaganda.card.propaganda.shadow").remove()
document.querySelector("div#propaganda-section.propaganda-section").remove()
