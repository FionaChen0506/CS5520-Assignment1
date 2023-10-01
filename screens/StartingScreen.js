import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import Card from '../components/Card';
import colors from '../colors';
import { useEffect } from 'react';
import Header from '../components/Header';

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
      <TextInput
        value={name}
        onChangeText={handleNameChange}
        style={[styles.input, styles.inputStyles]} 
      />
      {errorName !== '' && <Text style={styles.error}>{errorName}</Text>}

      <Text style={styles.text}>Email Address:</Text>
      <TextInput
        value={email}
        onChangeText={handleEmailChange}
        style={[styles.input, styles.inputStyles]} 
      />
      {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}

      <Text style={styles.text}>Phone Number:</Text>
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        style={[styles.input, styles.inputStyles]} 
      />
      {errorPhone !== '' && <Text style={styles.error}>{errorPhone}</Text>}

      <View style={styles.checkboxContainer}>
      <Checkbox
        title="I'm not a robot"
        value={isChecked}
        onValueChange={(value) => setIsChecked(value)}
      />
      <Text style={{ fontSize: 18, color:"blue" }}> I'm not a robot</Text>
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
        //justifyContent: 'center',
        //alignItems: 'center',
        width: '90%',
        display: 'flex',
        marginTop: 6,
        
      },
      cardContainer:{
        flex: 1,
        width: '90%',
        //height: '80%',
        justifyContent: 'center',
        //marginTop: 30,
        
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
        //justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 15,
        //width: 300,
        width: "90%",
        alignSelf: 'center',
        //marginLeft: 20,
        //marginRight: 20,
      },
      input: {
        borderBottomWidth: 1, 
        borderColor: 'blue', 
        paddingVertical: 4,
        marginBottom: 15,
        paddingHorizontal:4,
        
      },
      inputStyles: {
        textAlign: 'center',
        fontSize: 22, 
        fontWeight: 'bold', 
        color: colors.blueText, 

      },
      text: {
        fontSize: 22,
        //color: "#128056",
        marginBottom: 30,
        marginTop: 10,
        color: colors.blueText, 
      },
})