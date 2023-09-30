import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors';

const Card = ({ children }) => {
    return (
      <View style={styles.card}>
        {children}
      </View>
    );
};

export default Card

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardBackground, 
        borderRadius: 7,
        padding: 18,
        //shadowColor: colors.onPrimaryContainer,             
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,   
        elevation: 5,
        width: '90%',  
        //alignItems: 'center', 
    }
})