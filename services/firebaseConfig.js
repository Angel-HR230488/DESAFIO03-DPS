// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-OTEx4LAu8LT4X98c99o0XarRLiJ-p1I",
  authDomain: "desafio03-b5910.firebaseapp.com",
  projectId: "desafio03-b5910",
  storageBucket: "desafio03-b5910.firebasestorage.app",
  messagingSenderId: "979034825061",
  appId: "1:979034825061:web:0e7b6556241a5b1597018c",
  measurementId: "G-QGJD85NVE8"
};
<<<<<<< HEAD
// Inicializar Firebase
=======

// Initialize Firebase
>>>>>>> 9987734 (ultima modificancion)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);