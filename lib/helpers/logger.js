// libs
const winston = require('winston');
const config = require('config');

// module
module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
  level: config.get('application.logLevel') || 'info',
});
