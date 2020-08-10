/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-hooks */
const sinon = require('sinon');
const mockMysql = sinon.mock(require('mysql'));

const connectStub = sinon.stub().callsFake((cb) => {
  console.log('connected');
  cb();
});
const queryStub = sinon.stub();
const endStub = sinon.stub();

mockMysql.expects('createConnection').returns({
  connect: connectStub,
  query: queryStub,
  end: endStub,
});

const db = require('../index');

describe('mySQL', () => {
  it('should create a db', (done) => {
    queryStub.callsFake((query, cb) => {
      console.log(query);
      cb();
      done();
    });
    db.createDb();
  });

  it('should create a table', (done) => {
    queryStub.callsFake((query, cb) => {
      console.log(query);
      cb();
      done();
    });
    db.createTable();
  });
  it('should insert into a table', (done) => {
    queryStub.callsFake((query, cb) => {
      console.log(query);
      cb();
      done();
    });
    db.insterInTable();
  });
  it('should select from a table', (done) => {
    queryStub.callsFake((query, cb) => {
      console.log(query);
      cb(null, 'test result');
      done();
    });
    db.selectFromTable();
  });
  it('should close the connection', (done) => {
    endStub.callsFake(() => {
      console.log('connection closed');
      done();
    });
    db.closeConnection();
  });
});
