import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/UI/AppCard';

export const TodoScreen = ({ goBack, todo, onRemove }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='Edit' />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Back' color={THEME.GREY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title='Delete'
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    padding: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '40%',
  },
  title: {
    fontSize: 20,
  },
});
