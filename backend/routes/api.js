const express = require('express');
const jobsRouter = require('./devjobs.routes');

const api = express.Router();

api.use('/jobs', jobsRouter);

module.exports = api;
