import sequelize from '../config/database';
import User from './User';
import Post from './Post';

// Initialize database connection
const initializeDatabase = async () => {
  try {
    console.log('Attempting to connect to database...');
    console.log(`Host: ${process.env.DB_HOST}, Port: ${process.env.DB_PORT}, Database: ${process.env.DB_NAME}`);
    
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    // Sync models with database
    await sequelize.sync({ force: false });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    console.error('Please ensure MySQL is running and the database credentials are correct.');
    console.error('The server will continue without database functionality.');
    
    // Don't exit, continue without database
    return false;
  }
  return true;
};

export { sequelize, User, Post, initializeDatabase };