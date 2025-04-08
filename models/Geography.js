const pool = require('../db/config');

class Geography {
  static async getGeographicData() {
    const result = await pool.query(
      'SELECT DISTINCT postal_code, region, state, city FROM sales'
    );
    return result.rows;
  }

  static async getPostalCodes() {
    const result = await pool.query('SELECT DISTINCT postal_code FROM sales');
    return result.rows;
  }

  static async getRegions() {
    const result = await pool.query('SELECT DISTINCT region FROM sales');
    return result.rows;
  }

  static async getStates() {
    const result = await pool.query('SELECT DISTINCT state FROM sales');
    return result.rows;
  }

  static async getCities() {
    const result = await pool.query('SELECT DISTINCT city FROM sales');
    return result.rows;
  }
}

module.exports = Geography;
