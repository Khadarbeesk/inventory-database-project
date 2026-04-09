const express = require("express");
const cors = require("cors");
const db = require("./db/connection");

const supplierRoutes = require("./routes/supplierRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", supplierRoutes);
app.use("/", inventoryRoutes);
app.get("/", (req, res) => {
  res.send(`
    Inventory Database API 🚀

    Available Endpoints:
    /inventory
    /inventory-summary
  `);
});


// Run schema once
const fs = require("fs");
const schema = fs.readFileSync(__dirname + "/db/schema.sql", "utf8");
db.exec(schema);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});