const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes');
const loggerMiddleware = require('./middlewares/logger');
const corsMiddleware = require('./middlewares/cors');
const { request } = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sk_node_4', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
});

dotenv.config();

const { PORT = 3005, API_URL = 'http://localhost' } = process.env;

const app = express();

app.get('/', (request, response) => {
  if(request.query.hello) {
    response.status(200);
    response.send(`Hello ${request.query.hello}`);
  } else {
    response.status(200);
    response.send(`Hello world`);
  }
    response.status(200);
    response.send(`Hello world`);
});

app.use('/', bodyParser.json());

// app.get('/',(request:Request<PageTransitionEvent))

app.use('/', corsMiddleware);
app.use('/', loggerMiddleware);
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`);
});