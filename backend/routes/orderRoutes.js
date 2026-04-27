const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getOrders,
  updateOrderStatus
} = require("../controllers/orderController");

const {
  verifyToken,
  isVendor,
  isSupplier
} = require("../middleware/authMiddleware");

// Vendor places order
router.post("/", verifyToken, isVendor, placeOrder);

// Supplier views orders
router.get("/", verifyToken, isSupplier, getOrders);

// Supplier updates order
router.put("/:id", verifyToken, isSupplier, updateOrderStatus);

module.exports = router;