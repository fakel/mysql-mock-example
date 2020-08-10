/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-hooks */
const sinon = require('sinon');
const mockMysql = sinon.mock(require('mysql'));

const myStub = sinon.stub();

mockMysql.expects('createConnection').returns({
  connect: (cb) => {
    console.log('Connection Mocked');
    cb();
  },
  query: myStub,
  end: () => {
    console.log('Connection ended');
  },
});

const db = require('../index');

describe('mySQL', () => {
  it('should create a table', (done) => {
    myStub.callsFake((query, cb) => {
      console.log(query);
      cb();
      done();
    });
    db.createTable();
  });
  it.todo('should insert into a table');
  it.todo('should select from a table');
  it.todo('should close the connection');
});
