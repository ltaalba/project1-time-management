// StartScreen.js
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import StartScreenStyles from '../styles/StartScreenStyles';

const StartScreen = ({ navigation }) => { // Destructure navigation from props
  return (
    <View style={StartScreenStyles.container}>
      <Text style={StartScreenStyles.header}>Scroll mindfully</Text>
      <TouchableOpacity style={StartScreenStyles.button}
              onPress={() => navigation.navigate('HomeScreen')} // Use navigate with the name of the route
              >
        <Text style={StartScreenStyles.buttonText}>start</Text>
      </TouchableOpacity>
    </View>
  );
}

export default StartScreen;
