import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function startingScreen(
{   name: passedName,
    email: passedEmail,
    phone,
}) {

    const [name, setName] = useState(passedName || '');
    const [email, setEmail] =  useState(passedEmail || '');
    const [phoneText, setPhoneText] = useState("");
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');


    // Function to handle user input changes
    const handleNameChange = (text) => {
        console.log(text);
        setName(text);
      };
    
      const handleEmailChange = (text) => {
        setEmail(text);
      };
    
      const handlePhoneChange = (text) => {
        setPhone(text);
      };

      const handleReset = () => {
        setName('');
        setEmail('');
        setPhone('');
        
        setCurrentScreen('starting');
      };
  return (
    <View>

      <Text>hi you are at startingScreen</Text>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={handleNameChange} // Use the provided function to update name
        placeholder="Enter your name"
      />

    </View>
  )
}

const styles = StyleSheet.create({})