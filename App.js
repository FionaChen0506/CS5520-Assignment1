import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import { LinearGradient } from 'expo-linear-gradient';




export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function sendName(name){
    setName(name);
    console.log(name);
  }

  function sendEmail(email){
    setEmail(email);
  }

  function sendPhone(phone){
    setPhone(phone);
  }
  return (
    <LinearGradient
    colors={['#8bf0e1', '#4a6fbd', '#255799']}
    style={styles.container}
    >      
      <SafeAreaView>
      <StartingScreen
            name={name}
            email={email}
            phone={phone}
            setName={sendName}
            setEmail={sendEmail}
            setPhone={sendPhone}
      />
       
      </SafeAreaView>  
      {/* <StatusBar style="auto" />    */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    //width: '100%',
    height: '100%',
  },
},);
