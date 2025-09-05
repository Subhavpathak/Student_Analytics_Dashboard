const express = require('express');
const { 
  generateStudentReport,
  generateClassReport 
} = require('../controllers/reportController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect);

router.get('/student/:id', generateStudentReport);
router.get('/class/:class', generateClassReport);

module.exports = router;