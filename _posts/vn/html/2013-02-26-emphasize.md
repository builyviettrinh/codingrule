---
layout: post
title:  Nhấn mạnh nội dung – Phân biệt Tag strong và Tag em
date:   2013-02-26
categories: vn html
tags: HTMLガイドライン
post_id: post_html_013
---
Đọc kỹ nội dung bên dưới để nắm được cách phân biệt sử dụng của các tag này.

<div>
  <h2>Tag em</h2>
  <p>Sử dụng khi muốn nhấn mạnh ý nghĩa mà mình muốn truyền tải. Nó liên kết mật thiết với câu văn/ đoạn văn trước/ sau nó, và tác động mật thiết đến ý nghĩa của cả câu, mạch văn của cả đoạn, ngoài ra nó còn dùng để phân biệt phạm vi của từ. Sắc thái ý nghĩa của câu sẽ thay đổi phụ thuộc vào việc bạn dùng tag này cho từ nào, ngoài ra có khi nó còn giúp phân biệt từ loại  (danh từ…). Khi bạn muốn nhấn mạnh từ khóa (keyword) quan trọng độc lập nào đó, hãy sử dụng tag strong.</p>
  <ul>
    <li>「&lt;em&gt;Cats&lt;/em&gt; are cute animals.」　⇒　Nhấn mạnh ý: “Mèo” dễ thương (hơn chó).</li>
    <li>「Cats are &lt;em&gt;cute&lt;/em&gt; animals.」　⇒　Nhấn mạnh ý: Mèo “dễ thương” (sao bạn lại không nghĩ như vậy?!)</li>
  </ul>
</div>

<div>
  <h2>Tag strong</h2>
  <p>Sử dụng khi muốn nhấn mạnh keyword quan trọng nào đó. Nó không có tính liên kết hay ảnh hưởng đến mạch văn/ câu văn trước sau như tag em, đơn thuần nó được dùng để nhấn mạnh vị trí quan trọng trong câu văn/ đoạn văn. Cần lưu ý là công cụ tìm kiếm (search engine) sẽ coi nó là spam nếu bạn sử dụng nhiều. Khi bạn muốn nhấn mạnh sắc thái ý nghĩa thì dùng tag em.</p>
  <ul>
    <li>「&lt;strong&gt;Cats&lt;/strong&gt; are cute animals.」　⇒　Nhấn mạnh việc “cats” là keyword quan trọng trong câu.</li>
    <li>「Cats are &lt;strong&gt;cute&lt;/strong&gt; animals.」　⇒　Nhấn mạnh việc “cute” là keyword quan trọng trong câu.</li>
  </ul>
</div>

<div>
  <h2>Tag &lt;span&gt; ＋ font-weight:bold;</h2>
  <p>Sử dụng khi muốn làm chữ in đậm theo design, không hàm chứa ý nghĩa nào đặc biệt. Ở 2 ví dụ dưới đây, về mặt văn phong, đều có chung một sắc thái ý nghĩa.</p>
  <ul>
    <li>「&lt;span&gt;Cats&lt;/span&gt; are cute animals.」</li>
    <li>「Cats are &lt;span&gt;cute&lt;/span&gt; animals.」</li>
  </ul>
</div>
