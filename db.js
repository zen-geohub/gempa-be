const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
}

module.exports = connectDB;