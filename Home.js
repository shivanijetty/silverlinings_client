import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import icons from './icons';
import { Ionicons } from '@expo/vector-icons';


export default function Enroll({ loggedUser, setLoggedUser, userHabits, setUserHabits }) {
  const navigation = useNavigation()
  
  const navEnroll = () => {
    navigation.navigate('Enroll')
  }

  useEffect(() => {
    const request = async () => {
      let req = await fetch(`http://10.129.2.201:3000/users/${loggedUser.id}/activities`)
      let res = await req.json()

      setUserHabits(res)
    }
    request()
  }, [])

  const trackProgress = async (activityId) => {
    
    let req = await fetch(`http://10.129.2.201:3000/users/${loggedUser.id}/activities/${activityId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        progress: setUserHabits.progress + 1
      })
    })
    if (req.ok) {
      let res = await req.json()
      // console.log(res)
      const new_array = userHabits.map((habit) => {
        if (habit.id === res.id) {
          return {...habit, progress: res.progress}
        }
        return habit
      })
      setUserHabits(new_array)
    }
  }

  const giveup = async (activityId) => {
    // console.log(activityId)
    let req = await fetch(`http://10.129.2.201:3000/users/${loggedUser.id}/activities/${activityId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (req.ok) {
      let res = await req.json()
      const deleted = userHabits.filter((habit) => {
        return habit.id !== activityId
      }) 
      setUserHabits(deleted)     
    }
  }
  
  
  const logout = () => {
    AsyncStorage.removeItem('token')
    setLoggedUser(null)
    navigation.navigate('Login')
  }



  return (
    <SafeAreaView style={{backgroundColor: '#efe6dd', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{loggedUser.username}</Text>
          <Pressable onPress={()=> logout()}>
            <Ionicons name="ios-power-outline" size={25} color="black" style={{marginLeft: 5}} />
          </Pressable>
        </View>

        <View>
          {
            userHabits.map((habit) => {
              return (
                <View style={styles.container}>
                  <Image source={{uri: habit.habit_image}} style={styles.image} />
                  <View style={styles.icons}>
                    <Pressable onPress={() => trackProgress(habit.id)}>
                      <Text style={{marginLeft: 5, fontWeight: 'bold'}}>{habit.progress}</Text>
                      <Ionicons name="add-circle-sharp" size={20} color="#80b918" />
                    </Pressable>

                    <Pressable onPress={() => giveup(habit.id)}>
                      <Ionicons name="close-circle-sharp" size={20} color="#ba181b" />
                    </Pressable>
                  </View>
                </View>
              )
            })
          }
        </View>

          <Pressable onPress={() => navEnroll()} style={styles.button}>
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
    backgroundColor: '#f7ede2',
    flexDirection: 'row',
    width: "100%",
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 10
  },
  image: {
    backgroundColor: '#f7ede2',
    height: 50,
    width: 50,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  icons: {
    backgroundColor: '#f7ede2',
    flexDirection: 'column', 
    marginLeft: 5, 
    justifyContent: 'space-between'
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 17,
    color: '#000',
    letterSpacing: 2,
  },
  textInput: {
    paddingVertical: 0, 
    marginLeft: 2,
    fontSize: 12,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: '#ffbf69',
    width: 275,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
  }
});