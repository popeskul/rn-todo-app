import { createContext } from 'react';

export interface IScreenContext {
  changeScreen: (id: number | null) => void;
  todoId: number | null;
}

// <Partial> allows to create the context without default values
export const ScreenContext = createContext<IScreenContext>(null);
