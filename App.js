import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmedData, setConfirmedData] = useState(null); 
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState
  ('StartingScreen');


  const handleValidationSuccess = ({ name, email, phone }) => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    setName(name);
    setEmail(email);
    setPhone(phone);

    // Set the data in confirmedData state to pass to ConfirmScreen
    setConfirmedData({ name, email, phone });
    setCurrentScreen('ConfirmScreen');

    // Set loggedIn to true when validation is successful
    setLoggedIn(true);
  };

    // Function to reset user data
    const handleLogout = () => {
      setLoggedIn(false);
      setCurrentScreen('StartingScreen'); 
    };

  return (
    <LinearGradient
    colors={['#8bf0e1', '#4a6fbd', '#255799']}
    style={styles.container}
    >      
      <SafeAreaView>
      {currentScreen === 'StartingScreen' && (
      <StartingScreen
            name={name}
            email={email}
            phone={phone}
            onValidationSuccess={handleValidationSuccess}
            loggedIn={loggedIn} 
      />
      )}

      {/* Render ConfirmScreen and pass the data */}
      {currentScreen === 'ConfirmScreen' && (
        <ConfirmScreen
          name={confirmedData.name}
          email={confirmedData.email}
          phone={confirmedData.phone}
          setScreen={setCurrentScreen}
        />
      )}

      {currentScreen === 'GameScreen' && 
      <GameScreen setScreen={setCurrentScreen}
                  loggedIn={loggedIn}
                  onLogout={handleLogout}/>}
       
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
},);
