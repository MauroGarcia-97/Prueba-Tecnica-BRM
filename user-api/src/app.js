const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');

const userRoutes = require('./routes/userRoutes');
const messages = require('./constants/messages'); 
app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send(messages.apiReady); 
});

module.exports = app;
