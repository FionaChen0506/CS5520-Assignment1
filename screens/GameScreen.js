import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import colors from '../colors';

export default function GameScreen({ setScreen ,  loggedIn, onLogout,}) {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [guesses, setGuesses] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    // Generate a random number between 10 and 20 when first arriving at the GameScreen
    const min = 10;
    const max = 20;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
    console.log("random number:", random)

  }, []);

  const handleLogout = () => {
    // Call the onLogout function to log the user out
    onLogout();
    // Navigate to the StartingScreen and reset all information
    setScreen('StartingScreen');

  };

  const handleReset = () => {
    // Clear the TextInput
    setUserInput('');
  };

  const handleConfirm = () => {
    const guess = parseInt(userInput);
    //setGuesses(guesses + 1);
  
    if (guess >= 10 && guess <= 20) {
      setGuesses(guesses + 1);
      if (guess === randomNumber) {
        // User guessed correctly
        setResult('win');
      } else {
        // User guessed incorrectly, show sad smiley face
        setResult('lose');
      }
  
      // Clear the TextInput
      setUserInput('');
    } else {
      // Show an alert for invalid input
      alert('Please enter a number between 10 and 20', 'Invalid Number');
    }
  };
  

  const handleTryAgain = () => {
    // Clear the TextInput and reset the result
    setUserInput('');
    setResult(null);
  };

  const handleNewGame = () => {
    // Generate a new random number for a new game
    const min = 10;
    const max = 20;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
    setGuesses(0);
    setResult(null);
    console.log("new game random number:", random)
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <Header name="Guess a number between 10 & 20"/>
      <Card>
        {result === null && (
          <>
            <Text style={styles.text}>Enter A Number</Text>
            <TextInput
              style={styles.input}
              value={userInput}
              onChangeText={setUserInput}
            />
            <View style={styles.buttonContainer}>
              <Button title="Reset" onPress={handleReset} color={colors.redButton}/>
              <Button title="Confirm" onPress={handleConfirm} color={colors.blueButton}/>
            </View>
          </>
        )}

        {result === 'lose' && (
          <>
          <Text style={styles.text}>You did not guess correct!</Text>
          <Image
            source={require('../assets/sad-smiley.png')} // Replace with your image source
            style={styles.image}
          />
            
            <Button title="Try Again" onPress={handleTryAgain} color={colors.blueButton}/>
          </>
          
        )}

        {result === 'win' && (
          <>
            <Text style={styles.text}>You guessed correct!</Text>
            <Text style={styles.text}>Number of guesses: {guesses}</Text>
            <Image
              source={{
                uri: `https://picsum.photos/id/${randomNumber}/100/100`,
              }}
              style={styles.image}
            />
            <Button title="New Game" onPress={handleNewGame} color={colors.blueButton}/>
          </>
        )}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:30,
  },
  header: {
    alignSelf: 'flex-end',
    margin: 10,
  },

  input: {
    width: 50,
    textAlign: 'center',
    marginTop:20,
    marginBottom: 30,
    borderBottomWidth: 1, 
    borderColor: 'blue', 
    paddingVertical: 4,
    paddingHorizontal:4,
    fontSize: 18,
    fontWeight: 'bold',
    color:colors.blueText,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '100%',
    width: '70%',
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,

  },

  text: {
    fontSize: 20,
    //color: "#128056",
    marginBottom: 10,
    marginTop: 10,
    color: colors.blueText, 
    textAlign: 'center',
  },
});







