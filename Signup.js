import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import Login from '../screens/Login';


export default function Signup() {
  const [email, setEmail] = useState('Email Address')
  const [password, setPassword] = useState('Password')


  return(
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ paddingHorizontal: 25}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#483C32', marginBottom: 30 }}>SIGNUP</Text>

        <View style={{ alignItems: 'center'}}>
          <View style={styles.input}>
            <TextInput onChange={setEmail} placeholder='Email Address' style={{ paddingVertical: 0 }} keyboardType="email-address" />
          </View>

          <View style={styles.input}>
            <TextInput onChange={setPassword} placeholder='Create Password' style={{ paddingVertical: 0 }} secureTextEntry={true} />
          </View>

          <View style={styles.input}>
            <TextInput onChange={setPassword} placeholder='Confirm Password' style={{ paddingVertical: 0 }} secureTextEntry={true} />
          </View>

          <Pressable onPress={() => {}} style={styles.button}>
            <Text style={styles.text}>GET STARTED</Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    width: 270,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 10,
    paddingBottom: 8,
    marginBottom: 15
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff'
  },
  button: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#7a7275',
    width: 200,
    // borderWidth: 1,
    borderRadius: 2
  }
});




{/* 
colors: {
  gray-brown: #7a7275
  light grey: #d3d3d3
  gymshark green: #78a191
  light beige: #c4a988
}

*/}