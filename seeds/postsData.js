const {Post} = require('../models');
const sequelize = require('../config/connection');

const postData = [
    {
      post_title: 'test 1',
      post: 'This is a test to see if the database will be seeded',
    },
    {
      post_title: 'test 2',
      post: 'This is a test to see if the database will be seeded again',
    }
]
const seedPost = () => Post.bulkCreate(postData);


const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedPost();

    process.exit(0);
  };

  seedAll();