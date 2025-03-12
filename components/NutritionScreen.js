import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

const NutritionScreen = ({ navigation }) => {

    // Function to handle button press
    const handleGetStarted = () => {
        navigation.navigate('Login'); // Replace 'Login' with your login screen name
    };

    return (
        <ImageBackground
            source={{ uri: 'https://s3-alpha-sig.figma.com/img/c913/bab3/e144fd6dce9f1a7a1fd4b0ca5218ad2a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iyy2fhTgRKRMJFqoM5xtbVZv8FQIGr4eYDOv2cj6EaItGVqyD2U4qbs5v2RBcf1S5RInrgrFQWsK2UGHyazJ~sPhsnwocn6KeojQS8yaCDVyJnF419wIdtrsyWaFU3vODcTRQjSRg2r5adNICuig-Z~ehpAhOaadwMifBVSwtyvX0MApZXIJbVndgI5fhJ0xe8PVesr3pw4Xyb50mweJeKGn~6Zny4MvI5-Ky-TBkwCnFw8R4upOxW4WhWVeScuFITCI-uSIhyhQ9zRITSPriA39-bBhqYN-sFhPexSzv8NPqx9ytXzX-qvrjwnAhtLrRNz4s2905hZmRr9uzKhyJg__' }} // Replace with your background image URL
            style={styles.background}
            resizeMode="cover" // or "contain" depending on your needs
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://s3-alpha-sig.figma.com/img/003a/fd29/e10b369265bec9c68d2c510f588fbf9d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=knYuleEa2crj1CcjoEgTr3lwbvypZQVdX6mFD8yz7qpC1BGCRptgASlCrT5wxv6pvB-wTrOn6CD~Ua143SfzyWUmjiDC~syFlLx-P5gBLkA1Q8ZJi--iMXYHlANnhgdypwpQ32r6kStY6V3I37-neW1TZ-a7iCwL1f~syAxjhnAia2~ng3i4SXYAsX72ee8dME3gRn8harwACfcWaHcMbX9q4yjePhuzRSIBmSggOKoTmo2e1Qj2r13UCUiF9PxZm1g~I0jIipcj-P4IonehFKvK6idbUsOzdJAMxBNFCpNjvrRTiM5Vbt9FC158kyv4O9jUoUWN1XC-6ktt7jqyQw__' }} // Replace this with the actual image URL
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.title}>Track your meals and take control of your nutrition!</Text>
                <Text style={styles.subtitle}>
                    Track calories, identify meals, and create personalized meal plans tailored to health goals.
                    Start your journey to better health today!
                </Text>
                <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
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
    container: {
        flex: 1,
        backgroundColor: 'rgba(93, 131, 89, 0.8)', // Semi-transparent background color for better text visibility
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    imageContainer: {
        marginBottom: 20,
        borderRadius: 350,
        height: 560,
        width: 270,
        backgroundColor: '#324B30',
        marginTop: -120,
        opacity:0.9,
    },
    image: {
        width: 560.4548891103628, // Adjust size as needed
        height: 670.2016531427868, // Adjust size as needed
        marginTop: -22.88,
        marginLeft: -177,
        shadowColor: '#FFFFFF59', 
        shadowOffset: {
            width: -10,
            height: -20, 
        },
        shadowOpacity: 0, 
        shadowRadius: 200,
        transform: [{ rotate: '-10.7deg' }],
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily:'ADLaM Display',
        color:'white',
        
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
        marginTop:20,
    },
    button: {
        backgroundColor: '#FFD700', // Yellow color for the button
        borderRadius: 25 ,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop:10,
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NutritionScreen;