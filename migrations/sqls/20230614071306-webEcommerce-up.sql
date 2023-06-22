CREATE TABLE "product" (
  "id" varchar PRIMARY KEY,
  "name" varchar,
  "uri" varchar,
  "description" varchar,
  "image_source" varchar,
  "sub_category_id" varchar,
  "price" decimal,
  "flash_sale" boolean,
  "flash_price" decimal,
  "created_at" integer,
  "modified_at" integer
);

CREATE TABLE "sub_category" (
  "id" varchar PRIMARY KEY, 
  "name" varchar,
  "uri" varchar,
  "description" varchar,
  "category_id" varchar,
  "created_at" integer,
  "modified_at" integer
);

CREATE TABLE "category" (
  "id" varchar PRIMARY KEY, 
  "name" varchar,
  "uri" varchar,
  "description" varchar,
  "created_at" integer,
  "modified_at" integer
);

ALTER TABLE "product" ADD FOREIGN KEY ("sub_category_id") REFERENCES "sub_category" ("id");
ALTER TABLE "sub_category" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

-- CATEGORY
INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('dt01', 'Dien Thoai', 'dien-thoai', 'dien thoai', 1686727202, 1686727203);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('apple01', 'Apple Chinh Hang', 'dien-thoai', 'dien thoai', 1686727202, 1686727203);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('dh01', 'Dong Ho', 'dong-ho', 'dong ho', 1686727208, 1686727209);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('tb01', 'Tablet', 'may-tinh-bang', 'tablet', 1686727204, 1686727205);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('mb01', 'Macbook', 'laptop', 'macbook', 1686727206, 1686727207);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('at01', 'Am Thanh', 'am-thanh', 'am thanh', 1686722206, 1686726307);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('pk01', 'Phu Kien', 'phu-kien', 'phu kien', 1686724206, 1686725207);


-- SUBCATEGORY
INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('ip14s', 'Iphone 14 Series', 'apple-iphone/iphone-14-series', 'Iphone 14 Series', 'dt01', 1686727202, 1686727203);

INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('aws3', 'Apple Watch Series 3', 'apple-watch/apple-watch-series-3-or-4-or-5', 'Apple Watch Series 3', 'dh01', 1686727202, 1686727203);

INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('aws4', 'Apple Watch Series 4', 'apple-watch/apple-watch-series-3-or-4-or-5', 'Apple Watch Series 4', 'dh01', 1686727202, 1686727203);

INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('ipp1720', 'iPad Pro 2017-2020', 'ipad-pro/ipad-pro', 'iPad Pro 2017-2020', 'tb01', 1686727202, 1686727203);

INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('macp2023', 'Macbook Pro 2023', 'mac/macbook-pro-2023', 'Macbook Pro 2023', 'mb01', 1686727202, 1686727203);

INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('jbl01', 'JBL', 'thuong-hieu/tai-nghe-jbl', 'JBL', 'at01', 1686727202, 1686727203);

INSERT INTO public.sub_category
(id, name, uri, description, category_id, created_at, modified_at)
VALUES('cs01', 'Củ sạc - cáp sạc', 'phu-kien-dien-thoai/cap-sac', 'Củ sạc - cáp sạc', 'pk01', 1686727202, 1686727203);


