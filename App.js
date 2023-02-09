import React, { useState } from 'react';
// import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />      
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />      
      <Stack.Screen name="Home" component={Home} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   input: {
//     width: 270,
//     textAlign: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingLeft: 10,
//     paddingBottom: 8,
//     marginBottom: 15
//   },
//   text: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     color: '#fff'
//   },
//   button: {
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#7a7275',
//     width: 200,
//     // borderWidth: 1,
//     borderRadius: 2
//   }
// });











{/* 
colors: {
  gray-brown: #7a7275
  light grey: #d3d3d3
  gymshark green: #78a191
  light beige: #c4a988
}

*/}