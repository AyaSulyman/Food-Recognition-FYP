import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { auth } from './firebaseConfig'; // Import the auth object
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                Alert.alert('Account created successfully!');
                navigation.navigate('Login'); // Navigate to login after successful signup
            } catch (error) {
                Alert.alert('Sign up failed. Please try again.');
            }
        } else {
            Alert.alert('Please enter your email and password.');
        }
    };

    return (
        <ImageBackground 
            source={require('./images/backImg.png')} // Replace with your background image path
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.header}>Sign up</Text>
                
                {/* Email Label and Input */}
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />
                
                {/* Password Label and Input */}
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                
                <Text style={styles.footerText}>
                    Already registered? 
                    <Text style={styles.link} onPress={() => navigation.navigate('Login')}> Login</Text>
                </Text>
                
                <Image source={require('./images/sign.png')} style={styles.image} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(249, 249, 249, 0.8)', // Optional: semi-transparent background for the container
        borderRadius: 10, // Optional: rounded corners for the container
    },
    header: {
        fontSize: 45,
        fontWeight: 'bold',
        marginBottom: 40,
        width: 214,
        height: 57,
        fontFamily: 'ADLaM Display',
        color: '#385037',
        marginRight: 170,
    },
    label: {
        fontFamily: 'ADLaM Display',
        fontSize: 20,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'flex-start', 
        marginLeft: 45,
        color: '#557955',
    },
    input: {
        width: 310,
        height: 54,
        padding: 15,
        borderWidth: 1,
        borderColor: '#6A9A4A', 
        borderRadius: 30,
        marginBottom: 15,
        backgroundColor: '#94B779', 
    },
    button: {
        width: 220,
        height: 54,
        padding: 15,
        backgroundColor: '#385136', 
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 10,
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'ADLaM Display',
        fontSize: 20,
    },
    footerText: {
        color: '#333333',
        marginTop: 40,
        fontFamily: 'ADLaM Display',
        fontSize: 16,
        color: '#557955',
        textAlign: 'center',
    },
    link: {
        color: '#557955', 
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: 420,
        height: 400,
        marginBottom: -100,
        position: 'relative',
    },
});

export default SignUpScreen;