import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import icons from './icons';
import { Ionicons } from '@expo/vector-icons';


export default function Home({ loggedUser, setLoggedUser, userHabits, setUserHabits }) {
  const navigation = useNavigation()
  const logout = () => {
    AsyncStorage.removeItem('token')
    setUser(null)
    navigation.navigate('Login')
  }

  const navHabits = () => {
    navigation.navigate('Habits')
  }

  // const userHabitsFilter = () => console.log(userHabits)
  // .filter((loggedUser) => {
  //   return loggedUser.id === user.id
  

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        
        <View>
          <Text>{loggedUser.username}</Text>
          <Pressable onPress={()=> logout()}>
            <Ionicons name="ios-power-outline" size={20} color="black" />
          </Pressable>
        </View>

        <View>
          {/* {
            userHabitsFilter.map(myhabit => {
              return(
                <View name={myhabit.image}>
                  <View>
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
          } */}
          <Pressable onPress={() => navHabits()} style={styles.button}>
            <Text style={styles.text}>ADD HABITS</Text>
          </Pressable>
        </View>

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