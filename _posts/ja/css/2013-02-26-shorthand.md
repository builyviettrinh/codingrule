---
layout: post
title:  プロパティのShorthandについて
date:   2018-03-27
categories: ja css
tags: CSSガイドライン
post_id: post_css_006
---
margin, padding, border, list-style, background, font, outline はプロパティをまとめて簡略化して記述できます。

```css
.selector {
  border: size type color;
  border: 1px solid #cccccc;

  background: url(...) 左右揃え 上下揃え リピート 背景色;
  background: url(sample.gif) 10px center no-repeat #ff0000;

  margin: 上　右　下　左;
  margin: 上下　左右;
  margin: 上　左右　下;

  margin: 0 0 0 10px; /* 値を一つだけ設定するなら、Shorthandを使用しない */
  margin-left: 10px;
}
```
