CREATE TABLE "product" (
  "id" varchar PRIMARY KEY,
  "name" varchar,
  "uri" varchar,
  "description" varchar,
  "category_id" varchar,
  "price" decimal,
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

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('dt01', 'dien thoai', 'dien-thoai', 'dien thoai', 1686727202, 1686727203);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('mtb01', 'may tinh bang', 'may-tinh-bang', 'may tinh bang', 1686727204, 1686727205);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('mb01', 'macbook', 'macbook', 'macbook', 1686727206, 1686727207);

INSERT INTO public.category
(id, name, uri, description, created_at, modified_at)
VALUES('dh01', 'dong ho', 'dong-ho', 'dong-ho', 1686727208, 1686727209);

INSERT INTO public.product
(id, name, uri, description, category_id, price, created_at, modified_at)
VALUES('ip14', 'Iphone 14', 'iphone-14', 'Iphone 14', 'dt01', 1500, 1686738480, 1686738490);

