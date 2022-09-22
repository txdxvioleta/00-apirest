//* imports:
require('dotenv').config();

const routes = require('../routes/routes');
const express = require('express');

const serverConfig = () => {

  //* initialization:
  const app = express();
  const port = process.env.PORT;

  //* middlewares:
  app.use(express.json());

  //* others:
  app.use('/api', routes);

  //* listen app:
  app.listen(port, () => {
    console.log(`SERVER OK! (PORT: ${port})`);
  });
};

module.exports = serverConfig;
