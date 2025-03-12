import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebaseConfig'; // Import the auth object
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (username && password) {
            try {
                await signInWithEmailAndPassword(auth, username, password);
                Alert.alert(`Welcome, ${username}!`);
                navigation.navigate('Home'); 
            } catch (error) {
                Alert.alert('Login failed. Please check your credentials.');
            }
        } else {
            Alert.alert('Please enter your email and password.');
        }
    };

    return (
        <ImageBackground
            source={require('./images/backImg.png')}
            style={styles.background}
        >
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Image source={require('./images/LoginImg.png')} style={styles.cameraImage} />
                <Text style={styles.logo}>NutriSnap</Text>

                <View style={styles.loginForm}>
                    <Text style={styles.loginTitle}>Login</Text>

                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor="#A3D2C6"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor="#A3D2C6"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                        <Text style={styles.signUpText}>
                            Don't have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white', // Semi-transparent overlay
        opacity: 0.6,
    },
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 20,
        fontFamily: 'ADLaM Display',
        position: 'absolute',
        top: 0,
        marginTop: -72,
    },
    cameraImage: {
        width: '115%',
        height: 240,
        marginBottom: 20,
        marginTop: -102,
        position: 'relative',
    },
    loginForm: {
        width: '100%',
        borderRadius: 20,
        padding: 20,
        elevation: 5,
        alignItems: 'center',
        marginTop: -10,
    },
    loginTitle: {
        fontFamily: 'ADLaM Display',
        marginRight: 218,
        fontSize: 45,
        fontWeight: 'bold',
        color: '#385037',
        marginBottom: 20,
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
    signUpText: {
        color: '#333333',
        marginTop: 40,
        fontFamily: 'ADLaM Display',
        fontSize: 16,
        color: '#557955',
        textAlign: 'center',
    },
    signUpLink: {
        color: '#557955', 
        fontWeight: 'bold',
        fontSize: 16,
    },
    label: {
        fontFamily: 'ADLaM Display',
        fontSize: 20,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 5,
        alignSelf: 'flex-start', 
        marginLeft: 25,
        color: '#557955',
    },
});

export default LoginScreen;