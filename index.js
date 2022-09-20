//imports:
const express = require('express');
const mysql = require('mysql');
const port = 3500;
const app = express();

//mysql:
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '00_apirest',
});

//Routes:
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

//endpoints
app.get('/users', (req, res) => {
  res.send('List of users:');
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send('Get user by id:' + id);
});

app.post('/add', (req, res) => {
  res.send('New user added');
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  res.send('Update user: ' + id);
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  res.send('Deleted user: ' + id);
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
