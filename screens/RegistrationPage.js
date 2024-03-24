import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'


export default function RegistrationPage() {

  const [showPassword, setshowPassword] = useState(false)
  const [secondPassword, setSecondshowPassword] = useState(false)
  const toggleShowPassword = () => {
    setshowPassword(!showPassword)
  }
  const toggleSecondShowPassword = () => {
    setSecondshowPassword(!secondPassword)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>RegistrationPage</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Your Full Name'

      />
      <TextInput
        style={styles.input}
        placeholder='Enter Your email'

      />
      <View style={{display:'inline'}}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}

          placeholder='Enter Your password'
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye' : 'eye-off'}
          size={24}
          color='#aaa'
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <View style={{display:'inline'}}>
        <TextInput
          style={styles.input}
          secureTextEntry={!secondPassword}
          placeholder='confirm Your password'
        />
        <MaterialCommunityIcons
          name={secondPassword ? 'eye' : 'eye-off'}
          size={24}
          color='#aaa'
          style={styles.icon}
          onPress={toggleSecondShowPassword}
        />
      </View>

      <Pressable style={styles.btn1}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Register</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f3f3f4',
    margin: 5,
    borderBottomColor: '#ff8'
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