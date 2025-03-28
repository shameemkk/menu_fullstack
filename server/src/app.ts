const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { menuRouter } = require('./routes/menu.routes');

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables.');
}

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/menus', menuRouter);

// Database connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit process with failure
  }
};

// Start the server
const startServer = async () => {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

startServer();
