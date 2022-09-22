//* imports:
const express = require('express');
const mysql = require('mysql');
const port = 3500;
const app = express();
//const bodyParser = require('body-parser');
//body-parser:
//app.use(bodyParser.json());

//Middlewares:

//Reemplaza al body-parser
app.use(express.json());

//* mysql config:
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '00-api_rest',
});

//* Routes:
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

//*endpoints:

// GET:
app.get('/users', (req, res) => {
  const sql_query = 'SELECT * FROM users';

  connection.query(sql_query, (error, result) => {
    //Verifico si existe algún error:
    if (error) throw error;

    //Si existen registros los muestro:
    if (result.length > 0) {
      res.json(result);
      return;
    }
    res.send('No results');
  });
});

// GET:id
app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  const sql_query = `SELECT * FROM users WHERE id = ${id}`;
  connection.query(sql_query, (error, result) => {
    //Verifico si hay errores:
    if (error) throw error;

    //Si hay un resultado lo muestro:
    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('User not found');
      return;
    }
  });
});

// POST:
app.post('/add', (req, res) => {
  const sql_query = 'INSERT INTO users SET ?';

  const userObj = {
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
  };

  connection.query(sql_query, userObj, (error) => {
    if (error) throw error;
    res.send('User added');
  });
});

// PUT:
app.put('/update/:id', (req, res) => {
  //* Forma amateur:
  //const sql_query = `UPDATE users SET name = '${name}', lastname = '${lastname}', age = '${age}' WHERE id = '${id}'`;

  //* Forma pro:
  const sql_query = 'UPDATE users SET ? WHERE id = ?';

  connection.query(sql_query, [req.body, req.params.id], (error) => {
    if (error) throw error;
    res.send('User updated');
  });
});

// DELETE:id
app.delete('/delete/:id', (req, res) => {
  const sql_query = 'DELETE FROM users WHERE id = ?';

  connection.query(sql_query, [req.params.id], (error) => {
    if (error) throw error;
    res.send('User deleted');
  });
});

//Check connect:
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log('Database running!');
  }
});

//listen app:
app.listen(port, (req, res) => {
  console.log('Server running on port ' + port);
});
