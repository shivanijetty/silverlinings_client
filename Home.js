import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import icons from './icons';
import { Ionicons } from '@expo/vector-icons';


export default function Home({ loggedUser, setLoggedUser, userHabits, setUserHabits }) {
  const navigation = useNavigation()
  
  const navHabits = () => {
    navigation.navigate('Habits')
  }

  useEffect(() => {
    const request = async () => {
      let req = await fetch(`http://192.168.99.115:3000/users/${loggedUser.id}/habits`)
      let res = await req.json()

      setUserHabits(res)
    }
    request()
  }, [])
  
  // console.log('I am ', loggedUser)
  // console.log(userHabits)

  // const userHabitsFilter =
  // userHabits.filter((data) => {
  //   // console.log(data)
  //   return data.id === loggedUser.id
  // })
  // console.log("printing the array", userHabitsFilter)
  
  const logout = () => {
    AsyncStorage.removeItem('token')
    setLoggedUser(null)
    navigation.navigate('Login')
  }



  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{loggedUser.username}</Text>
          <Pressable onPress={()=> logout()}>
            <Ionicons name="ios-power-outline" size={25} color="black" style={{marginLeft: 5}} />
          </Pressable>
        </View>

        <View>
          {
            userHabits.map((habit, i) => {
              return (
                <View style={styles.container}>
                  <Image key={i} source={{uri: habit.image}} style={styles.image} />
                  <View style={styles.icons}>
                    <Pressable>
                      <Ionicons name="add-circle-sharp" size={20} color="black" />
                    </Pressable>

                    <Pressable>
                      <Ionicons name="remove-circle-sharp" size={20} color="black" />
                    </Pressable>
                  </View>
                </View>
              )
            })
          }
        </View>

          <Pressable onPress={() => navHabits()} style={styles.button}>
            <Text style={styles.text}>ADD HABITS</Text>
          </Pressable>
  
      </View>
    </SafeAreaView>
  );
}


// <MaterialCommunityIcons name="arm-flex" size={24} color="black" />; (workout),
// <MaterialCommunityIcons name="pot-steam" size={24} color="black" />; (cooking),
// <MaterialCommunityIcons name="meditation" size={24} color="black" />; (meditate),
// <MaterialCommunityIcons name="glass-cocktail-off" size={24} color="black" />; (sober)
// <MaterialCommunityIcons name="face-man-shimmer" size={24} color="black" />; (skincare),
// <MaterialCommunityIcons name="cup-water" size={24} color="black" />; (drink water),
// <MaterialCommunityIcons name="book-open-variant" size={24} color="black" /> (reading)
// <MaterialIcons name="food-bank" size={24} color="black" />; (eating-out),

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
  container: {
    flexDirection: 'row',
    width: "100%",
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
  },
  image: {
    height: 50,
    width: 50,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  icons: {
    flexDirection: 'column', 
    marginLeft: 5, 
    justifyContent: 'space-between'
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