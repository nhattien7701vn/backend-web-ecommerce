CREATE TABLE "product" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "uri" varchar,
  "description" varchar,
  "category_id" integer,
  "price" decimal,
  "created_at" timestamp,
  "modified_at" timestamp
);

CREATE TABLE "category" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "uri" varchar,
  "description" varchar,
  "created_at" timestamp,
  "modified_at" timestamp
);

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");