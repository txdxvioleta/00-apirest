//* imports:
const mysql = require('mysql');

//* destructuring:
const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

//* mysql config:
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_NAME,
});

//* Check connect:
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log(`DATABASE OK! (PORT: ${DB_PORT})`);
  }
});

module.exports = connection;
