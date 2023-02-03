import React from 'react';
import { Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
      <View style={{ paddingHorizontal: 25 }}>

        <Text style={{ fontSize: 28, fontWeight: '500', color: '#483C32', marginBottom: 30 }}>LOGIN</Text> 

        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
          <TextInput placeholder='Email Address' style={{ paddingVertical: 0 }} keyboardType="email-address" />
        </View> 

        <View style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
          <TextInput placeholder='Password' style={{ paddingVertical: 0 }} secureTextEntry={true} />
        </View>

        <Pressable onPress={() => {}} style={{backgroundColor: '#E2725B', padding: 20, borderRadius: 10, marginBottom: 30}}>
          <Text style={{textAlign: 'center', fontWeight: 700, fontSize: 16, color: '#fff'}}>Submit</Text>
        </Pressable>

        <Text style={{ textAign: 'center', color: '#483C32', marginBottom: 30}}>Are you new here?</Text>

        <Pressable onPress={() => { }} style={{ backgroundColor: '#E2725B', padding: 20, borderRadius: 10, marginBottom: 30 }}>
          <Text style={{ textAlign: 'center', fontWeight: 700, fontSize: 16, color: '#fff' }}>Signup</Text>
        </Pressable>

    </View>
    </SafeAreaView>
  );
}


