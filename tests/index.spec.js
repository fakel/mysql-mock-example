/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-hooks */
const sinon = require('sinon');
const mock = sinon.mock(require('mysql'));

// Lets Mock the initial connection
mock.expects('createConnection').returns({
  connect: () => {
    console.log('Succesfully connected');
  },
  query: (query, vars, callback) => {
    callback(null, query);
  },
  end: () => {
    console.log('Connection ended');
  },
});

const db = require('../index');

describe('mySQL', () => {
  it.todo('should create a db');
  it.todo('should create a table');
  it.todo('should insert into a table');
  it.todo('should select from a table');
  it.todo('should close the connection');
});
