import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import icons from './icons';
import { Ionicons } from '@expo/vector-icons';


export default function Home({ user, setUser, habits, setHabits }) {
  const navigation = useNavigation()
 
  const logout = () => {
    AsyncStorage.removeItem('token')
    setUser(null)
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        
        <View>
          <Text>{user.username}</Text>
          <Pressable onPress={()=> logout()}>
            <Ionicons name="ios-power-outline" size={20} color="black" />
          </Pressable>
        </View>

        <View>
          {
            habits.map(myhabit => {
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
          }
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

