const express = require('express');
const { authenticate } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const router = express.Router();

router.get('/admin', authenticate, authorize(['Admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

router.get('/user', authenticate, authorize(['User']), (req, res) => {
  res.json({ message: 'Welcome, User!' });
});

module.exports = router;