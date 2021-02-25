---
layout: post
title:  多行横排表单的边缘处理方法
date:   2013-02-26
categories: zh guide
tags: その他
post_id: post_guide_012
---
因横排表单形成多行时，建议采用的边缘处理方法。

<div>
<h2>不建议</h2>
<p>在&lt;li&gt;标签内指定 margin-right，在代表右端的&lt;li&gt;标签内定义 class=“right” 等，切割 margin-right 的方法。 在&lt;li&gt;标签内指定 margin-bottom ，在代表下端的&lt;li&gt;标签内定义 class=“bottom” 等，切割 margin-bottom 的方法。</p>
</div>

<div>
<h2>建议</h2>
<p>在&lt;li&gt;标签内指定 margin-left ，在代表左端的&lt;li&gt;标签内定义 class=“first"，切割 margin-left 的方法。 在&lt;li&gt;标签内指定 margin-top，在代表上端的&lt;li&gt;标签内定义 class="first"，切割 margin-top 的方法。</p>
</div>
