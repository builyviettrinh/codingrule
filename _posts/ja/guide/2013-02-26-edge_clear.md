---
layout: post
title:  複数行横並びリストのエッジクリア方法
date:   2018-03-27
categories: ja guide
tags: その他
post_id: post_guide_014
---

横並びリストで複数行になる場合の、推奨するエッジ処理方法です。

## 非推奨

&lt;li&gt;タグに margin-left を指定し、右端となる&lt;li&gt;タグに class=“first” とするなどして margin-left をカットする方法。

### HTML

```html
<ul>
  <li class="fisrt">テキスト</li>
  <li>テキスト</li>
  <li>テキスト</li>
</ul>
```

### CSS

```css
li {
  margin-left: 20px;
}

li.first {
  margin-left: 0;
}
```

## 推奨

エッジクリア用の class 名を付与するのではなく、 CSS のみで調整する。

### HTML

```html
<ul>
  <li>テキスト</li>
  <li>テキスト</li>
  <li>テキスト</li>
</ul>
```

### CSS

```css
li {
  margin-left: 20px;
}

li:first-child {
  margin-left: 0;
}
```