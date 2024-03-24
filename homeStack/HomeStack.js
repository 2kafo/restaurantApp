import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import HomePageScreen from '../screens/HomePageScreen';
import RegistrationPage from '../screens/RegistrationPage'
import LogInPage from '../screens/LogInPage';


import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createStackNavigator();

export default function HomeStack() {

  return (
    
  
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#000',           
          },
          headerTintColor:'#fff',
        }}>
           <Stack.Screen 
           name='HomePage' 
           component={HomePageScreen}
           options={{
            headerTitle:'Welcome user',
            headerRight:()=> <Ionicons style={{ padding:10}} name='menu' size={24} color='white' />
           }}
           /> 
           <Stack.Screen 
           name='RegistrationPage' 
           component={RegistrationPage} 
           options={{
            headerTitle:'Registration form'
           }}
           />
           <Stack.Screen 
           name='LogInPage' 
           component={LogInPage} 
           options={{
            headerTitle:'LogInPage form'
           }}
           />
           
        </Stack.Navigator>
 
  )
}