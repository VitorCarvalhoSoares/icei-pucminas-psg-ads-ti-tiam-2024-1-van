import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Button clicked!', `Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder={'Nome de usuário'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder={'Senha'}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button
        title={'Entrar'}
        onPress={handleLogin}
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
});

export default LoginScreen;
