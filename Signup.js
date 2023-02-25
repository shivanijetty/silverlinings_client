import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Signup({ setErrorMsg }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const navigation = useNavigation()

  // useEffect(() => {
  //   const loadUser = async () => {
  //     let token = await AsyncStorage.getItem('token')
    //   if (token) {
    //     let req = await fetch("http://localhost:3000/sign", {
    //       headers: {Authorization: token}
    //     })
    //     let res = await req.json()
    //     if (res.user) setUser(res.user)
    //   }
    // }
    // loadUser()
  // }, [])

  const handleSubmit = async () => {
    // e.preventDefault()
    let data = {
      username: username,
      email: email,
      password: password
    }
    let req = await fetch("http://10.129.2.201:3000/signup", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).catch(err => {
      console.log(err.message);
    })
    let res = await req.json()
    if (req.ok) {    
      console.log("Res", res)
      navigation.navigate('Login')
    }
  }

  const navLogin = () => {
    navigation.navigate('Login')
  }
  


  return(
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ paddingHorizontal: 25}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#483C32', marginBottom: 30}}>SIGNUP</Text>

        <View style={{alignItems: 'center'}}>

          <View>

            <View style={styles.input}>
              <AntDesign name="user" size={14} color="#949494" />
              <TextInput onChangeText={setUsername} /*value={username}*/ placeholder='Create Username' style={styles.textInput} keyboardType="text" />
            </View>
            <View style={styles.input}>
              <MaterialIcons name="alternate-email" size={14} color="#949494" />
              <TextInput onChangeText={setEmail} /*value={email}*/ placeholder='Enter Email' style={styles.textInput} keyboardType="email-address" />
            </View>

            <View style={styles.input}>
              <MaterialIcons name="lock-outline" size={14} color="#949494" />
              <TextInput onChangeText={setPassword} /*value={password}*/ placeholder='Create Password' style={styles.textInput} secureTextEntry={true} />
            </View>

            {/* <TouchableOpacity style={styles.input}>
            <SimpleLineIcons name="picture" size={35} color="#949494" />
            </TouchableOpacity> */}
          </View>

          <Pressable onPress={() => handleSubmit()} style={styles.button}>
            <Text style={styles.text}>GET STARTED</Text>
          </Pressable>
          <Pressable onPress={() => navLogin()} >
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#483C32', marginTop: 20}}>BACK TO LOGIN</Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
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
    fontSize: 12,
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






{/* 
colors: {
  gray-brown: #7a7275
  light grey: #d3d3d3
  gymshark green: #78a191
  light beige: #c4a988
}

*/}