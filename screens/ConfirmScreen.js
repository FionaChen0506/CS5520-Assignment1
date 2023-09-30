import { StyleSheet, Text, View, Button, Modal} from 'react-native';
import React, { useState } from 'react';
import Card from '../components/Card';


export default function ConfirmScreen({ name, email, phone, setScreen}) {

  const handleGoBack = () => {
    // Navigate to the StartingScreen
    setScreen('StartingScreen');
  };

  const handleContinue = () => {
    // Navigate to the GameScreen
    setScreen('GameScreen');
  };

  return (
    // <View>
    //   <Text>hi you are at ConfirmScreen</Text>
    // </View>
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Hello {name}!</Text>
        <Text>Please confirm the following information is correct:</Text>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Go back" onPress={handleGoBack} />
          <Button title="Continue" onPress={handleContinue} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})