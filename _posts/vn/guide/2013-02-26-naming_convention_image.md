---
layout: post
title:  Quy tắc đặt tên hình
date:   2013-02-26
categories: vn guide
tags: 命名規則
post_id: post_guide_010
---
Không sử dụng serial number khi đặt tên (ví dụ: img-item_1.png…), không sử dụng tên thể hiện thông tin layout (ví dụ: img-float.png…).

Trường hợp bắt buộc sử dụng serial number, thì tên phải có dạng dấu gạch dưới 「\_」+ con số (ví dụ: img-item_1.png, img-item_2.png…), lưu ý là con số không được ở dạng 「\_02」….

Sử dụng một trong các tiền tố (prefix) dưới đây cho tất cả các hình ảnh, không sử dụng cái nằm ngoài danh sách được liệt kê dưới đây.

Thêm hậu tố (suffix) vào tên nếu cần. Tuy nhiên tránh sử dụng các hậu tố (suffix) đồng nghĩa như 「\_active」, 「\_current」…

Những hình ảnh tạm (dummy) mà sau này sẽ được thay đổi (ví dụ, hình đang đợi khách hàng gửi sang, hình đang mua từ amana…), thì tất cả phải có tên là 「dum-」. Các hình 「dum-」 phải được xóa khỏi server, repository, file giao hàng sau khi site hoàn thành.

Đối với các hình dùng để download (ví dụ như hình dùng làm hình nền cho desktop), thì phải đặt tên thật dễ hiểu,  ví dụ: 「sakura_1024x768.jpg」.

<div>
  <h2>Bảng tiền tố (prefix)</h2>
  <ul>
    <li>
      <h3>dum-</h3>
      <p>Hình dummy, hình sẽ thay đổi</p>
    </li>
    <li>
      <h3>logo-</h3>
      <p>Hình logo</p>
    </li>
    <li>
      <h3>title-</h3>
      <p>Hình title</p>
    </li>
    <li>
      <h3>txt-</h3>
      <p>Text image</p>
    </li>
    <li>
      <h3>btn-</h3>
      <p>Button image</p>
    </li>
    <li>
      <h3>bg-</h3>
      <p>Background image</p>
    </li>
    <li>
      <h3>ico-</h3>
      <p>Icon image</p>
    </li>
    <li>
      <h3>bnr-</h3>
      <p>Banner image</p>
    </li>
    <li>
      <h3>img-</h3>
      <p>Những hình khác không thuộc nhóm nào ở trên</p>
    </li>
  </ul>
</div>

<div>
  <h2>Bảng hậu tố (suffix) 　※Ngoài ra còn có thể sử dụng những hậu tố khác</h2>
  <ul>
    <li>
      <h3>_bottom</h3>
      <p>Phần dưới của background image (border-radius)</p>
    </li>
    <li>
      <h3>_top</h3>
      <p>Phần trên của background image (border-radius)</p>
    </li>
    <li>
      <h3>_off</h3>
      <p>Button image (khi bình thường)</p>
    </li>
    <li>
      <h3>_on</h3>
      <p>Button image (khi mouse-hover)</p>
    </li>
    <li>
      <h3>_active</h3>
      <p>Button image (khi active)</p>
    </li>
  </ul>
</div>
