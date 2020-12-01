// libs
const config = require('config');
const uuid = require('uuid').v4;
let knex = require('knex')(process.env.DATABASE || config.get('database'));

// helpers
const { logger } = require('../helpers');

// models
const { BatchModel } = require('../models');

// module
module.exports = (knexObj) => {
  knex = knexObj || knex;
  const all = async function all() {
    logger.debug('Function BatchRepository.all called.');
    let res;
    try {
      res = await knex.select('id', 'batchId', 'fileName', 'numberOfRows').from('batches');
    } catch (ex) {
      logger.error(ex.message);
      logger.debug(ex.stack);
      throw new Error('Error retrieving batch object');
    }
    return res;
  };

  const create = async function create(obj) {
    logger.debug('Function BatchRepository.create called.');
    // validate schema
    const batchObject = new BatchModel(Object.assign(obj, {
      batchId: uuid(),
    }));

    try {
      await knex('batches').insert(batchObject);
    } catch (ex) {
      logger.error(ex.message);
      logger.debug(ex.stack);
      throw new Error('Error creating batch record.');
    }
    return batchObject;
  };

  return {
    all,
    create,
  };
};