-- PRODUCT
INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('ip14', 'iPhone 14 512GB Chính Hãng', 'iphone-14-512gb-chinh-hang-1663315749', 'iPhone 14 512GB Chính Hãng', 'https://cdn.dienthoaigiakho.vn/photos/1675234181894-600x600-ip14pl-new-2.jpg', 'ip14s', 1000, true, 800, 1686738480, 1686738490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('ip14pro512', 'iPhone 14 Pro 512GB Chính Hãng', 'iphone-14-pro-512gb-chinh-hang-1663318873', 'iPhone 14 Pro 512GB Chính Hãng', 'https://cdn.dienthoaigiakho.vn/photos/1675236331322-600-600-ip14prm-new.jpg', 'ip14s', 1300, true, 1000, 1686731480, 1686732490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('ip14promax512', 'iPhone 14 Pro Max 512GB Chính Hãng VN/A', 'iphone-14-pro-max-512gb-chinh-hang-vna-1662626325', 'iPhone 14 Pro Max 512GB Chính Hãng VN/A', 'https://cdn.dienthoaigiakho.vn/photos/1675236331324-600-600-ip14prm-new-3.jpg', 'ip14s', 1700, false, 1650, 1686731480, 1686732490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('aws342mm98al', 'Apple Watch Series 3 42mm Viền Nhôm Cũ 98%', 'apple-watch-series-3-42mm-lte-aluminum-cu-98-1597812385', 'Apple Watch Series 3 42mm Viền Nhôm Cũ 98%', 'https://cdn.dienthoaigiakho.vn/photos/1651480263926-aw3-lte-si.jpg', 'aws3', 100, true, 90, 1686733480, 1686734490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('aws440mmalc', 'Apple Watch Series 4 40mm Viền Nhôm Cũ', 'apple-watch-series-4-40mm-gps-gold-aluminum-cu-99-nguyen-ban-1543902995', 'Apple Watch Series 4 40mm Viền Nhôm Cũ', 'https://cdn.dienthoaigiakho.vn/photos/1675140533364-aw4-gps-40mm-bm.jpg', 'aws4', 110, true, 100, 1686738480, 1686738490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('aws440mmltealc', 'Apple Watch Series 4 40mm LTE Viền Nhôm Cũ', 'apple-watch-series-4-40mm-lte-aluminum-cu-like-new-con-bh-apple-1552124066', 'Apple Watch Series 4 40mm LTE Viền Nhôm Cũ', 'https://cdn.dienthoaigiakho.vn/photos/1650872695998-aw4-40mm-lte-gr.jpg', 'aws4', 120, false, 110, 1686731480, 1686732490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('ipad11pro202099', 'iPad Pro 11 inch 2020 Wifi 128GB Cũ 99%', 'ipad-pro-11-inch-2020-wifi-128gb-cu-99-1620202917', 'iPad Pro 11 inch 2020 Wifi 128GB Cũ 99%', 'https://cdn.dienthoaigiakho.vn/photos/1675321693901-600x600-ipad-pro-m1-11-old-1.jpg', 'ipp1720', 600, false, 550, 1686731480, 1686732490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('mbpro2023m232gb', 'MacBook Pro 2023 16.2 Inch Chip M2 MAX 32GB | 1TB SSD Chính Hãng (MNWA3, MNWE3)', 'macbook-pro-2023-162-inch-chip-m2-max-32gb-or-1tb-ssd-chinh-hang-mnwa3-mnwe3-1675220201', 'MacBook Pro 2023 16.2 Inch Chip M2 MAX 32GB | 1TB SSD Chính Hãng (MNWA3, MNWE3)', 'https://cdn.dienthoaigiakho.vn/photos/1675232639974-600x600-Macbook-Pro-M2-2023.jpg', 'macp2023', 3900, true, 3800, 1686731480, 1686732490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('loajblgo3', 'Loa Bluetooth JBL GO 3 Chính Hãng', 'loa-bluetooth-jbl-go-3-1606900712', 'Loa Bluetooth JBL GO 3 Chính Hãng', 'https://cdn.dienthoaigiakho.vn/photos/1664427898496-jbl-go-3red.jpg', 'jbl01', 40, true, 20, 1686731480, 1686732490);

INSERT INTO public.product
(id, name, uri, description, image_source, sub_category_id, price, flash_sale, flash_price, created_at, modified_at)
VALUES('magsafemhxh3', 'Đế sạc không dây Apple Magsafe MHXH3 | Chính hãng Apple', 'de-sac-apple-magsafe-mhxh3-or-chinh-hang-apple-1604163262', 'Đế sạc không dây Apple Magsafe MHXH3 | Chính hãng Apple', 'https://cdn.dienthoaigiakho.vn/photos/1653299651462-apple-wireless-charge.jpg', 'cs01', 45, true, 35, 1686731480, 1686732490);

