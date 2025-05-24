const db = require('../config/db');

const getBooks = async (req, res) => {
    try {
        const [books] = await db.promise().query('SELECT * FROM books WHERE user_id = ?', [req.user.id]);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros', error });
    }
};

const addBook = async (req, res) => {
    const { title, author, status } = req.body;

    if (!title || !author || !status) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        await db.promise().query('INSERT INTO books (user_id, title, author, status) VALUES (?, ?, ?, ?)', [req.user.id, title, author, status]);
        res.status(201).json({ message: 'Libro agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el libro', error });
    }
};

const updateBook = async (req, res) => {
    const { title, author, status } = req.body;
    const { id } = req.params;

    try {
        await db.promise().query('UPDATE books SET title = ?, author = ?, status = ? WHERE id = ? AND user_id = ?', [title, author, status, id, req.user.id]);
        res.json({ message: 'Libro actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el libro', error });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        await db.promise().query('DELETE FROM books WHERE id = ? AND user_id = ?', [id, req.user.id]);
        res.json({ message: 'Libro eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el libro', error });
    }
};

module.exports = { getBooks, addBook, updateBook, deleteBook };
