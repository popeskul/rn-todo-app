import React, { useReducer } from 'react';
import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';
import { CHANGE_SCREEN } from '../types';

interface IProps {
  children: React.ReactNode;
}

export const ScreenState: React.FC<IProps> = ({ children }) => {
  // null - it's default screen
  const [state, dispatch] = useReducer(screenReducer, null);

  const changeScreen = (id: number | null) =>
    dispatch({ type: CHANGE_SCREEN, payload: id });

  return (
    <ScreenContext.Provider
      value={{
        changeScreen,
        todoId: state,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
