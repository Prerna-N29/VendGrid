const Product = require("../models/Product");

// Add Product (Supplier only)
exports.addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = await Product.create({
      name,
      price,
      supplierId: req.user.id
    });

    res.status(201).json(product);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Products (Vendor view)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("supplierId", "name email");
    res.json(products);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};