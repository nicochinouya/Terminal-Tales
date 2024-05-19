// Import the hashing library
const bcrypt = require('bcrypt');

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create our User model which represents the user table
class User extends Model {
  // Set up a method to run on instance data (per user) to check the password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Define the User model with table columns and configuration
User.init(
  {
    // Define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4] // Password must be at least four characters long
      }
    }
  },
  {
    // Set up lifecycle "hooks" to compare hash every time a user is created or updated
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;