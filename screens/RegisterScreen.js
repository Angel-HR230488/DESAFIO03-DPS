import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registro exitoso', 'Ahora puedes iniciar sesión');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'No se pudo completar el registro');
    }
  };

  return (
    <View>
      <Text>Nombre</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Ingresa tu nombre" />
      
      <Text>Correo Electrónico</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Ingresa tu correo" keyboardType="email-address" />
      
      <Text>Contraseña</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry placeholder="Ingresa tu contraseña" />
      
      <Text>Confirmar Contraseña</Text>
      <TextInput value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry placeholder="Repite tu contraseña" />
      
      <Button title="Registrarse" onPress={handleRegister} />
      <Button title="Volver al Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;
