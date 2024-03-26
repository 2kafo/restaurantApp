import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const users = [];

const RegistrationPage = ({navigation}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [secondPassword, setSecondPassword] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    secondPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleSecondShowPassword = () => {
    setSecondPassword(!secondPassword);
  };

  const handleChangeValue = (name, value) => {
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const mergeNewUser = () => {
    const { fullName, email, password, secondPassword } = newUser;

    // Validate form fields
    if (!fullName || !email || !password || !secondPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    // Check if passwords match
    if (password !== secondPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Add new user to the array of users
    const newUserObj = { fullName, email, password };

    // users.push(newUserObj); // You can add this to your user array if needed

    users.push(newUserObj);
    console.log(...users, users)
    // Clear form fields and error message after successful registration
    setNewUser({
      fullName: '',
      email: '',
      password: '',
      secondPassword: ''
    });
    setErrorMessage('');
    navigation.navigate('LogInPage'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration Page</Text>
      <TextInput
        style={styles.input}
        value={newUser.fullName}
        onChangeText={value => handleChangeValue('fullName', value)}
        placeholder='Enter Your Full Name'
      />
      <TextInput
        style={styles.input}
        value={newUser.email}
        onChangeText={value => handleChangeValue('email', value)}
        placeholder='Enter Your Email'
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          value={newUser.password}
          onChangeText={value => handleChangeValue('password', value)}
          secureTextEntry={!showPassword}
          placeholder='Enter Your Password'
        />
        <MaterialCommunityIcons
          name={showPassword ? 'eye' : 'eye-off'}
          size={24}
          color='#aaa'
          style={styles.icon}
          onPress={toggleShowPassword}
        />
      </View>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          value={newUser.secondPassword}
          onChangeText={value => handleChangeValue('secondPassword', value)}
          secureTextEntry={!secondPassword}
          placeholder='Confirm Your Password'
        />
        <MaterialCommunityIcons
          name={secondPassword ? 'eye' : 'eye-off'}
          size={24}
          color='#aaa'
          style={styles.icon}
          onPress={toggleSecondShowPassword}
        />
      </View>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      <Pressable style={styles.btn1} onPress={mergeNewUser}>
        <Text style={styles.btnText}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  btn1: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  errorMessage: {
    color: 'black',
    marginBottom: 20,
    backgroundColor:'red'
  },
});

export default RegistrationPage;
