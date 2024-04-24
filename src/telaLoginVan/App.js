import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/components/WelcomeScreen';
import LoginScreen from './src/components/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: true,
            headerTransparent: true, // Torna o cabeçalho transparente
            headerTitle: '', // Remove o título
            headerBackTitleVisible: false, // Esconde o texto de volta se houver em iOS
            headerTintColor: '#000', // Cor da seta de voltar
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


