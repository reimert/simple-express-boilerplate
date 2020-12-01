// helpers
const { ProcMon } = require('./lib/helpers');

// api
const ApiGateway = require('./lib');
const logger = require('./lib/helpers/logger');

// register process monitor
const procMon = new ProcMon();
procMon.registerListeners();

// start api
let api;

try {
  api = new ApiGateway();
  api.start();
} catch (ex) {
  logger.error('Unable to start API.');
  logger.debug(ex.stack);
  process.exit(1);
}
