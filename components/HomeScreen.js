// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function HomeScreen({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [confidence, setConfidence] = useState('');
  const [carbohydrates, setCarbohydrates] = useState('');
  const [protein, setProtein] = useState('');
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);

  const requestPermissions = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === 'granted');
    setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const takePhoto = async () => {
    if (hasCameraPermission === null) {
      Alert.alert('Permission Required', 'Camera permission is still being requested...');
      return;
    }
    
    if (!hasCameraPermission) {
      Alert.alert('Permission Required', 'You need to grant camera access');
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.5,
      });

      if (result.cancelled) {
        Alert.alert('Cancelled', 'Photo capture was cancelled');
        return;
      }

      const imageUri = result.assets[0].uri;
      setImageUri(imageUri);
      predictFood(imageUri);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while taking the photo');
    }
  };

  const predictFood = async (uri) => {
    const localUri = uri;
    const filename = localUri.split('/').pop();
    const fileExtension = filename.split('.').pop();
    const type = `image/${fileExtension}`;

    let formData = new FormData();
    formData.append('file', {
      uri: localUri,
      name: filename,
      type: type,
    });

    try {
      const response = await fetch('http://192.168.0.105:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        Alert.alert('Error', 'Failed to get a valid response from API');
        return;
      }

      const data = await response.json();
      if (data.food && data.calories && data.carbohydrates && data.protein && data.confidence) {
        setFoodName(data.food);
        setCalories(data.calories);
        setCarbohydrates(data.carbohydrates);
        setProtein(data.protein);
        const confidencePercentage = data.confidence.toFixed(2);
        setConfidence(`${confidencePercentage}`);
      } else {
        Alert.alert('Error', 'Received invalid data from the API');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to recognize the food');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Take a Photo" onPress={takePhoto} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {foodName ? (
        <View style={styles.result}>
          <Text style={styles.resultText}>Food: {foodName}</Text>
          <Text style={styles.resultText}>Calories: {calories} kcal</Text>
          <Text style={styles.resultText}>Carbohydrates: {carbohydrates} g</Text>
          <Text style={styles.resultText}>Protein: {protein} g</Text>
          <Text style={styles.resultText}>Confidence: {confidence} %</Text>
        </View>
      ) : (
        <Text style={styles.resultText}>No food data available</Text>
      )}
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity> */}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;