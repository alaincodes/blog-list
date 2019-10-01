/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
const http = require('http');
const app = require('./app');
const config = require('./utils/config');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port http://localhost:${config.PORT}`);
});
