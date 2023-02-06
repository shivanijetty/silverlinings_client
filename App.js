import React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';


export default function App() {
  const [email, setEmail] = useState('Email Address')
  const [password, setPassword] = useState('Password')

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ paddingHorizontal: 25}}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#483C32', marginBottom: 30 }}>LOGIN</Text> 

        <View style={{ alignItems: 'center'}}> 
          <View style={styles.input}>
            <TextInput onChange={setEmail} placeholder='Email Address' style={{ paddingVertical: 0 }} keyboardType="email-address" />
          </View> 

          <View style={styles.input}>
            <TextInput onChange={setPassword} placeholder='Password' style={{ paddingVertical: 0 }} secureTextEntry={true} />
          </View>

          <Pressable onPress={() => {}} style={styles.button}>
            <Text style={styles.text}>SUBMIT</Text>
          </Pressable>

          <Text style={{ justifyContent: 'center', color: '#483C32', marginTop: 20, marginBottom: 10 }}>Are you new here?</Text>

          <Pressable onPress={() => { }} style={styles.button}>
            <Text style={styles.text}>SIGNUP</Text>
          </Pressable>
        </View>

    </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  input: {
    width: 300,
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
    width: 100,
    // borderWidth: 1,
    borderRadius: 5
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