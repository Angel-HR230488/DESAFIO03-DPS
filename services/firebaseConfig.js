import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-OTEx4LAu8LT4X98c99o0XarRLiJ-p1I",
  authDomain: "desafio03-b5910.firebaseapp.com",
  projectId: "desafio03-b5910",
  storageBucket: "desafio03-b5910.firebasestorage.app",
  messagingSenderId: "979034825061",
  appId: "1:979034825061:web:0e7b6556241a5b1597018c",
  measurementId: "G-QGJD85NVE8"
};
// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
