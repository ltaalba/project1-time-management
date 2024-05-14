import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import FindFriendsScreenStyles from "../styles/FindFriendsScreenStyles"


export default function FindFriendsScreen() {
  
  

  

  return (
    <View style={FindFriendsScreenStyles.bigContainer}>
    <Text style={FindFriendsScreenStyles.header}>Scroll Mindfully</Text>
    <View style={FindFriendsScreenStyles.container}>
        <Text style={FindFriendsScreenStyles.title}>Find Friends</Text>
      <TextInput
        style={FindFriendsScreenStyles.input}
        placeholder="Search friends..."
      />
    <TouchableOpacity style={FindFriendsScreenStyles.button}>
        <Text style={FindFriendsScreenStyles.buttonText}>Find Friend</Text>
      </TouchableOpacity>    
      </View>

      <View style={FindFriendsScreenStyles.container}>    
      <Text style={FindFriendsScreenStyles.title}>Results</Text>

      </View>

    </View>
  );
}


