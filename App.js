import React, { useEffect, useState } from 'react';
// import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Habits from './Habits';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [loggedUser, setLoggedUser] = useState(null)
  const [userHabits, setUserHabits] = useState([])
  
    
  useEffect(() => {
    const loadUser = async () => {
      let token = await AsyncStorage.getItem('token')      
      if (token) {
        setLoggedUser(JSON.parse(token))
        let req = await fetch("http://192.168.99.115:3000/me", {
          method: 'GET',
          headers: {
            // Authorization: token
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Token': token
          }
        })
        let res = await req.json()
        if (res.user) {
         setLoggedUser(res.user)
        }
      }
    }
    loadUser()
  }, [])

  
  
  // const fetchUsers = async () => {
  //   let req = await fetch("http://10.129.2.201:3000/users")
  //   let res = await req.json()               
    
  // }
  // useEffect (() => {
  //   fetchUsers()
  // }, [])

  const Stack = createNativeStackNavigator();

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { loggedUser === null ? (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <Login setLoggedUser={setLoggedUser} />} 
            </Stack.Screen>           
            <Stack.Screen name="Signup" options={{ headerShown: false }}>
              {() => <Signup />}            
            </Stack.Screen>      
          </>
        ) : (
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {() => <Home loggedUser={loggedUser} setLoggedUser={setLoggedUser} setUserHabits={setUserHabits} userHabits={userHabits} />} 
            </Stack.Screen>
            <Stack.Screen name="Habits" >
              {() => <Habits setUserHabits={setUserHabits} userHabits={userHabits} loggedUser={loggedUser} setLoggedUser={setLoggedUser} />}
            </Stack.Screen>         
          </>
        )}
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