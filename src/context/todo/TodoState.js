import React, { useReducer } from 'react';
import { TodoContext } from './todoContext';
import { reducer } from './todoReducer';

export const TodoState = ({ children }) => {
  const initialState = [{ id: '1', title: 'Some text' }];
  const [state, dispatch] = useReducer(reducer, initialState);

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
