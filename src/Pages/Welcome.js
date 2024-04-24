import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Text style={styles.text}>Bem-vindo à nossa aplicação!</Text>
      <View>
        <Button title="Login com email" 
        onPress = {() => navigation.navigate("Login")}
       
        />
        <View>
          <Text>Não tem um conta?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
            <Text>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
 
});

export default Welcome;
