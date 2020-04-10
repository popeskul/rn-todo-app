import React, { useReducer } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { initialState } from './initialState';

export const TodoState = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
