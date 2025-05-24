import React from 'react';
import { View, Text } from 'react-native';

const BookDetailScreen = ({ route }) => {
  const { book } = route.params;

  return (
    <View>
      <Text>Título: {book.title}</Text>
      <Text>Autor: {book.author}</Text>
      <Text>Estado: {book.status}</Text>
    </View>
  );
};

export default BookDetailScreen;
