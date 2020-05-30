const express = require('express');
const usersController = require('./controllers/usersControllers');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create)

routes.get('/users', usersController.index)

routes.post('/users', usersController.create);

routes.post('/users/:id', usersController.update);
routes.post('/userpass/:id', usersController.updatePassword);

routes.delete('/users/:id', usersController.delete);

module.exports = routes;