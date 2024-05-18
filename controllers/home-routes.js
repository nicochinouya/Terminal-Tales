// Import required modules
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// Define route for homepage
router.get('/', (req, res) => {
    // Find all posts with associated comments and users
    Post.findAll({
        attributes: ['id', 'title', 'contents', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            // Render homepage template with posts data
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', { 
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Define route for login page
router.get('/login', (req, res) => {
    // Redirect to homepage if user is already logged in, otherwise render login template
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('login');
    }
});

// Define route for sign up page
router.get('/signUp', (req, res) => {
    // Redirect to homepage if user is already logged in, otherwise render signUp template
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('signUp');
    }
});

// Define route for single post page
router.get('/post/:id', (req, res) => {
    // Find a post by id with associated comments and users
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'contents', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            // Render single-post template with post data
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            res.render('single-post', { 
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Export router
module.exports = router;