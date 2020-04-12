import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './UI/AppButton';
import { FontAwesome } from '@expo/vector-icons';

interface IProps {
  onSubmit: (value: string) => void;
}

export const AddTodo: React.FC<IProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
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

      <AppButton style={styles.button} onPress={pressHandler}>
        Add
        <FontAwesome name='plus-circle' size={20} />
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
    backgroundColor: '#ff0000',
    alignItems: 'center',
  },
});
