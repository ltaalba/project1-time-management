import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import StartScreen from './screens/StartScreen';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignupScreen';
import Login from './screens/LoginScreen';
import FindFriends from './screens/FindFriendsScreen';


// Screen Names
const home = 'Home';
const findfriends = 'FindFriends';
const signup = 'SignUp';
const login = 'Login';
const start = 'StartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === findfriends) {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === signup) {
            iconName = focused ? 'person-add' : 'person-add-outline';
          } else if (route.name === login) {
            iconName = focused ? 'log-in' : 'log-in-outline';
          }

          return <Icon name={iconName} size={size} color={color} style={styles.icon} />;
        },
        tabBarActiveTintColor: '#ABC48C',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}     
  
    >
      <Tab.Screen name={home} component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name={findfriends} component={FindFriends} options={{ headerShown: false }}/>
      <Tab.Screen name={signup} component={SignUp} options={{ headerShown: false }}/>
      <Tab.Screen name={login} component={Login} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={start}>
        <Stack.Screen 
          name={start} 
          component={StartScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 60,
    elevation: 5,
    borderWidth: 0,
    borderColor: 'transparent',
    justifyContent: 'center', 

  },
  icon: {
    marginBottom: -30,
  },
});