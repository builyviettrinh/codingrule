---
layout: post
title:  CSSファイルの構成
date:   2013-02-26
categories: ja css
tags: CSSガイドライン
post_id: post_css_002
---
CSSファイルを分割する際、下記の構成で作成してください。@importを使った複数読み込みは行わないでください。

<div>
  <ul>
    <li>
      <h3>リセットCSS、及びサイト内共通レイアウト用CSS</h3>
      <p>share.css</p>
    </li>
    <li>
      <h3>html別ユニークCSS</h3>
      <p>html名.css</p>
    </li>
    <li>
      <h3>ディレクトリ内共通レイアウト用CSS</h3>
      <p>ディレクトリ名.css</p>
    </li>
    <li>
      <h3>印刷用CSS</h3>
      <p>print.css</p>
    </li>
    <li>
      <h3>スマートフォン用CSS</h3>
      <p>拡張する親css名_sp.css</p>
    </li>
    <li>
      <h3>タブレット用CSS</h3>
      <p>拡張する親css名_tb.css</p>
    </li>
  </ul>
</div>
