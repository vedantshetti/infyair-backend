const pool = require('../db/config');
const bcrypt = require('bcrypt');

class User {
  static async createUsersTable() {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          role VARCHAR(50) NOT NULL DEFAULT 'viewer',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      
      // Create default admin and viewer users if they don't exist
      const adminExists = await pool.query('SELECT * FROM users WHERE username = $1', ['admin']);
      
      if (adminExists.rows.length === 0) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        await pool.query(
          'INSERT INTO users (username, password, role) VALUES ($1, $2, $3)',
          ['admin', hashedPassword, 'admin']
        );
      }
      
      const viewerExists = await pool.query('SELECT * FROM users WHERE username = $1', ['viewer']);
      
      if (viewerExists.rows.length === 0) {
        const hashedPassword = await bcrypt.hash('viewer123', 10);
        await pool.query(
          'INSERT INTO users (username, password, role) VALUES ($1, $2, $3)',
          ['viewer', hashedPassword, 'viewer']
        );
      }
      
      console.log('Users table created and default users added');
    } catch (error) {
      console.error('Error creating users table:', error);
    }
  }

  static async findByUsername(username) {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  }
}

module.exports = User;
