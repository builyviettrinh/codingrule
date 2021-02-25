# codingrule

## 推奨環境
```
$ ruby -v
ruby 2.2.3

$ jekyll -v
jekyll 3.1.2
```


## 開発環境構築
### Mac, Linux, Unix
```
// install
$ gem install jekyll

```
// server
$ jekyll serve --watch
Windows
Windows7 64bit にて動作確認済み

## 参考サイト
Windows で Jekyll を動かす
jekyll 2.5.3 を Windows 環境にインストール

## 更新手順・ルール
### Git でブランチを作成し、Pull request を送る
ローカルブランチに「issue-」と issue 番号を付けたブランチを作成する
```
$ git branch issue-(issue 番号)
```
作成したローカルブランチに移動
```
$ git checkout issue-(issue 番号)
```
ローカルブランチで作業完了後、コミットのコメント最後に「#(issue 番号)」を記述して、issue と紐付ける
```
$ git commit -m "bug fix #(issue 番号)"
```
コミット後、ローカルブランチをリモートブランチに push
```
$ git push origin issue-(issue 番号)"
```
GitHub のリポジトリに表示される「Complare＆ Pull request」というボタンをクリック、issue 提起者宛てに Pull request を送る
jekyll で記事追加・更新を行う
```
/\_post/ 直下の各言語ディレクトリ内の各カテゴリディレクトリにファイル（.md）を追加 or 修正
``
ファイルの命名規則は yyyy-mm-dd-(article name).md
```
命名規則内の日付は何でもよい。（フォーマットは jekyll の決まりごと）
```
.md ファイルの文頭に以下を必ず記述する
```
　---
// post で不変
layout: post
// 記事タイトル
title: CSS ファイルの構成
// 投稿 or 更新日時
date: 2013-02-26
// 言語とカテゴリ
categories: ja css
// タグ
tags: CSS ガイドライン
// 投稿 ID
post_id: post_css_002

---

categories は必ず 2 つ（言語 1 つ、カテゴリ 1 つ）を記述する
言語
日本語：ja
中国語：zh
ベトナム語：vn
英語：en
カテゴリ
GUIDE
HTML
CSS
SP
post_id は重複しないようにする
CSS を修正したい場合は、 /css/style.scss を編集する
JS を修正したい場合は、 /js/index.js を編集する
画像を追加したい場合は、 /img/ 内に追加する
