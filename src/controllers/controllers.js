//* imports:
const connection = require('../database/dbConfig');

// GET:
const getUsers = async (req, res) => {
  await connection.query('SELECT * FROM users', (error, result) => {
    !error && result.length > 0
      ? res.json(result)
      : res.status(500).json({ message: 'There are no users yet' });
  });
};

// GET id:
const getUserById = async (req, res) => {
  await connection.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (error, result) => {
    !error && result.length > 0
      ? res.status(200).json(result)
      : res.status(404).json({ message: 'User not found' });
  });
};

// POST:
//Crear nueva info status = 201;

const addUser = async (req, res) => {
  await connection.query('INSERT INTO users SET ?', [req.body], (error) => {
    !error
      ? res.status(201).json({
          message: 'User added',
        })
      : res.status(500).json({ message: 'Something goes wrong' });
  });
};

// PUT:
//update status code = 202
const updateUser = async (req, res) => {
  await connection.query('UPDATE users SET ? WHERE id = ?', [req.body, req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('User updated')
      : res.status(404).json('User not found');
  });
};

// DELETE id:
const deleteUser = async (req, res) => {
  await connection.query('DELETE FROM users WHERE id = ?', [req.params.id], (error, result) => {
    !error && result.affectedRows > 0
      ? res.status(202).json('User deleted')
      : res.status(404).json('User not found');
  });
};

module.exports = { getUsers, getUserById, addUser, updateUser, deleteUser };
