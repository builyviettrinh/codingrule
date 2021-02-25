---
layout: post
title:  根据媒体特性（Media Queries）制作自适应页面
date:   2013-02-26
categories: zh css
tags: CSSガイドライン
post_id: post_css_003
---
制作自适应页面时，请视情况利用以下 3 种模板。

```html
<link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="./css/style_tb.css" rel="stylesheet" media="screen and (max-width:979px) and (min-width:768px)" />
<link href="./css/style_sp.css" rel="stylesheet" media="screen and (max-width:767px)" />
```

<div>
<ul>
<li>style.css 是通用的基本 CSS 文件，可以用于所有媒体。</li>
<li>style_tb.css 可以追加后用于视图尺寸为宽 768px～979px 的媒体（适用于平板电脑）。</li>
<li>style_sp.css 可以追加后用于视图尺寸为宽 767px 以下的媒体（适用于智能手机）。</li>
</ul>
</div>
