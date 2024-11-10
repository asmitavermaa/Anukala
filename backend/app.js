const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('./config'); // MongoDB connection

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes); // Auth routes

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
