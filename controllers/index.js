// Import required modules
const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');

// Set up routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

// Handle 404 error
router.use((req, res) => {
    res.status(404).end();
});

// Export the router
module.exports = router;