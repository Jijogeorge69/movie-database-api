const express = require('express');
const { PORT } = require('./config');
const loaders = require('./loaders');

async function startServer() {
  const app = express();
  await loaders.init(app);

  // Start listetning to PORT
  app.listen(PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your server is ready and running on PORT ${PORT}!`);
  });
}

startServer();
