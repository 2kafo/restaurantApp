import { View, Text, StyleSheet, Pressable, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Mock user data for demonstration
const users = [
  { username: 'john_doe', password: 'password123', fullName: 'John Doe' },
  { username: 'jane_doe', password: 'password456', fullName: 'Jane Doe' }
];

export default function LogInPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    // Find user in the user array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      // Navigate to welcome screen with user's credentials
      navigation.navigate('WelcomeScreen', { user });
    } else {
      // Show error message if user is not found
      setErrorMessage('USER OR Passwords do not match');
      return;
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye-off' : 'eye'}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Pressable style={styles.btn1} onPress={handleSignIn}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Sign In</Text>
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
  icon: {
    marginLeft: 10,
  },
  btn1: {
    padding: 10,
    backgroundColor: 'blue',
    height: 40,
    color: '#fff',
    borderRadius: 8
  }
});
