import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignupScreen';
import Login from './screens/LoginScreen';
import FindFriends from './screens/FindFriendsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
      {/* <Stack.Screen 
          name="StartScreen" 
          component={StartScreen} 
          options={{ headerShown: false }} 
        />      
         <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        /> 
         <Stack.Screen 
          name="Singup" 
          component={SignUp} 
          options={{ headerShown: false }} 
        />      
         <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />    */}
        <Stack.Screen 
          name="FindFriends" 
          component={FindFriends} 
          options={{ headerShown: false }} 
        />              
        </Stack.Navigator>
    </NavigationContainer>
  );
}
