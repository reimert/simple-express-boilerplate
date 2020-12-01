// libs
const knex = require('knex');
const config = require('config');

// helpers
const logger = require('./logger');

// module
module.exports = {
  connect: async () => {
    logger.debug('Helper function database.connect called.');
    const dbConfig = config.get('database');
    return knex({
      client: dbConfig.client,
      connection: dbConfig.connection,
      pool: dbConfig.pool,
    });
  },
};
