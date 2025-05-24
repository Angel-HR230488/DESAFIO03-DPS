import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getBooks } from '../services/api';

const BookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      if (data) setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <View>
      <Text>Lista de Libros</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Ver Detalles" onPress={() => navigation.navigate('BookDetail', { book: item })} />
          </View>
        )}
      />
      <Button title="Agregar Libro" onPress={() => navigation.navigate('BookForm')} />
    </View>
  );
};

export default BookListScreen;
