const express = require("express");
const router = express.Router();
const {
  createInventory,
  getInventory,
  getSummary,
} = require("../controllers/inventoryController");

router.post("/inventory", createInventory);
router.get("/inventory", getInventory);
router.get("/inventory-summary", getSummary);

module.exports = router;