---
layout: post
title:  Directory map cơ bản
date:   2013-02-26
categories: vn guide
tags: ディレクトリマップ
post_id: post_guide_007
---
Khi tạo một site mới, về nguyên tắc, hãy xây dựng theo Directoy map như dưới đây. Lưu ý là trường hợp có chỉ thị riêng, setting tương thích với CMS, hay update site định kỳ, thì không nhất thiết phải theo đúng như vậy.

Thông thường, 1 content sẽ là 1 folder, và ngoại trừ các common file như logo, button image của global navi…thì tất cả phải được thực hiện trong content folder của nó.

(Chữ đỏ = file/ chữ xanh = folder)

<div>
  <ul>
    <li>
      <p><span class="file">index.html</span>　Top page</p>
    </li>
    <li>
      <p><span class="file">something.html</span>　Second page</p>
    </li>
    <li>
      <p><span class="folder">[img]</span></p>
      <ul>
        <li>
          <p><span class="folder">[share]</span>　lưu giữ file image common chung cho cả site</p>
        </li>
        <li>
          <p><span class="folder">[index]</span>　lưu giữ file image của TOP page</p>
        </li>
        <li>
          <p><span class="folder">[something]</span>　lưu giữ file image của second page</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[css]</span>　lưu giữ file css</p>
      <ul>
        <li>
          <p><span class="folder">[lib]</span>　lưu giữ file css cho Plugin (nếu phức tạp do số lượng file tăng lên thì bố trí tùy ý)</p>
        </li>
        <li>
          <p><span class="file">share.css</span>　file css common (description của reset css cũng nằm ở đây)</p>
        </li>
        <li>
          <p><span class="file">index.css</span>　file css của TOP page</p>
        </li>
        <li>
          <p><span class="file">something.css</span>　file css của second page</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[js]</span>　lưu giữ file JavaScript</p>
      <ul>
        <li>
          <p><span class="folder">[share]</span>　lưu giữ file js module thông thường, bao gồm cả share.js (nếu phức tạp do số lượng file tăng lên thì bố trí tùy ý)</p>
        </li>
        <li>
          <p><span class="folder">[lib]</span>　lưu giữ file plugin js, bao gồm cả file jQuery (nếu phức tạp do số lượng file tăng lên thì bố trí tùy ý)</p>
        </li>
        <li>
          <p><span class="file">share.js</span>　file JavaScript common chung cho cả site</p>
        </li>
        <li>
          <p><span class="file">index.js</span>　file JavaScript của Top Page</p>
        </li>
        <li>
          <p><span class="file">something.js</span>　file JavaScript của second page</p>
        </li>
      </ul>
    </li>
    <li>
      <p><span class="folder">[category]</span>　folder của từng content (category)</p>
      <ul>
        <li>
          <p><span class="file">index.html</span>　category Top</p>
        </li>
        <li>
          <p><span class="file">something.html</span>　category second</p>
        </li>
        <li>
          <p><span class="folder">[img]</span>　lưu giữ file image chỉ sử dụng cho category này *Nếu quá nhiều image thì lại tiếp tục phân chia trong nội bộ folder, để tránh lộn xộn.</p>
        </li>
        <li>
          <p><span class="folder">[css]</span>　lưu giữ file css chỉ sử dụng cho category này</p>
          <ul>
            <li>
              <p><span class="file">category.css</span>　file css common trong category</p>
            </li>
            <li>
              <p><span class="file">index.css</span>　file css của category top</p>
            </li>
            <li>
              <p><span class="file">something.css</span>　file css của category second</p>
            </li>
          </ul>
        </li>
        <li>
          <p><span class="folder">[js]</span>　lưu giữ file JavaScript chỉ sử dụng cho category này</p>
          <ul>
            <li>
              <p><span class="file">category.js</span>　file javaScript common trong category</p>
            </li>
            <li>
              <p><span class="file">index.js</span>　file JavaScript của category</p>
            </li>
            <li>
              <p><span class="file">something.js</span>　file JavaScript của category second</p>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
