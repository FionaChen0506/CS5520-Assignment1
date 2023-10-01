import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../colors';

const Input = ({ value, onChangeText }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1.5,
    borderColor: colors.blueButton,
    paddingVertical: 4,
    marginBottom: 15,
    paddingHorizontal: 4,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.blueText, 
  },
});

export default Input;
