const express = require('express');
const { getBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getBooks);
router.post('/', verifyToken, addBook);
router.put('/:id', verifyToken, updateBook);
router.delete('/:id', verifyToken, deleteBook);

module.exports = router;
