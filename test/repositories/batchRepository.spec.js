// libs
const uuid = require('uuid');
const knex = require('knex');
// const knexMock = require('mock-knex');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {
  describe,
  it,
  before,
  after,
} = require('mocha');

// middleware
chai.use(chaiAsPromised);
chai.should();

// lib
const lib = require('../../lib/repositories/batchRepository');

const databaseId = `test_${uuid.v4().replace(/-/g, '')}`;
const dbConfig = knex({
  client: 'sqlite3',
  connection: {
    filename: `${databaseId}.sqlite`,
  },
  useNullAsDefault: true,
});

describe('batchRepository', () => {
  before(() => dbConfig.migrate.latest().then(() => dbConfig.seed.run()));
  after(() => dbConfig.destroy());
  it('should return all batches.', () => {
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
    return lib(dbConfig).all().should.eventually.deep.equal(data);
  });

  it('should create a batch object and return the created object', () => {
    const data = {
      fileName: 'file44.pgp',
    };
    return lib(dbConfig).create(data).should.eventually.have.property('fileName', 'file44.pgp');
  });
});
