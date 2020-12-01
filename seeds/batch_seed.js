const data = [
  {
    id: 1,
    batchId: 'b44500a5-3600-438d-9e7f-d52f86933d6f',
    fileName: 'file1.pgp',
    numberOfRows: 0,
  },
  {
    id: 2,
    batchId: 'f187b2ea-3fb7-4901-b5a1-06ba94d4b966',
    fileName: 'file2.pgp',
    numberOfRows: 0,
  },
  {
    id: 3,
    batchId: 'd603dd0a-b247-4d0b-a723-cfcc2c61ae42',
    fileName: 'file3.pgp',
    numberOfRows: 0,
  },
];

module.exports.seed = (knex) => knex('batches').del().then(() => knex('batches').insert(data));
