const express = require("express");
const router = express.Router();

const { addProduct, getProducts } = require("../controllers/productController");
const { verifyToken, isSupplier } = require("../middleware/authMiddleware");

// Supplier adds product
router.post("/", verifyToken, isSupplier, addProduct);

// Anyone logged in can view products
router.get("/", verifyToken, getProducts);

module.exports = router;