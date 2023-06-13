CREATE TABLE "product" (
  "id" integer,
  "name" varchar,
  "desc" varchar,
  "category_id" integer,
  "price" decimal,
  "created_at" timestamp
);

CREATE TABLE "category" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "created_at" timestamp
);

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");