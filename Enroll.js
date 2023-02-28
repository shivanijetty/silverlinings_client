import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Enroll({userHabits, setUserHabits, loggedUser, setLoggedUser}) {

  const navigation = useNavigation()
  const [allHabits, setAllHabits] = useState([])
  const [progress, setProgress] = useState(0)

  

  useEffect(() => {
    const loadAllHabits = async () => {
      let req = await fetch("http://10.129.2.201:3000/habits")
      let res = await req.json()
      setAllHabits(res)
    }
    loadAllHabits()
  }, [])
  

  const handlePress = async (enrolledHabitParams) => {

    const habitId = allHabits.find((habit) => {
      return habit.id === enrolledHabitParams      
    })
    
    const habitImage = allHabits.find((habit) => {
      return habit.image === enrolledHabitParams      
    })

    let habitData = {
      user_id: loggedUser.id,
      habit_id: habitId,
      progress: progress,
      habit_image: habitImage
    }

    let req = await fetch("http://10.129.2.201:3000/enroll", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(habitData)
    })
    let res = await req.json()
    if (req.ok) {
      setUserHabits(res)
      console.log(userHabits," new habit")
      const added = allHabits.filter((habit) => {
        return allHabits.id !== habit
      }) 
      setUserHabits(added) 
    }
  }

  const renderHabitIcons = ({ item }) => {
    return (
      <Pressable style={styles.icons} onPress={() => { handlePress(enrolledHabitParams) }}>
      <Image source={{uri: item.image}} style={styles.image}/>
      </Pressable>
    )
  }




  return(
    <SafeAreaView style={{ backgroundColor: '#f7f4ea', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={allHabits}
          renderItem={renderHabitIcons}          
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  icons: {
    backgroundColor: '#c0b9dd',
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
    backgroundColor: '#c0b9dd',
    height: 50,
    width: 50
  }
})