import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scroll mindfully</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>start</Text>
      </TouchableOpacity>
    </View>
  );
}
export default StartScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  }
});