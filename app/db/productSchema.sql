DROP TABLE product;

CREATE TABLE product (
     "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
     "upc" INTEGER NOT NULL,
     "category" TEXT NOT NULL,
     "productname" TEXT NOT NULL,
     "price" INTEGER NOT NULL,
     "inventory" INTEGER NOT NULL,
     "checkId" INTEGER not null
);
CREATE INDEX "upcindex" ON product (upc
COLLATE NOCASE ASC);
CREATE INDEX "productnameindex" ON product (productname
COLLATE NOCASE ASC);
INSERT INTO product(upc, category, productname, price, inventory, checkId)
VALUES
  ("123451", "M", "DB iPad 4 Mini", 50001, 3, 1,),
  ("123452", "M", "DB H&M T-Shirt White", 1099, 10, 0),
  ("123453", "F", "DB Milk Shake", 299, 5, 0),
  ("123454", "F", "DB Pizza", 350, 20, 0),
  ("987654", "F", "DB Candy Bar", 100, 30, 0)
;
