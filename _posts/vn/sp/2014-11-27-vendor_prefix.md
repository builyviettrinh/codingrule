---
layout: post
title:  Vendor prefix
date:   2014-11-27
categories: vn sp
tags: SPガイドライン
post_id: post_sp_007
---
Trường hợp sử dụng css3, hãy thêm vendor prefix dưới đây khi cần.

```css
/* Browser hệ webkit (browser tiêu chuẩn safari/ Android, Chrome…)  */
-webkit-transform: translate(100,0);
/* Browser hệ Mozila (FireFox…) */
-moz-transform: translate(100,0);
/* Browser hệ MicroSoft  (Windows Phone…) */
-ms-transform: translate(100,0);
/* Coding chuẩn W3C */
transform: translate(100,0);
```

Lược bỏ các prefix một cách phù hợp với os/ browser, và với tình hình coding của browser đối ứng.
