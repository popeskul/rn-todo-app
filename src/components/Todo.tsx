import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from './UI/AppText';
import { ITodo } from '../interfaces';

interface Props {
  todo: ITodo;
  onRemove: (id: number) => void;
  openTodo: (id: number) => void;
}

export const Todo: React.FC<Props> = ({ todo, onRemove, openTodo }) => {
  const longPressHandler = () => onRemove(todo.id);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => openTodo(todo.id)}
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
});
