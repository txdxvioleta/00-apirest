//* imports:
const router = require('express').Router();
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/controllers');

// GET:
router.get('/', getUsers);

// GET:id
router.get('/:id', getUserById);

// POST:
router.post('/', addUser);

// PUT:
router.put('/:id', updateUser);

// DELETE:id
router.delete('/:id', deleteUser);

//* exports:
module.exports = router;
