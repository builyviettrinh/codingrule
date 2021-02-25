---
layout: post
title:  メディアクエリでレスポンシブWeb
date:   2013-02-26
categories: ja css
tags: CSSガイドライン
post_id: post_css_003
---
レスポンシブWeb制作の場合、要件に応じて以下の3つのテンプレートを利用してください。

```html
<link href="./css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="./css/style_tb.css" rel="stylesheet" media="screen and (max-width:979px) and (min-width:768px)" />
<link href="./css/style_sp.css" rel="stylesheet" media="screen and (max-width:767px)" />
```

<div>
<ul>
<li>style.css はベースとする汎用的なCSSファイルで、すべてのメディアに適用されます。</li>
<li>style_tb.css は、ビューサイズについて横幅768px～979pxのメディアに追加適用されます（タブレット向け）。</li>
<li>style_sp.css は、ビューサイズについて横幅767px以下のメディアに追加適用されます（スマートフォン向け）。</li>
</ul>
</div>
