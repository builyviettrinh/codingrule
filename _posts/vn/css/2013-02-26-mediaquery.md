---
layout: post
title:  Web Responsive bằng Media Queries
date:   2013-02-26
categories: vn css
tags: CSSガイドライン
post_id: post_css_003
---
Khi tạo Web Responsive, tùy theo điều kiện mà sử dụng một trong 3 template dưới đây.

```html
<link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="./css/style_tb.css" rel="stylesheet" media="screen and (max-width:979px) and (min-width:768px)" />
<link href="./css/style_sp.css" rel="stylesheet" media="screen and (max-width:767px)" />
```

<div>
<ul>
<li>style.css: là file css thông dụng cơ bản (base) được áp dụng cho tất cả media.</li>
<li>style_tb.css: được áp dụng bổ sung cho media về view size có width 768px～979px (dành cho tablet).</li>
<li>style_sp.css: được áp dụng bổ sung cho media về view size có width từ 767px trở xuống (dành cho SP).</li>
</ul>
</div>
