import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import Card from '../components/Card';

export default function startingScreen(
{   name: passedName,
    email: passedEmail,
    phone: passedPhone,
}) {

    const [name, setName] = useState(passedName || '');
    const [email, setEmail] =  useState(passedEmail || '');
    const [phone, setPhone] = useState(passedPhone || '');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    // Function to handle user input changes
    const handleNameChange = (text) => {
        console.log(text);
        setName(text);
        setErrorName('');
      };
    
      const handleEmailChange = (text) => {
        setEmail(text);
        setErrorEmail('');
      };
    
      const handlePhoneChange = (text) => {
        setPhone(text);
        setErrorPhone('');
      };

      const handleReset = () => {
        setName('');
        setEmail('');
        setPhone('');
        setIsChecked(false);
        
      };

      const handleStart = () => {
        const isValidName = /^[A-Za-z\s]+$/.test(name) && name.length > 1;
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isValidPhone = /^[0-9]{10}$/.test(phone);
    
        if (!isValidName) {
          setErrorName('Please enter a valid name');
        }
    
        if (!isValidEmail) {
          setErrorEmail('Please enter a valid email address');
        }

        if (!isValidPhone) {
            setErrorPhone('Please enter a valid phone number');
        }
    
        if (isChecked && isValidName && isValidEmail && isValidPhone) {
            // Perform the desired action when all inputs are valid and checkbox is checked
            console.log('All inputs are valid');
        }
        };
  return (
    <View style={styles.container}>
    <Card style={styles.cardContainer}>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={handleNameChange}
        placeholder="Enter your name"
      />
      {errorName !== '' && <Text style={styles.error}>{errorName}</Text>}

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
      />
      {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}

      <Text>Phone</Text>
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        placeholder="Enter your phone number"
      />
      {errorPhone !== '' && <Text style={styles.error}>{errorPhone}</Text>}


      <Checkbox
        label="I'm not a robot"
        value={isChecked}
        onValueChange={(value) => setIsChecked(value)}
      />
        <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={handleReset} color="red" />
            <Button
            title="Start"
            onPress={handleStart}
            disabled={!isChecked}
            color="green"
            />
        </View>

        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        marginTop: 100,
      },
      cardContainer:{
        width: '80%',
        height: '80%',
      },
      error: {
        color: 'red',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
      },
})