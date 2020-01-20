const mysql = require('mysql');
const keys = require('./../../keys');

const connection = mysql.createConnection({
  host: 'localhost',
  user: keys.MYSQL_USERNAME,
  password: keys.MYSQL_PASSWORD,
  database: 'homer'
});

module.exports  =  connection;