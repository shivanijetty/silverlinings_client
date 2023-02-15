import React, { useEffect, useState } from 'react';
// import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [user, setUser] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')
    
  useEffect(() => {
    const loadUser = async () => {
      let token = await AsyncStorage.getItem('token')
      if (token) {
        let req = await fetch("http://localhost:3000/me", {
          headers: {Authorization: token}
        })
        let res = await req.json()
        if (res.user) setUser(res.user)
      }
    }
    loadUser()
  }, [])

  

 

  const Stack = createNativeStackNavigator();

  /*
    { user !== null ? <Home component={Home} options={{ headerShown: false }} logout={logout} />
      : <Login component={Login} options={{ headerShown: false }} login={setUser}/>
    }
  */

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user == null ? (
          <>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {() => <Login setUser={setUser} />} 
            </Stack.Screen>           
            <Stack.Screen name="Signup" options={{ headerShown: false }}>
              {() => <Signup />}            
            </Stack.Screen>      
          </>
        ) : (
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {() => <Home user={user} setUser={setUser} />} 
            </Stack.Screen>             
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