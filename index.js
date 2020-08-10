const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
});

const createDb = () => con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE mydb', (err, result) => {
    if (err) throw err;
    console.log('Database created');
  });
});

const createTable = () => con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  const sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table created');
  });
});

const insterInTable = () => con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  const sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted');
  });
});

const selectFromTable = () => con.connect((err) => {
  if (err) throw err;
  con.query('SELECT * FROM customers', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
});

const closeConnection = () => con.end();

module.exports = {
  createDb,
  createTable,
  insterInTable,
  selectFromTable,
  closeConnection,
};
