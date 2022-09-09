const express = require('express');

const {
  getDevjobs,
  filterDevjobs,
  getSinglejob,
  filterByLocation,
  filterByContract,
} = require('../controllers/devjobs.controller');

const jobsRouter = express.Router();

jobsRouter.get('/', getDevjobs);
jobsRouter.get('/search', filterDevjobs);
jobsRouter.get('/search/location', filterByLocation);
jobsRouter.get('/search/contract', filterByContract);
jobsRouter.get('/:id', getSinglejob);

module.exports = jobsRouter;
