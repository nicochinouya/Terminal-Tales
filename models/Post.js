const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create our Post model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      onDelete: 'CASCADE'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   isURL: true
      // }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // Joining user Model on id column
        // Association is still required at index.js of models
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true, // Prevents Sequelize from pluralizing the table name
    underscored: true, // Uses snake_case for the table and column names
    modelName: 'post' // Sets the model name in singular form
  }
);

module.exports = Post;
