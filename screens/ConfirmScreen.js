import { StyleSheet, Text, View, Button, Modal} from 'react-native';
import React, { useState } from 'react';
import Card from '../components/Card';
import colors from '../colors';


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
    <Modal animationType="none" transparent={true}>
      <View style={styles.container}>
        <Card>
          <Text style={styles.greetingText}>Hello {name}!</Text>
          <Text style={styles.greetingText}>Please confirm the following information is correct by pressing the continue button:</Text>
          <Text style={styles.infoText}>Email: {email}</Text>
          <Text style={styles.infoText}>Phone: {phone}</Text>

          <View style={styles.buttonContainer}>
            <Button title="Go back" onPress={handleGoBack} color={colors.redButton}/>
            <Button title="Continue" onPress={handleContinue} color={colors.blueButton}/>
          </View>
        </Card>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer:{
    flex: 1,
    width: '80%',
    height: '80%',
    //justifyContent: 'center',
    //marginTop: 40,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //marginTop: 20,
    //marginLeft: 30,
    //marginRight: 30,
  },
  greetingText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    color: "#128056",
    marginBottom: 10,
  },
})