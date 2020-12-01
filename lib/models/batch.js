/**
 * @swagger
 * tags:
 *   name: Batches
 *   description: File Batches
 *
 * @swagger
 *  components:
 *    schemas:
 *      Batch:
 *        type: object
 *        required:
 *          - fileName
 *        properties:
 *          batchId:
 *            type: string
 *            description: UUID auto-assigned for batch identifier
 *          fileName:
 *            type: string
 *            description: Batch file name
 *          numberOfRows:
 *            type: integer
 *            description: Number of valid instructions in a batch
 *        example:
 *          id: 1
 *          batchId: 2ca2df6e-20c2-499e-a4b3-9653d8f246ae
 *          fileName: batchFile.pgp
 *          numberOfRows: 12
 */

// helpers
const { logger, schemaValidator } = require('../helpers');

// schema
const { batchSchema } = require('../schemas');

function Batch(attributes) {
  logger.debug('Function Batch.constructor called.');
  this.id = attributes.id;
  this.batchId = attributes.batchId;
  this.fileName = attributes.fileName;
  this.numberOfRows = attributes.numberOfRows;

  // perform schema validation
  if (!schemaValidator.validateSchema(batchSchema, this)) {
    throw new Error('Invalid model schema.');
  }
}

module.exports = Batch;
