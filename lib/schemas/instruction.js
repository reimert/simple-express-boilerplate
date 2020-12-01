// module
module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    instructionId: {
      type: 'string',
    },
    batchId: {
      type: 'integer',
    },
    recipientNumber: {
      type: 'string',
    },
    recipientAmount: {
      type: 'float32',
    },
    recipientReference: {
      type: 'string',
    },
  },
  required: ['instructionId', 'batchId', 'recipientNumber', 'recipientAmount'],
};
