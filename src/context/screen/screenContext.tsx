import { createContext } from 'react';

export interface IScreenContext {
  changeScreen: (id: number | null) => void;
  todoId: number | null;
}

export const ScreenContext = createContext<IScreenContext>(null);
