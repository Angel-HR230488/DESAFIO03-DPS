import axios from 'axios';

export const updateBookStatus = async (bookId, status) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/books/${bookId}`, { status }, {
      headers: {
        Authorization: `Bearer TU_TOKEN_AQUI`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error al actualizar estado:", error.response?.data || error.message);
    return null;
  }
};

export const deleteBook = async (bookId) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
      headers: {
        Authorization: `Bearer TU_TOKEN_AQUI`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error al borrar libro:", error.response?.data || error.message);
    return null;
  }
};
