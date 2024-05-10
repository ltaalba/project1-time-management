import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
      <Stack.Screen 
          name="StartScreen" 
          component={StartScreen} 
          options={{ headerShown: false }} 
        />      
        </Stack.Navigator>
    </NavigationContainer>
  );
}
