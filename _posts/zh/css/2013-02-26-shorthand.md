---
layout: post
title:  关于属性的 Shorthand
date:   2018-03-27
categories: zh css
tags: CSSガイドライン
post_id: post_css_005
---
margin, padding, border, list-style, background, font, outline 可以归纳属性后简化表达。

```css
.selector {
  border: size type color;
  border: 1px solid #cccccc;

  background: url(...) 左右 上下 REPEAT BACKGROUND;
  background: url(sample.gif) 10px center no-repeat #ff0000;

  margin: top right bottom left;
  margin: top-bottom left-right;
  margin: top left-right bottom;

  margin: 0 0 0 10px; /* 如果仅设定一个值，则不使用 Shorthand。 */
  margin-left: 10px;
}
```
