const express = require("express");
const router = express.Router();

// ✅ Correct import (VERY IMPORTANT)
const { createSupplier } = require("../controllers/supplierController");

// ✅ Route
router.post("/supplier", createSupplier);

module.exports = router;