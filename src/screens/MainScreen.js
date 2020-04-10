import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo.tsx';
import { THEME } from '../theme';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = () => {
  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
  );

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);

    // clear event
    return () => {
      Dimensions.removeEventListener('change', update);
    };
  }, []);

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} openTodo={changeScreen} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrap}>
        <Image
          style={styles.image}
          source={{ uri: 'https://img.icons8.com/ios/50/000000/inbox.png' }}
        />
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
