import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../colors'

export default function Header({name}) {
  return (
    <View>
      <Text style = {styles.header}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{    
        alignItems: "center",
        color: colors.header,
        fontSize: 24,
        padding: 5,
        marginBottom: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})