const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./src/routes');
const connectDB = require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();
connectDB();

app.use(morgan('dev'));
app.use(cors());

app.use('/api/backendSkripsi', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})