const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json({ success: true, data: products });
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
