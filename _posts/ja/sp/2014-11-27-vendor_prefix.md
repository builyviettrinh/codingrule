---
layout: post
title:  ベンダープレフィックス
date:   2014-11-27
categories: ja sp
tags: SPガイドライン
post_id: post_sp_007
---
CSS3を使用する場合は、必要に応じて以下のベンダープレフィックスをつけてください。

```css
/* webkit系ブラウザ(safari/Android標準ブラウザ/Chromeなど) */
-webkit-transform: translate(100,0);
/* Mozila系ブラウザ(FireFoxなど) */
-moz-transform: translate(100,0);
/* MicroSoft系ブラウザ(Windows Phoneなど) */
-ms-transform: translate(100,0);
/* W3C 標準実装 */
transform: translate(100,0);
```

各プレフィックスは対応OS/ブラウザ、およびブラウザの実装状況に合わせて省略してください。
