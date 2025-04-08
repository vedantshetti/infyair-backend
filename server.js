const app = require('./app');
const { createProductsTable } = require('./models/tableSetup');
const { createUsersTable } = require('./models/User');

const PORT = process.env.PORT || 5000;

// Initialize database tables
const initDatabase = async () => {
  try {
    await createProductsTable();
    await createUsersTable();
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};

// Start server
const startServer = async () => {
  await initDatabase();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
