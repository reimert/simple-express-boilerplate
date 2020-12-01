// libs
const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it } = require('mocha');

const { expect } = chai;

// middleware
chai.use(chaiHttp);

// module
const API = require('../lib/index');

const lib = new API();

describe('API', () => {
  it('should receive error response for invalid endpoint', () => {
    chai.request(lib.api).get('/').end((err, res) => {
      expect(res).to.have.status(404);
      expect(res.body).to.have.property('type', 'error');
      expect(res.body).to.have.property('message', 'Invalid endpoint.');
    });
  });
});
