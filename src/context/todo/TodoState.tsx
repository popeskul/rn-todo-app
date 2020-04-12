import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { initialState } from './initialState';
import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  FETCH_TODOS,
  ITodoState,
  CLEAR_ERROR,
} from '../types';
import { ScreenContext } from '../screen/screenContext';

interface Props {
  children: React.ReactElement<any>;
}

export const TodoState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = async (title: string) => {
    const response = await fetch(
      'https://rn-todo-app-bd3c7.firebaseio.com/todos.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      }
    );
    const data = await response.json();

    dispatch({ type: ADD_TODO, title, id: data.name });
  };

  const removeTodo = (id: number) => {
    const todo = state.todos.find((todo: { id: number }) => todo.id === id);

    Alert.alert(
      'Delete Todo',
      `Are you sure you want to delete ${todo.title}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            changeScreen(null);
            await fetch(
              `https://rn-todo-app-bd3c7.firebaseio.com/todos/${id}.json`,
              {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
              }
            );
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = async (id: number, title: string) => {
    clearError();

    try {
      await fetch(`https://rn-todo-app-bd3c7.firebaseio.com/todos/${id}.json`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });

      dispatch({ type: UPDATE_TODO, id, title });
    } catch (error) {
      showError(`Error ${error}`);
    }
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const showError = (error: string) =>
    dispatch({ type: SHOW_ERROR, error: error });

  const clearError = () => dispatch({ type: CLEAR_ERROR });

  const fetchTodo = async () => {
    showLoader();
    clearError();

    try {
      const response = await fetch(
        'https://rn-todo-app-bd3c7.firebaseio.com/todos.json',
        {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
        }
      );
      const data = await response.json();
      const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));

      dispatch({ type: FETCH_TODOS, todos });
    } catch (error) {
      showError(`Some error - ${error}`);
    } finally {
      hideLoader();
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
