import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Habits({userHabits, setUserHabits, loggedUser, setLoggedUser}) {
  const navigation = useNavigation()

  const [allHabits, setAllHabits] = useState([])
  

  useEffect(() => {
    const loadAllHabits = async () => {
      let req = await fetch("http://10.129.2.201:3000/habits")
      let res = await req.json()
      setAllHabits(res)
    }
    loadAllHabits()
  }, [])

  const addHabit = (habit) => {
    if (userHabits.includes(habit)) return;
    setUserHabits([...userHabits, habit])
  }


  return(
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {
        allHabits.map((habit) => {
          return(
            <View>
              <View style={styles.icons}>
                <Pressable>
                  <Image source={{uri: habit.image}} style={styles.image}/>
                  {/* <Ionicons name="add-circle-sharp" size={30} color="black" /> */}
                </Pressable>
              </View>
            </View>
          )
        })
      }
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  icons: {
    marginLeft: 1,
    paddingBottom: 3,
    flexDirection: 'column',
    // marginLeft: '10%',
    // width: "100%",
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    margin: 5,      
  },
  image: {
    height: 50,
    width: 50
  }
})