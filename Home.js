import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Home({ user, setUser }) {
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
        </View>

      <Pressable onPress={()=> logout()}>
        <Text>LOGOUT</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
}


// <Ionicons name="ios-barbell-sharp" size={24} color="black" />; (gym),
// <MaterialIcons name="food-bank" size={24} color="black" />; (eating-out),
// <MaterialCommunityIcons name="meditation" size={24} color="black" />; (meditation),
// <MaterialCommunityIcons name="pot-steam" size={24} color="black" />; (cooking),
// <MaterialCommunityIcons name="face-man-shimmer" size={24} color="black" />; (skincare),
// <MaterialCommunityIcons name="cup-water" size={24} color="black" />; (drink water),
// <MaterialCommunityIcons name="glass-cocktail-off" size={24} color="black" />; (no alcohol)

