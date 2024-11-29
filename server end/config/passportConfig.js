const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const Role = require('../models/Role');

// Configure Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'https://vrv-security-intern-assignment.onrender.com/api/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user already exists in the database
    let user = await User.findOne({ googleId: profile.id }).populate('roles');

    if (!user) {
      // If user doesn't exist, create a new user with default "User" role
      const defaultRole = await Role.findOne({ name: 'User' });
      user = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        username: profile.displayName,
        roles: [defaultRole._id]
      });
      await user.save();
    }

    user = await user.populate('roles')

    done(null, user);
  } catch (err) {
    done(err, null);
  }
}));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).populate('roles');
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});