import { createContext } from 'react';
import { ITodo } from '../../interfaces';

interface ContextProps {
  todos: ITodo[];
  error: object | null;
  loading: boolean;
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
  fetchTodo: () => void;
}

// <Partial> allows to create the context without default values
export const TodoContext = createContext<Partial<ContextProps>>(null);
