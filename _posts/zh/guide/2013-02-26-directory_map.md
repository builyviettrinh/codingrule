---
layout: post
title:  基本目录结构
date:   2013-02-26
categories: zh guide
tags: ディレクトリマップ
post_id: post_guide_007
---
构筑新网站时，原则上请按照下面的目录结构进行架构。另有指示或要求 CMS 的最佳优化、或有更新内容的网站惯例等时，不在此限。

通常，1 个栏目 1 个文件夹，除网站 LOGO 和全局导航按钮图片等网站共用的文件以外，请在各自的栏目文件夹内完成所有制作。

（红色字符=文件 / 蓝色字符=文件夹）

<div>
  <ul>
    <li>
      <p><span class="file">index.html</span>　首页</p>
    </li>
    <li>
      <p><span class="file">something.html</span>　二级页面</p>
    </li>
    <li>
      <p><span class="folder">[img]</span></p>
      <ul>
        <li>
          <p><span class="folder">[share]</span>　存储网站共用图片文件</p>
        </li>
        <li>
          <p><span class="folder">[index]</span>　存储首页专用图片文件</p>
        </li>
        <li>
          <p><span class="folder">[something]</span>　存储二级页面专用图片文件</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[css]</span>　存储 css 文件</p>
      <ul>
        <li>
          <p><span class="folder">[lib]</span>　（因文件数的增加而变得比较复杂时，可以随意设置文件夹。）存放插件专用的css文件</p>
        </li>
        <li>
          <p><span class="file">share.css</span>　网站共用 css 文件（包括重置 css 的编写文件）</p>
        </li>
        <li>
          <p><span class="file">index.css</span>　首页专用 css 文件</p>
        </li>
        <li>
          <p><span class="file">something.css</span>　二级页面专用css文件</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[js]</span>　存储 JavaScript 文件</p>
      <ul>
        <li>
          <p><span class="folder">[share]</span>　（因文件数的增加而变得比较复杂时，可以随意设置文件夹。）存放包含share.js的通用模块js文件</p>
        </li>
        <li>
          <p><span class="folder">[lib]</span>　（因文件数的增加而变得比较复杂时，可以随意设置文件夹。）存放包含jQuery文件的插件js文件</p>
        </li>
        <li>
          <p><span class="file">share.js</span>　网站共用 JavaScript 文件</p>
        </li>
        <li>
          <p><span class="file">index.js</span>　首页专用 JavaScript 文件</p>
        </li>
        <li>
          <p><span class="file">something.js</span>　二级页面专用 JavaScript 文件</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[category]</span>　内容（栏目）文件夹</p>
      <ul>
        <li>
          <p><span class="file">index.html</span>　二级栏目首页</p>
        </li>
        <li>
          <p><span class="file">something.html</span>　二级栏目子页</p>
        </li>
        <li>
          <p><span class="folder">[img]</span>　存储仅在该栏目内使用的图片文件 ※仅限图片多而杂乱时，在该文件夹内进一步细化</p>
        </li>
        <li>
          <p><span class="folder">[css]</span>　存储仅在该栏目内使用的 css 文件</p>
          <ul>
            <li>
              <p><span class="file">category.css</span>　栏目内的共用 css 文件</p>
            </li>
            <li>
              <p><span class="file">index.css</span>　栏目首页专用 css 文件</p>
            </li>
            <li>
              <p><span class="file">something.css</span>　栏目子页专用 css 文件</p>
            </li>
          </ul>
        </li>
        <li>
          <p><span class="folder">[js]</span>　存储仅在该栏目内使用的 JavaScript 文件</p>
          <ul>
            <li>
              <p><span class="file">category.js</span>　栏目内的共用 JavaScript 文件</p>
            </li>
            <li>
              <p><span class="file">index.js</span>　栏目首页专用 JavaScript 文件</p>
            </li>
            <li>
              <p><span class="file">something.js</span>　栏目子页专用 JavaScript 文件</p>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
