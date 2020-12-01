// module
module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    batchId: {
      type: 'string',
    },
    fileName: {
      type: 'string',
    },
    numberOfRows: {
      type: 'integer',
    },
  },
  required: ['batchId', 'fileName'],
};
