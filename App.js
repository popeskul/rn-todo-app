import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Some text Some text Some text' },
    { id: 2, title: 'Some text Some text Some text' },
    { id: 3, title: 'Some text Some text Some text' },
    { id: 4, title: 'Some text Some text Some text' },
    { id: 5, title: 'Some text Some text Some text' },
    { id: 6, title: 'Some text Some text Some text' },
    { id: 7, title: 'Some text Some text Some text' },
    { id: 8, title: 'Some text Some text Some text' },
    { id: 9, title: 'Some text Some text Some text' },
    { id: 10, title: 'Some text Some text Some text' },
  ]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <View>
      <Navbar title='Hello Pasha' />

      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});
