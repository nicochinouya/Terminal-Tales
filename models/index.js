const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// JOIN ON, create associations, One to many relationships, etc
// create associations

// One to many relationships
User.hasMany(Post, {
    foreignKey: 'user_id'
  });


// One to one relationship
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// One to one relationship
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// One to one relationship
Comment.belongsTo(Post, {
    foreignKey: 'post_id', 
});

// One to many relationships
User.hasMany(Comment, {
    foreignKey: 'user_id',
    
  });

// One to many relationships
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment};