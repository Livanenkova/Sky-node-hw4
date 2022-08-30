const routes = require('express').Router();
const {getUsers, getUser,createUser} = require('./controllers/users')

routes.get('/users', getUsers);
routes.post('/users', createUser);
routes.get('/users/:id',getUser);

module.exports = routes;