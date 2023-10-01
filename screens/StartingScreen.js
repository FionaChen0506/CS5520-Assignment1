import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import Card from '../components/Card';
import colors from '../colors';
import { useEffect } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

export default function startingScreen(
{   name: passedName,
    email: passedEmail,
    phone: passedPhone,
    onValidationSuccess,
    loggedIn, 
    onLogout 
}) {

    const [name, setName] = useState(passedName || '');
    const [email, setEmail] =  useState(passedEmail || '');
    const [phone, setPhone] = useState(passedPhone || '');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);


      // Clear data when not logged in
  useEffect(() => {
    if (!loggedIn) {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [loggedIn]);

    // Function to handle user input changes
    const handleNameChange = (text) => {
        //console.log(text);
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
        setErrorName('');
        setErrorEmail('');
        setErrorPhone('');
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
            // Call the callback function to pass data back to App.js
            onValidationSuccess({ name, email, phone });
          
        }
        };
  return (
    
    <View style={styles.container}>
      <Header name="Welcome"/>
    <Card style={styles.cardContainer}>
      <Text style={styles.text}>Name:</Text>
      <Input
        value={name}
        onChangeText={handleNameChange}
      />
      {errorName !== '' && <Text style={styles.error}>{errorName}</Text>}

      <Text style={styles.text}>Email Address:</Text>
      <Input
        value={email}
        onChangeText={handleEmailChange}
      />
      {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}

      <Text style={styles.text}>Phone Number:</Text>
      <Input
        value={phone}
        onChangeText={handlePhoneChange}
      />
      {errorPhone !== '' && <Text style={styles.error}>{errorPhone}</Text>}

      <View style={styles.checkboxContainer}>
      <Checkbox
        title="I'm not a robot"
        value={isChecked}
        onValueChange={(value) => setIsChecked(value)}
      />
      <Text style={{ fontSize: 18, color:"blue" }}> I am not a robot</Text>
      </View>
        <View style={styles.buttonContainer}>
            <Button title="Reset" onPress={handleReset} color={colors.redButton} />
            <Button
            title="Start"
            onPress={handleStart}
            disabled={!isChecked}
            color={colors.blueButton}
            />
        </View>

        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        //height: '90%',
        display: 'flex',
        marginTop: 6,
        
      },
      cardContainer:{
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        
      },
      checkboxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
      error: {
        color: colors.errorColor,
        fontSize: 18,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 15,
        width: "90%",
        //alignSelf: 'center',
        alignItems: 'center',

      },
      text: {
        fontSize: 22,
        marginBottom: 30,
        marginTop: 10,
        color: colors.blueText, 
      },
})