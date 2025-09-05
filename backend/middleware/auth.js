const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Handle demo users
    if (decoded.userId === 'admin123') {
      req.user = {
        _id: 'admin123',
        name: 'Admin User',
        email: 'admin@school.edu',
        role: 'admin'
      };
    } else if (decoded.userId === 'student123') {
      req.user = {
        _id: 'student123',
        name: 'John Doe',
        email: 'student@school.edu',
        role: 'student'
      };
    } else {
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Invalid token'
        });
      }
      req.user = user;
    }

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Insufficient permissions.'
      });
    }
    next();
  };
};

module.exports = { protect, authorize };