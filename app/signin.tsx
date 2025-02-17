import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const SignInScreen = () => {
  return (
    <>
    <Stack.Screen options={{headerTitle:"Sign In",headerLeft:()=>(
      <TouchableOpacity style={{marginRight:20}} onPress={()=>router.back()}>
        <Ionicons name='close' size={24} color={Colors.black}/>
      </TouchableOpacity>
    )}}/>
    <View>
      <Text>SignInScreen</Text>
    </View>
    </>
    
  )
}

export default SignInScreen

const styles = StyleSheet.create({})