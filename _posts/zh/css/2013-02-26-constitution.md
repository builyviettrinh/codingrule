---
layout: post
title:  CSS 文件的结构
date:   2013-02-26
categories: zh css
tags: CSSガイドライン
post_id: post_css_002
---
分割 CSS 文件时，请参照以下结构进行制作。请勿使用 @import 加载多个文件。

<div>
  <ul>
    <li>
      <h3>重置 CSS 及网站内的共用排版 CSS</h3>
      <p>share.css</p>
    </li>
    <li>
      <h3>各 html 的特殊 CSS</h3>
      <p>html名.css</p>
    </li>
    <li>
      <h3>目录内的共用排版 CSS</h3>
      <p>目录名.css</p>
    </li>
    <li>
      <h3>打印用 CSS</h3>
      <p>print.css</p>
    </li>
    <li>
      <h3>智能手机用 CSS</h3>
      <p>扩展的父级 css 名_sp.css</p>
    </li>
    <li>
      <h3>平板电脑用 CSS</h3>
      <p>扩展的父级 css 名_tb.css</p>
    </li>
  </ul>
</div>
