const router = require('express').Router();

const userRoutes = require('./user-routes.js'); // Importing user routes
const postRoutes = require('./post-routes'); // Importing post routes
const commentRoutes = require('./comment-routes'); // Importing comment routes

router.use('/users', userRoutes); // Mounting user routes
router.use('/posts', postRoutes); // Mounting post routes
router.use('/comments', commentRoutes); // Mounting comment routes

module.exports = router; // Exporting the router
