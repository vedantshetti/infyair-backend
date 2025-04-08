const pool = require('../db/config');

class Product {
  static async getAllProducts() {
    const result = await pool.query(
      'SELECT product_id, product_name, sub_category, category FROM products'
    );
    return result.rows;
  }

  static async getProductById(productId) {
    const result = await pool.query(
      'SELECT product_id, product_name, sub_category, category FROM products WHERE product_id = $1',
      [productId]
    );
    return result.rows[0];
  }
}

module.exports = Product;
