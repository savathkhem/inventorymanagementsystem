const express = require('express');

const dashboardRouter = express.Router();

const {
    simulatePurchase
} = require('../controllers/dashboard');
dashboardRouter.post('/buy', simulatePurchase);

const {
    showDashboard
} = require('../controllers/dashboard');
dashboardRouter.get('/show', showDashboard)

module.exports = dashboardRouter;