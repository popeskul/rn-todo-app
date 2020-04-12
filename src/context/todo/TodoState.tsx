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
  CLEAR_ERROR,
} from '../types';
import { ScreenContext } from '../screen/screenContext';
import { Http } from '../../http';

interface Props {
  children: React.ReactElement<any>;
}

export const TodoState: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);

  const addTodo = async (title: string) => {
    clearError();

    try {
      const data = await Http.post(
        'https://rn-todo-app-bd3c7.firebaseio.com/todos.json',
        { title }
      );

      dispatch({ type: ADD_TODO, title, id: data.name });
    } catch (error) {
      showError(error);
    }
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
            clearError();

            try {
              await Http.delete(
                `https://rn-todo-app-bd3c7.firebaseio.com/todos/${id}.json`
              );
              dispatch({ type: REMOVE_TODO, id });
            } catch (error) {
              showError(error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = async (id: number, title: string) => {
    clearError();

    try {
      await Http.patch(
        `https://rn-todo-app-bd3c7.firebaseio.com/todos/${id}.json`,
        { title }
      );

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
      const data = await Http.get(
        'https://rn-todo-app-bd3c7.firebaseio.com/todos.json'
      );
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
