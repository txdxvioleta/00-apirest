//* imports:
require('dotenv').config();

const routes = require('../routes/routes');
const express = require('express');

//* initialization:
const app = express();
app.set('port', process.env.PORT || 8080);

//* middlewares:
app.use(express.json());

//* others:
app.use('/api', routes);

module.exports = app;
