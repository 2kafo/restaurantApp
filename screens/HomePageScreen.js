import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function HomePageScreen({ navigation }) {
console.log(navigation)

  return (
    <View style={styles.container}>
      <Text>Are You Knew to this Application?</Text>
      <View style={styles.btnGroup}>
        <Pressable style={styles.btn1} onPress={() => navigation.navigate('RegistrationPage')}>
          <Text style={{ color: '#fff' }}> Register Here</Text>
        </Pressable>
        <Pressable style={styles.btn2} onPress={() => navigation.navigate('LogInPage')}>
          <Text style={{ color: '#fff' }}> Log in</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  btnGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'Space-between',

  },
  btn1: {
    padding: 10,
    backgroundColor: 'blue',
    height: 40,
    color: '#fff',
    borderRadius: 8
  },
  btn2: {
    padding: 10,
    backgroundColor: '#000',
    height: 40,
    color: '#fff',
    borderRadius: 8
  }
})