import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('Email Address')
  const [password, setPassword] = useState('Password')
  

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ paddingHorizontal: 25}}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#483C32', marginBottom: 30 }}>LOGIN</Text> 

        <View style={{ alignItems: 'center'}}> 
          <View style={styles.input}>
            <TextInput onChangeText={(e) => setEmail(e)} placeholder='Email Address' style={{paddingVertical: 0}} keyboardType="email-address" />
          </View> 

          <View style={styles.input}>
            <TextInput onChangeText={(e) => setPassword(e)} placeholder='Password' style={{paddingVertical: 0}} secureTextEntry={true} />
          </View>

          <Pressable onPress={() => navigation.navigate('Home')} style={styles.button}>
            <Text style={styles.text}>SUBMIT</Text>
          </Pressable>

          <Text style={{ justifyContent: 'center', color: '#483C32', marginTop: 20, marginBottom: 10 }}>Are you new here?</Text>

          <Pressable onPress={() => navigation.navigate('Signup')} style={styles.button}>
            <Text style={styles.text}>SIGNUP</Text>
          </Pressable>
        </View>

    </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  input: {
    width: 280,
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
    width: 230,
    // borderWidth: 1,
    borderRadius: 2
  }
});