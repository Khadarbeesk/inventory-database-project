const db = require("../db/connection");

exports.createSupplier = (req, res) => {
  const { name, city } = req.body;

  if (!name || !city) {
    return res.status(400).json({ message: "Name and city are required" });
  }

  db.run(
    "INSERT INTO suppliers (name, city) VALUES (?, ?)",
    [name, city],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        id: this.lastID,
        name,
        city,
      });
    }
  );
};