// libs
const config = require('config');

// helpers
const logger = require('./logger');

// module
module.exports = {
  response: {
    success: (message) => {
      logger.debug('Helper function api.response.success called.');
      return {
        type: 'success',
        message,
      };
    },
    error: (message, detail = '') => {
      logger.debug('Helper function api.response.error called.');
      let response = {
        type: 'error',
        message,
      };

      // add detailed error message
      if (config.get('application.logLevel') === 'debug') {
        response = Object.assign(response, {
          detail,
        });
      }
      return response;
    },
  },
};
