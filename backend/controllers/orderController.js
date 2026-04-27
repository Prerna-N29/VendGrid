const Order = require("../models/Order");

// Vendor places order
exports.placeOrder = async (req, res) => {
  try {
    const { productId } = req.body;

    const order = await Order.create({
      vendorId: req.user.id,
      productId
    });

    res.status(201).json(order);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supplier views orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("vendorId", "name email")
      .populate("productId", "name price");

    res.json(orders);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supplier updates order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(order);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};