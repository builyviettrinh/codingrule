---
layout: post
title:  基本的なディレクトリマップ
date:   2013-02-26
categories: ja guide
tags: ディレクトリマップ
post_id: post_guide_007
---
新規サイト構築の場合、原則として、以下のディレクトリマップのように構築してください。別途指示やCMSへの最適化、更新案件のサイト慣例などがある場合は、この限りではありません。

通常、１コンテンツ１フォルダとし、サイトロゴやグローバルナビボタン画像などのサイト共通ファイル群以外は、自身のコンテンツフォルダ内ですべて完結させてください。

（赤文字=ファイル／青文字=フォルダ）

<div>
  <ul>
    <li>
      <p><span class="file">index.html</span>　トップページ</p>
    </li>
    <li>
      <p><span class="file">something.html</span>　セカンドページ</p>
    </li>
    <li>
      <p><span class="folder">[img]</span></p>
      <ul>
        <li>
          <p><span class="folder">[share]</span>　サイト共通用画像ファイルを格納</p>
        </li>
        <li>
          <p><span class="folder">[index]</span>　トップページ専用画像ファイルを格納</p>
        </li>
        <li>
          <p><span class="folder">[something]</span>　セカンドページ専用画像ファイルを格納</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[css]</span>　cssファイルを格納</p>
      <ul>
        <li>
          <p><span class="folder">[vendor]</span>　（ファイル数が増えて煩雑になった場合に任意で設置）プラグイン専用cssファイルを格納</p>
        </li>
        <li>
          <p><span class="file">share.css</span>　サイト共通用cssファイル（リセットcssの記述はこれに含む）</p>
        </li>
        <li>
          <p><span class="file">index.css</span>　トップページ専用cssファイル</p>
        </li>
        <li>
          <p><span class="file">something.css</span>　セカンドページ専用cssファイル</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[js]</span>　JavaScriptファイルを格納</p>
      <ul>
        <li>
          <p><span class="folder">[share]</span>　（ファイル数が増えて煩雑になった場合に任意で設置）share.jsを含む汎用モジュールjsファイルを格納</p>
        </li>
        <li>
          <p><span class="folder">[vendor]</span>　（ファイル数が増えて煩雑になった場合に任意で設置）jQueryファイルを含むプラグインjsファイルを格納</p>
        </li>
        <li>
          <p><span class="file">share.js</span>　サイト共通用JavaScriptファイル</p>
        </li>
        <li>
          <p><span class="file">index.js</span>　トップページ専用JavaScriptファイル</p>
        </li>
        <li>
          <p><span class="file">something.js</span>　セカンドページ専用JavaScriptファイル</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[category]</span>　コンテンツ(カテゴリー)別フォルダ</p>
      <ul>
        <li>
          <p><span class="file">index.html</span>　カテゴリートップ</p>
        </li>
        <li>
          <p><span class="file">something.html</span>　カテゴリーセカンド</p>
        </li>
        <li>
          <p><span class="folder">[img]</span>　このカテゴリー内だけで使う画像ファイルを格納　※画像が多く乱雑になる場合のみ、この中でさらに分岐</p>
        </li>
        <li>
          <p><span class="folder">[css]</span>　このカテゴリー内だけで使うcssファイルを格納</p>
          <ul>
            <li>
              <p><span class="file">category.css</span>　カテゴリー内共通cssファイル</p>
            </li>
            <li>
              <p><span class="file">index.css</span>　カテゴリートップ専用cssファイル</p>
            </li>
            <li>
              <p><span class="file">something.css</span>　カテゴリーセカンド専用cssファイル</p>
            </li>
          </ul>
        </li>
        <li>
          <p><span class="folder">[js]</span>　このカテゴリー内だけで使うJavaScriptファイルを格納</p>
          <ul>
            <li>
              <p><span class="file">category.js</span>　カテゴリー内共通JavaScriptファイル</p>
            </li>
            <li>
              <p><span class="file">index.js</span>　カテゴリートップ専用JavaScriptファイル</p>
            </li>
            <li>
              <p><span class="file">something.js</span>　カテゴリーセカンド専用JavaScriptファイル</p>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>

<h2>ディレクトリの追加</h2>
共通フォルダは<span class="folder">[share]</span>とし、専用フォルダは対象html名と同名フォルダ(例えば<span class="file">index.html</span>専用なら<span class="folder">[index]</span>)としてください。  
画像、html以外は、混在に注意して、拡張子(<span class="folder">[swf]</span>など)、またはグループ名(<span class="folder">[sound]</span>など)で分類してください。
