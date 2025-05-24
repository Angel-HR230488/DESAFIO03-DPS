import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getBooks, updateBookStatus, deleteBook } from '../services/api';

const BookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      if (data) setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleToggleRead = async (bookId, currentStatus) => {
    const newStatus = currentStatus === "Leído" ? "No leído" : "Leído";
    const response = await updateBookStatus(bookId, newStatus);
    if (response?.message) {
      setBooks(books.map(book => book.id === bookId ? { ...book, status: newStatus } : book));
    } else {
      alert("Error al actualizar estado del libro");
    }
  };

  const handleDeleteBook = async (bookId) => {
    const response = await deleteBook(bookId);
    if (response?.message) {
      setBooks(books.filter(book => book.id !== bookId));
    } else {
      alert("Error al borrar libro");
    }
  };

  return (
    <View>
      <Text>Lista de Libros</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title} - {item.status}</Text>
            <Button title="Ver Detalles" onPress={() => navigation.navigate('BookDetail', { book: item })} />
            <Button title={item.status === "Leído" ? "Marcar como No leído" : "Marcar como Leído"} onPress={() => handleToggleRead(item.id, item.status)} />
            <Button title="Eliminar" onPress={() => handleDeleteBook(item.id)} />
          </View>
        )}
      />
      <Button title="Agregar Libro" onPress={() => navigation.navigate('BookForm')} />
    </View>
  );
};

export default BookListScreen;
