const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


  // Set static folder
  app.use(express.static(path.join(__dirname, '/build')));

const PORT = process.env.PORT || 5000;

app.get('*' , (req,res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
