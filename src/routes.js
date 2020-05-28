const express = require('express');
const usersController = require('./controllers/usersControllers');

const routes = express.Router();

routes.get('/users', usersController.index)

routes.post('/users', usersController.create);

routes.delete('/users/:id', usersController.create);

module.exports = routes;