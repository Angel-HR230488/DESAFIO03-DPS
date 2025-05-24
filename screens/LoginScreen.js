import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace('Books'); // Redirige automáticamente si hay sesión activa
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('Error al iniciar sesión');
    }
    setLoading(false);
  };

  return (
    <View>
      <Text>Correo Electrónico</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Ingresa tu correo" />
      <Text>Contraseña</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder="Ingresa tu contraseña" />
      
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : 
        <Button title="Iniciar sesión" onPress={handleLogin} />
      }
      <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
