const mysql = require('mysql2');
const { sqlConfig } = require('./config');

const SQLConnection = mysql.createConnection(sqlConfig);

function connect() {
  return new Promise((res, rej) => {
    SQLConnection.connect(err => {
      if (err) {
        rej(err);
      }
      res();
    });
  });
}

module.exports = { connect, SQLConnection };
