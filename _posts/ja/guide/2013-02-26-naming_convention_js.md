---
layout: post
title:  JSの命名規則
date:   2018-03-27
categories: ja guide
tags: 命名規則
post_id: post_guide_011
---
JS から参照するセレクタには先頭に js- を付けます。
プレフィックス js- にアンダースコアではなくハイフンを使っているのは、特別な意味を持つということを分かりやすくし、JS から使うセレクタと CSS から使うセレクタを明確に区別するためです。
これによって変更の際の影響範囲を予想しやすくなります。

また、単一責務にするため、js- プレフィックスを付与したセレクタには、CSS を付与しないでください。
