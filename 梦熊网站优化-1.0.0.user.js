// ==UserScript==
// @name 梦熊网站优化
// @description 此脚本优化了 mna.wang 的比赛排行榜以及提交记录界面。
// @license MIT
// @homepageURL https://github.com/wangzhaohan2910
// @version 1.0.0
// @author wangzhaohan2910
// @match https://mna.wang/*
// ==/UserScript==

function contestName()
{
  const allElements = document.querySelectorAll("span.textFitted");
  allElements.forEach(el => {
    el.style.fontSize = '14px';
    el.parentElement.style.width = 'fit-content';
  });
}
function ranklistUser()
{
  const style = document.createElement('style');
  style.textContent = "span.user-gray.user-nameplate { font-size: 14px; }";
  document.head.appendChild(style);
}
function ranklistWidth()
{
  const allElements = document.querySelectorAll("td");
  allElements.forEach(el => {
    if (el.style.minWidth == '150px')
      el.style.minWidth = '200px';
  });
}
contestName();
ranklistUser();
setInterval(ranklistWidth, 1);