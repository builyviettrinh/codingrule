---
layout: post
title:  Cấu trúc của file css
date:   2013-02-26
categories: vn css
tags: CSSガイドライン
post_id: post_css_002
---
Khi phân chia file css, hãy tạo theo cấu trúc như bên dưới. Không được multiple load (load nhiều file) sử dụng @import.

<div>
  <ul>
    <li>
      <h3>css reset và css dùng cho common layout trong site</h3>
      <p>share.css</p>
    </li>
    <li>
      <h3>css riêng cho từng html</h3>
      <p>html name.css</p>
    </li>
    <li>
      <h3>css dùng cho common layout trong directory</h3>
      <p>directory name.css</p>
    </li>
    <li>
      <h3>css dùng để in</h3>
      <p>print.css</p>
    </li>
    <li>
      <h3>css dùng cho Sp</h3>
      <p>parent css name mở rộng_sp.css</p>
    </li>
    <li>
      <h3>css dùng cho tablet</h3>
      <p>parent css name mở rộng_tb.css</p>
    </li>
  </ul>
</div>
