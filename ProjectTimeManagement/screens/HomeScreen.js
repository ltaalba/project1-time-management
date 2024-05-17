import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text onPress={() =>navigation.navigate('Home')}
      >Welcome to the Home Screen!</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
