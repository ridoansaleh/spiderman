const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const server = express();

server.use('/', express.static(path.resolve(__dirname)));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

server
  .listen(port, () => {
    console.log(`Spiderman is running on http://localhost:${port}`);
  })
  .on('error', err => {
    console.error('Error::server ', err);
});