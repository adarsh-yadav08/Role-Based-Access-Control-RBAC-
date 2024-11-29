const express = require('express');
const passport = require('passport');
const { register, login, logout, googleOAuth, googleOAuthCallback, oauthSuccessHandler } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Google OAuth login
router.get('/google', googleOAuth);

// Google OAuth callback route
router.get('/google/callback', googleOAuthCallback, oauthSuccessHandler);

router.post('/logout', logout);

module.exports = router;