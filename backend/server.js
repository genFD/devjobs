const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
dotenv.config();
const colors = require('colors');
// const app = require('./app');
const app = express();
const api = require('./routes/api');

colors.setTheme({
  success: ['bgGreen', 'black', 'underline', 'bold'],
});

app.use(express.json());
app.use(cors());

app.use(
  express.static(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
);
app.use('/v1', api);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`SERVER IS LISTENING ON PORT ${PORT}`.success));
