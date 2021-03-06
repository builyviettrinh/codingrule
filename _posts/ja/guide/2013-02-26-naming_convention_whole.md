---
layout: post
title:  命名規則 全般
date:   2018-03-27
categories: ja guide
tags: 命名規則
post_id: post_guide_009
---
あらゆるファイル名、フォルダ名、id/class名は、原則として小文字を使用し、大文字の使用は禁止です。

内容を簡略的に表す単語、または単語の羅列にしてください。

単語の簡略化は原則禁止とします。

<div>
  <h2>例</h2>
  <ul>
    <li><span>◯　button</span>×　btn</li>
    <li><span>◯　text</span>×　txt</li>
    <li><span>◯　banner</span>×　bnr</li>
    <li><span>◯　background</span>×　bg</li>
    <li><span>◯　image</span>×　img</li>
    <li><span>◯　icon</span>×　ico</li>
  </ul>
</div>

単語の連結は原則としてスネークケースを適用します。ただし、以下の場合はプレフィックス「-(ハイフン)」を使用します。

<div>
  <ul>
    <li>画像名のプレフィックスとの区切り（詳しくは「<a href="#post_guide_010">画像の命名規則</a>」を確認）　&gt;　<em>img-</em></li>
    <li><p>JS から参照するセレクタに付与するプレフィックスとの区切り（詳しくは「<a href="#post_guide_011">JSの命名規則</a>」を確認）　&gt;　<em>js-</em></p></li>
  </ul>
</div>
