DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INTEGER(2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
(
    "Hand Sanitizer", "Personal Care", 5, 2
), 
(
    "Sunglasses", "Fashion", 20, 50
),
(
    "Black Leggings", "Fashion", 25, 100  
),
(
    "Frying Pan", "Home & Kitchen", 40, 10
),
(
    "Shampoo", "Hair Care", 10, 32
),
(
    "iPad Mini", "Computers", 250, 4
),
(
    "Fabric Face Mask", "Health Care", 5, 12
),
(
    "Chocolate Chip Cookies", "Snacks", 4, 79
),
(
    "Necklace", "Jewelry", 50, 132
),
(
    "Baby Yoda Doll", "Toys & Games", 60, 7
);