// Import the Sequelize library
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config(); 

let sequelize;

// Check if JAWSDB_URL environment variable is set (for deployment on Heroku)
if (process.env.JAWSDB_URL) {
    // Create a new Sequelize instance using the JAWSDB_URL
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // Create a new Sequelize instance using the local database configuration
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

// Export the sequelize instance
module.exports = sequelize;