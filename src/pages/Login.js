import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');

  async function handleLogin() {
    const response = await api.post('/devs', { username: user });

    const { _id } = response.data;

    console.log(_id);

    navigation.navigate('Main', { _id });
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}>
      <Image source={logo} />

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no Github"
        placeholderTextColor="#999"
        style={styles.input}
        value={user}
        onChangeText={setUser}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },

  input: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 4,
    borderWidth: 1,
    height: 46,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    borderRadius: 4,
    height: 46,
    justifyContent: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
