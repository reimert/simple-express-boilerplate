// helpers
const logger = require('./logger');

function ProcMon() {
  logger.debug('Function ProcMon.construct called.');
}

ProcMon.prototype.registerListeners = function registerListeners() {
  logger.debug('Function ProcMon.registerListeners called.');
  // process exit
  process.on('exit', (code) => {
    logger.info(`Application has exited with code ${code}`);
  });

  // process signals
  process.on('SIGINT', () => {
    logger.debug('Process has ended with interrupt signal.');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    logger.debug('Process has ended with terminate signal.');
    process.exit(0);
  });

  process.on('SIGBREAK', () => {
    logger.debug('Process has ended with break signal.');
    process.exit(0);
  });

  // unhandled exceptions
  process.on('uncaughtException', (err) => {
    logger.warn(`Caught uncaught exception: ${err.message}`);
    process.exit(1);
  });

  // unresolved promises
  process.on('unhandledRejection', (err) => {
    logger.warn(`Caught unhandled promise rejection: ${err.message}`);
    process.exit(1);
  });
};

module.exports = ProcMon;
