"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected to the database');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit process with failure
    }
});
// Start the server
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
});
startServer();
