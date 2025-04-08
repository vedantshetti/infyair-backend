const pool = require('../db/config');

// Create products table from sales table
const createProductsTable = async () => {
  try {
    // First, check the structure of sales table
    const checkSalesTable = await pool.query(
      "SELECT column_name FROM information_schema.columns WHERE table_name = 'sales' ORDER BY ordinal_position"
    );
    
    console.log('Sales table columns:', checkSalesTable.rows);
    
    // Create products table with unique product details
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id VARCHAR(255) PRIMARY KEY,
        product_name VARCHAR(255) NOT NULL,
        category VARCHAR(255),
        sub_category VARCHAR(255),
        price NUMERIC(10,2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Insert unique products from sales table
    await pool.query(`
      INSERT INTO products (product_id, product_name, category, sub_category)
      SELECT DISTINCT product_id, product_name, category, sub_category
      FROM sales
      ON CONFLICT (product_id) DO NOTHING
    `);
    
    console.log('Products table created and populated successfully');
  } catch (error) {
    console.error('Error setting up products table:', error);
  }
};

module.exports = { createProductsTable };
