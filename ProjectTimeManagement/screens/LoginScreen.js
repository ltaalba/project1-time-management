// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SignupScreenStyles from '../styles/SignupScreenStyles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    // For example, verifying credentials with a backend
    alert('Login Successful!');
    // Optionally navigate to another screen
    // navigation.navigate('Home');
  };

  return (
    <View style={SignupScreenStyles.bigContainer}>
    <Text style={SignupScreenStyles.header}>Scroll Mindfully</Text>

   <View style={SignupScreenStyles.container}>
      <Text style={SignupScreenStyles.title}>Log In</Text>
      
     <TextInput
        style={SignupScreenStyles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={SignupScreenStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={SignupScreenStyles.button} onPress={handleLogin}>
        <Text style={SignupScreenStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default LoginScreen;
