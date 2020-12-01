// libs
const jwt = require('jsonwebtoken');
const config = require('config');

// helpers
const logger = require('./logger');

// object global
const authenticationConfig = config.get('authentication');

// module
module.exports = {
  sign: (payload) => {
    logger.debug('Helper function token.sign called.');
    return new Promise((resolve, reject) => {
      jwt.sign(payload, authenticationConfig.secret, {
        expiresIn: authenticationConfig.expiresIn,
      }, (err, res) => {
        if (err) {
          logger.error('Token sign error has occured.');
          logger.debug(err.stack);
          return reject(new Error('Unable to sign payload.'));
        }
        return resolve(res);
      });
    });
  },
  verify: (token) => {
    logger.debug('Helper function token.verify called.');
    return new Promise((resolve, reject) => {
      jwt.verify(token, authenticationConfig.secret, (err, payload) => {
        if (err) {
          logger.error('Token verification error has occured.');
          logger.debug(err.stack);
          return reject(new Error('Unable to verify token.'));
        }
        return resolve(payload);
      });
    });
  },
};
