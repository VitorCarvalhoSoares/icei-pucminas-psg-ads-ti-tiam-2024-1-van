import React from "react";
import { SafeAreaProvider   } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen, Signup, WelcomeScreen } from "../Pages/index";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
  <SafeAreaProvider >
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
      </NavigationContainer>
  </SafeAreaProvider >
  
  );
};


