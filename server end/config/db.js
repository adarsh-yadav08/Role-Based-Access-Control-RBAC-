const mongoose = require('mongoose');
const Role = require('../models/Role');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};
// Seed roles into the Role collection
const seedRoles = async () => {
  try {
    const roles = await Role.find();
    if (roles.length === 0) {
      await Role.insertMany([
        { name: 'User' },
        { name: 'Admin' }
      ]);
      console.log('Roles seeded successfully');
    } else {
      console.log('Roles already exist');
    }
  } catch (error) {
    console.error('Error seeding roles:', error);
  }
};
module.exports = { connectDB, seedRoles };