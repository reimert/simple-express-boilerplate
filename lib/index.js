// libs
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const config = require('config');
const swaggerDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// helpers
const { logger, api } = require('./helpers');

// routes
const { batchController } = require('./controllers');

function ApiGateway() {
  logger.debug('ApiGateway.construct called.');
  this.api = express();
  this.registerMiddleware();
  this.registerRoutes();
}

ApiGateway.prototype.registerMiddleware = function registerMiddleware() {
  logger.debug('Function ApiGateway.registerMiddleware called.');
  this.api.use(express.json());
  this.api.use(helmet());
  this.api.use(cors());
  // route middleware
  this.api.use((req, res, next) => {
    logger.info(`Endpoint ${req.path} called.`);
    next();
  });
  // swagger ui
  this.api.use('/docs', swaggerUi.serve);
  this.api.get('/docs', swaggerUi.setup(swaggerDoc(config.get('api.specifications')), {
    explorer: true,
  }));
};

ApiGateway.prototype.registerRoutes = function registerRoutes() {
  logger.debug('Function ApiGateway.registerRoutes called.');
  this.api.use('/batches', batchController);

  // catch all route
  this.api.all('*', (req, res) => {
    logger.info(`Invalid endpoint: ${req.path}`);
    return res.status(404).json(api.response.error('Invalid endpoint.'));
  });
};

ApiGateway.prototype.start = async function start() {
  logger.debug('Function ApiGateway.start called.');
  this.api.listen(config.get('api.port'), () => {
    logger.info(`API listening on port ${config.get('api.port')}`);
  });
};

module.exports = ApiGateway;
