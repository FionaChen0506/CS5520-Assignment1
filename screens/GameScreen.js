import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';

export default function GameScreen({ setScreen }) {
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
    // Navigate to the StartingScreen and reset all information
    setScreen('StartingScreen');
  };

  const handleReset = () => {
    // Clear the TextInput
    setUserInput('');
  };

  const handleConfirm = () => {
    const guess = parseInt(userInput);
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
      <Text>Guess a number between 10 & 20</Text>
      <Card>
        {result === null && (
          <>
            <Text>Enter A Number</Text>
            <TextInput
              style={styles.input}
              value={userInput}
              onChangeText={setUserInput}
            />
            <View style={styles.buttonContainer}>
              <Button title="Reset" onPress={handleReset} />
              <Button title="Confirm" onPress={handleConfirm} />
            </View>
          </>
        )}

        {result === 'lose' && (
          <>
          <Image
            source={require('../assets/sad-smiley.jpg')} // Replace with your image source
            style={styles.smileyImage}
          />
            <Text>Incorrect guess. Try again!</Text>
            <Button title="Try Again" onPress={handleTryAgain} />
          </>
          
        )}

        {result === 'win' && (
          <>
            <Text>Congratulations! You guessed correct!</Text>
            <Text>Number of guesses: {guesses}</Text>
            <Image
              source={{
                uri: `https://picsum.photos/id/${randomNumber}/100/100`,
              }}
              style={styles.resultImage}
            />
            <Button title="New Game" onPress={handleNewGame} />
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
  },
  header: {
    alignSelf: 'flex-end',
    margin: 10,
  },

  input: {
    // width: 100,
    // borderWidth: 1,
    // borderColor: 'gray',
    // marginVertical: 10,
    // paddingHorizontal: 5,
    borderBottomWidth: 1, 
    borderColor: 'blue', 
    paddingVertical: 4,
    marginBottom: 15,
    paddingHorizontal:4,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '100%',
  },
  smileyImage: {
    width: 100,
    height: 100,
  },
  resultImage: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
});







