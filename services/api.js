// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.3.28', // Reemplaza con tu IP local y puerto del backend
});

export default api;
