// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SignupScreenStyles from '../styles/SignupScreenStyles';

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle the signup logic here
    // For example, sending data to a backend server
    alert('Sign Up Successful!');
    // Optionally navigate to another screen
    // navigation.navigate('Home');
  };

  return (
   <View style={SignupScreenStyles.bigContainer}>
    <Text style={SignupScreenStyles.header}>Scroll Mindfully</Text>

   <View style={SignupScreenStyles.container}>
      <Text style={SignupScreenStyles.title}>Sign Up</Text>
      <TextInput
        style={SignupScreenStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
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
      <TouchableOpacity style={SignupScreenStyles.button} onPress={handleSignUp}>
        <Text style={SignupScreenStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default SignupScreen;
