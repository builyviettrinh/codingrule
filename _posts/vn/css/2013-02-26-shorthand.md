---
layout: post
title:  Shorthand của Property
date:   2018-03-27
categories: vn css
tags: CSSガイドライン
post_id: post_css_005
---
margin, padding, border, list-style, background, font, outline có thể gom các property lại và viết một cách giản lược.

```css
.selector {
  border: size type color;
  border: 1px solid #cccccc;

  background: url(...)  canh trái phải  canh trên dưới  repeat  màu nền;
  background: url(sample.gif) 10px center no-repeat #ff0000;

  margin: phía trên  bên phải  phía dưới  bên trái;
  margin: trên dưới  trái phải;
  margin: phía trên  trái phải  phía dưới;

  margin: 0 0 0 10px; /* Nếu chỉ setting 1 giá trị, thì không sử dụng Shorthand */
  margin-left: 10px;
}
```
