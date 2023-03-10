import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// campus hostname = http://10.129.2.201:3000
// home hostname = http://192.168.99.115:3000

export default function Login({ setLoggedUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const navigation = useNavigation()  

  const handleSubmit = async () => {
    // e.preventDefault()

    let formData = {
      email: email,
      password: password
    }
    
    let req = await fetch("http://10.129.2.201:3000/login", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    }).catch(err => {
      console.log(err.message);
    })
    let res = await req.json()
    // console.log('RESPONSE ', res)
    if (req.ok) {     
      AsyncStorage.setItem('token', JSON.stringify(res.user))
      setLoggedUser(res.user) 
      navigation.navigate('Home')
    }
  }

  const navSignup = () => {
    navigation.navigate('Signup')
  }


  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ paddingHorizontal: 25}}>

        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#483C32', marginBottom: 30 }}>LOGIN</Text> 

        <View style={{ alignItems: 'center'}}>

          <View> 
            <View style={styles.input}>
              <MaterialIcons name="alternate-email" size={14} color="#949494" />
              <TextInput onChangeText={setEmail} value={email} placeholder='Email Address' style={styles.textInput} keyboardType="email-address" />
            </View> 

            <View style={styles.input}>
              <MaterialIcons name="lock-outline" size={14} color="#949494" />
              <TextInput onChangeText={setPassword} value={password} placeholder='Password' style={styles.textInput} secureTextEntry={true} />
            </View>

            <Pressable onPress={() => handleSubmit()} style={styles.button}>
              <Text style={styles.text}>SUBMIT</Text>
            </Pressable>
          </View>

          {/* <Text style={{ justifyContent: 'center', color: '#483C32', marginTop: 20, marginBottom: 10 }}>Are you new here?</Text> */}

          <Pressable onPress={() => navSignup()} style={styles.button}>
            <Text style={styles.text}>SIGNUP</Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  input: {
    width: 275,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 1,
    paddingBottom: 8,
    marginBottom: 10,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 17,
    color: '#fff',
    letterSpacing: 2,
  },
  textInput: {
    paddingVertical: 0, 
    marginLeft: 2,
    fontSize: 12
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#949494',
    width: 275,
    // borderWidth: 1,
    borderRadius: 2,
  }
});