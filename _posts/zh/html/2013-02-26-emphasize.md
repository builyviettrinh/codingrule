---
layout: post
title:  强调显示，区别使用strong 标签与 em 标签
date:   2013-02-26
categories: zh html
tags: HTMLガイドライン
post_id: post_html_013
---
两者同为强调显示标签，容易混淆，请仔细阅读以下内容后区别使用。

<div>
  <h2>em 标签</h2>
  <p>加强语气层面的轻微强调。在文中需稍微加强语气的地方使用。可以理解为用于紧密衔接前后句节或文脉，或者单纯用于区别周围用语的标签。利用强调的单词传达句节或文脉的语气，或者用于区分名词等。需单独作为特别重要的关键词进行强调时使用&lt;strong&gt;。</p>
  <ul>
    <li>「&lt;em&gt;Cats&lt;/em&gt; are cute animals.」　⇒　（对将猫与狗进行比较的人）想说，“猫”很可爱呢！</li>
    <li>「Cats are &lt;em&gt;cute&lt;/em&gt; animals.」　⇒　（对认为猫不可爱的人）想说，猫很“可爱”呢！</li>
  </ul>
</div>

<div>
  <h2>strong 标签</h2>
  <p>特别重要的关键词层面的着重强调。不同于&lt;em&gt;标签，不具有与前后句节或文脉的衔接性和关联性，可以理解为定位文章或段落中特别重要位置的标签。但是需注意，使用过多将招致搜索引擎发出作弊（spam）判断。通过强调改变句节或文脉的解释，用于传达语气的强调内容使用&lt;em&gt;。</p>
  <ul>
    <li>「&lt;strong&gt;Cats&lt;/strong&gt; are cute animals.」　⇒　在文章内声明“Cats”关键词很重要</li>
    <li>「Cats are &lt;strong&gt;cute&lt;/strong&gt; animals.」　⇒　在文章内声明“Cute”关键词很重要</li>
  </ul>
</div>

<div>
  <h2>span 标签 ＋ font-weight:bold;</h2>
  <p>在文面上无具体意义的强调内容，根据设计情况在需要粗体字的位置使用。以下两个实例在文面上意义相同。</p>
  <ul>
    <li>「&lt;span&gt;Cats&lt;/span&gt; are cute animals.」</li>
    <li>「Cats are &lt;span&gt;cute&lt;/span&gt; animals.」</li>
  </ul>
</div>
