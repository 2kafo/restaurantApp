import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function LogInPage() {

    // State variable to track password visibility 
    const [showPassword, setShowPassword] = useState(false); 
  
    // Function to toggle the password visibility state 
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    return (
        <View style={styles.container}>
            <Text style={styles.header}>RegistrationPage</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Your Full Name'

            />
            <View style={{ flexDirection:'row', justifyContent:'flexStart', marginRight:900, alignItems:'center'}}>
                <TextInput
                    style={styles.input}
                    secureTextEntry={!showPassword}
                    placeholder='Enter Your password'

                />
                <MaterialCommunityIcons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={24} 
                    color="#aaa"
                    style={styles.icon} 
                    onPress={toggleShowPassword} 
                /> 
            </View>


            <Pressable style={styles.btn1}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>Sig In</Text>
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