const express = require('express');
const { 
  getDashboardStats, 
  getPerformanceCharts, 
  getRecentActivity 
} = require('../controllers/dashboardController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/stats', getDashboardStats);
router.get('/charts', getPerformanceCharts);
router.get('/activity', getRecentActivity);

module.exports = router;