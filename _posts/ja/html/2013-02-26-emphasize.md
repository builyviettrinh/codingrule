---
layout: post
title:  強調表示、strongタグとemタグの使い別け
date:   2013-02-26
categories: ja html
tags: HTMLガイドライン
post_id: post_html_013
---
同じ強調表示タグで使い分けが難しいが、以下をよく読んで使い分けてください。

<div>
  <h2>emタグ</h2>
  <p>ニュアンスを強くする意味での軽い強調。文の中でちょっと強めに言いたいところに使う。前後の文節・文脈と密接に連動して作用するもの、または単に周囲と区別したりするもの、としてとらえると分かりやすい。強調する単語によって文節・文脈のニュアンスを伝えたり、名詞などを区別したりする。単体で特に重要なキーワードとして強調したい場合は&lt;strong&gt;を使う。</p>
  <ul>
    <li>「&lt;em&gt;Cats&lt;/em&gt; are cute animals.」　⇒　(犬と比較してる人に)『猫』はかわいいよね！と言いたい。</li>
    <li>「Cats are &lt;em&gt;cute&lt;/em&gt; animals.」　⇒　(猫はかわいくないという人に)猫は『かわいい』よ！と言いたい。</li>
  </ul>
</div>

<div>
  <h2>strongタグ</h2>
  <p>特に重要なキーワードを意味する強い強調。&lt;em&gt;タグのような前後の文節・文脈との連動性や関連性はなく、文書・段落の中で特に重要な位置づけにあるもの、としてとらえると分かりやすい。多用すると検索エンジンからスパム判定を受けるので注意。強調する事で文節・文脈の解釈が変わってくるような、ニュアンスを伝えるための強調には&lt;em&gt;を使う。</p>
  <ul>
    <li>「&lt;strong&gt;Cats&lt;/strong&gt; are cute animals.」　⇒　文書中、『Cats』というキーワードが重要であると宣言する。</li>
    <li>「Cats are &lt;strong&gt;cute&lt;/strong&gt; animals.」　⇒　文書中、『Cute』というキーワードが重要であると宣言する。</li>
  </ul>
</div>

<div>
  <h2>&lt;span&gt;タグ ＋ font-weight:bold;</h2>
  <p>文書的には意味がない強調で、デザインの都合で太字にしたいところなどに使う。以下ふたつの例はどちらも、文書上はまったく同じ意味である。</p>
  <ul>
    <li>「&lt;span&gt;Cats&lt;/span&gt; are cute animals.」</li>
    <li>「Cats are &lt;span&gt;cute&lt;/span&gt; animals.」</li>
  </ul>
</div>
