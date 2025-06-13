const express = require('express');
const app = express();
require('dotenv').config();
require('./config/db');

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API de gestión de usuarios lista 🚀');
});

module.exports = app;
