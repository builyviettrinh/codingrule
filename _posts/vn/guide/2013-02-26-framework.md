---
layout: post
title:  Điểm lưu ý của framework
date:   2013-02-26
categories: vn guide
tags: その他
post_id: post_guide_014
---
Tại giai đoạn vận hành trang như update…, phải tuân thủ rule viết của site hiện có. Cho dù có những rule vượt quá khỏi phạm vi quy định của guideline này, nhưng để đảm bảo tính dễ dàng bảo trì (maintenance), thì không được cải biến guideline như thêm rule mới hay sửa lại rule.  
Người thực hiện maintenance, update…trước khi bắt tay thực hiện công việc  phải xác nhận rule của site hiện tại, và phải tuân thủ rule đó trong suốt quá trình tác nghiệp.

Ví dụ 1:  
Ở quy dịnh đặt tên id/class, nếu CamelCase được thì sử dụng, thì phải thống nhất dùng CamelCase cho site đó.

Ví dụ 2:  
Nếu prefix cho hình ảnh không được sử dụng, thì rule về prefix sẽ không áp dụng được site đó.
