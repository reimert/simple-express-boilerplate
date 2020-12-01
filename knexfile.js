// libs
const config = require('config');

// global
const dbConfig = config.get('database');

// module
module.exports = {
  development: {
    client: dbConfig.client,
    connection: dbConfig.connection,
    pool: dbConfig.pool,
    migrations: {
      tableName: dbConfig.migrations.tableName,
    },
  },
};
