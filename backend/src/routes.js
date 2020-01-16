const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Get data
routes.get('/devs', DevController.index);

// Register Dev
routes.post('/devs', DevController.store);

// Search Dev
routes.get('/search', SearchController.index);

module.exports = routes;