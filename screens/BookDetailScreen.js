import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { addBook } from '../services/api';

const BookFormScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async () => {
    const response = await addBook(title, author);
    if (response?.message) {
      alert('Libro agregado');
      navigation.navigate('Books');
    } else {
      alert('Error al agregar libro');
    }
  };

  return (
    <View>
      <Text>Título</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Nombre del libro" />
      <Text>Autor</Text>
      <TextInput value={author} onChangeText={setAuthor} placeholder="Autor del libro" />
      <Button title="Guardar" onPress={handleSubmit} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default BookFormScreen;
