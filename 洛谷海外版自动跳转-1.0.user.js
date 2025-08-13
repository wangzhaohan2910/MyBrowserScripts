// ==UserScript==
// @name         洛谷海外版自动跳转
// @license      MIT
// @version      1.0
// @description  洛谷海外版自动跳转
// @author       wangzhaohan2910
// @match        https://www.luogu.com/*
// ==/UserScript==
var url = window.location.href;
if (url.startsWith("https://www.luogu.com/article/"))
  window.location.href = url.replace("https://www.luogu.com/article/", "https://www.luogu.me/article/");
if (url.startsWith("https://www.luogu.com/paste/"))
  window.location.href = url.replace("https://www.luogu.com/paste/", "https://www.luogu.me/paste/");