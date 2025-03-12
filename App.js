
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NutritionScreen from './components/NutritionScreen';
import LoginScreen from './components/LoginScreen'; 
import HomeScreen from './components/HomeScreen'; 
import SignUpScreen from './components/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nutrition">
        <Stack.Screen name="Nutrition" component={NutritionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignupScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}