const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = require('./app');

colors.setTheme({
  success: ['bgGreen', 'black', 'underline', 'bold'],
});

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 6000;

app.listen(PORT, console.log(`SERVER IS LISTENING ON PORT ${PORT}`.success));
