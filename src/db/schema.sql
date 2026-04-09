CREATE TABLE IF NOT EXISTS suppliers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  city TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  supplier_id INTEGER,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
INSERT INTO suppliers (name, city) VALUES
('HP', 'Pune'),
('Lenovo', 'Mumbai');

-- More inventory data
INSERT INTO inventory (supplier_id, product_name, quantity, price) VALUES
(1, 'Sofa', 4, 15000),
(1, 'Bed', 2, 20000),

(2, 'Wardrobe', 3, 12000),
(2, 'Table', 7, 6500),

(3, 'Monitor', 6, 12000),
(3, 'Keyboard', 15, 1500),

(4, 'Laptop', 5, 48000),
(4, 'Printer', 2, 9000),

(5, 'Laptop', 7, 52000),
(5, 'Mouse', 20, 800);