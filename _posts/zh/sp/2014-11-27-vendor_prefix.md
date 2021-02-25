---
layout: post
title:  浏览器私有属性
date:   2016-04-26
categories: zh sp
tags: SPガイドライン
post_id: post_sp_007
---
使用css3时，根据不同的需求请追加以下浏览器私有属性代码

```css
/* webkit系列浏览器(safari/Android标准浏览器/Chrome等) */
-webkit-transform: translate(100,0);
/* Mozila系列浏览器(FireFox等) */
-moz-transform: translate(100,0);
/* MicroSoft系列浏览器(Windows Phone等) */
-ms-transform: translate(100,0);
/* 履行W3C 标准 */
transform: translate(100,0);
```

浏览器私有属性要根据对应os/浏览器以及浏览器的执行状态进行省略。
