import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './UI/AppButton';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Please type text');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Type text'
        autoCorrect={false}
        autoCapitalize='none'
      />

      <AppButton onPress={pressHandler} style={styles.button}>
        Add
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  button: {
    backgroundColor: 'red',
  },
});
