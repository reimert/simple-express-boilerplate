// libs
const Ajv = require('ajv');

// instatiate validator
const objectValidator = new Ajv({ allErrors: true });

// helpers
const logger = require('./logger');

// module
module.exports = {
  validateSchema: (schema, object) => {
    logger.debug('Helper function schemaValidator.validateSchema called.');
    const validator = objectValidator.compile(schema);
    const valid = validator(object);
    const { errors } = validator;
    if (!valid) {
      logger.debug(`Object validation failed: ${JSON.stringify(errors)}`);
      return false;
    }
    return true;
  },
};
