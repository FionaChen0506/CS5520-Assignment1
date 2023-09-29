import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartingScreen from './screens/StartingScreen';



export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function sendName(name){
    setName(name);
  }

  function sendEmail(email){
    setEmail(email);
  }

  function sendPhone(phone){
    setPhone(phone);
  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      
      <StatusBar style="auto" />
      <StartingScreen
            name={name}
            email={email}
            phone={phone}
            setName={sendName}
            setEmail={sendEmail}
            setPhone={sendPhone}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
