const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Replace with your MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://jzhuo1:DanielZhuo@cluster0.mjmygli.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    startServer();
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application! Bienvenue!' });
});

// Start the Express server
function startServer() {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}
