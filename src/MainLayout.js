import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './components/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import { THEME } from './theme';

export const MainLayout = () => {
  const { todos, removeTodo, updateTodo, addTodo } = useContext(TodoContext);
  const [todoId, setTodoId] = useState(null);

  // const addTodo = (title) => {
  //   const newTodo = {
  //     id: Date.now().toString(),
  //     title,
  //   };

  //   setTodos((prev) => [...prev, newTodo]);
  // };

  // const removeTodo = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);

  //   Alert.alert(
  //     'Delete Todo',
  //     `Are you sure you want to delete ${todo.title}?`,
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Delete',
  //         style: 'destructive',
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  // const updateTodo = (id, title) => {
  //   setTodos((prev) =>
  //     prev.map((todo) => {
  //       if (todo.id === id) {
  //         todo.title = title;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);

    content = (
      <TodoScreen
        onRemove={removeTodo}
        todo={selectedTodo}
        goBack={() => setTodoId(null)}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title='Hello Pasha' />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 30,
  },
});
