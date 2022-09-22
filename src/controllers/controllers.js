//* imports:
const connection = require('../database/dbConfig');

/**************************************************************/

// GET:
const getUsers = (req, res) => {
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
};

// GET id:
const getUserById = (req, res) => {
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
};

// POST:
const addUser = (req, res) => {
  const sql_query = 'INSERT INTO users SET ?';

  connection.query(sql_query, [req.body], (error) => {
    if (error) throw error;
    res.send('User added');
  });
};

// PUT:
const updateUser = (req, res) => {
  const sql_query = 'UPDATE users SET ? WHERE id = ?';

  connection.query(sql_query, [req.body, req.params.id], (error) => {
    if (error) throw error;
    res.send('User updated');
  });
};

// DELETE id:
const deleteUser = (req, res) => {
  const sql_query = 'DELETE FROM users WHERE id = ?';

  connection.query(sql_query, [req.params.id], (error) => {
    if (error) throw error;
    res.send('User deleted');
  });
};

module.exports = { getUsers, getUserById, addUser, updateUser, deleteUser };
