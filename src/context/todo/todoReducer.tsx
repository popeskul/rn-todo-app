import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  ITodoState,
  ITodoAction,
} from '../types';
import { ITodo } from '../../interfaces';

const handlers = {
  [ADD_TODO]: (state: ITodoState, { title }: ITodoAction) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title,
      },
    ],
  }),
  [REMOVE_TODO]: (state: ITodoState, { id }: ITodoAction) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }),
  [UPDATE_TODO]: (state: { todos: ITodo[] }, { id, title }: any) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }),
  }),
  DEFAULT: (state: ITodoState) => state,
};

export const todoReducer = (state: ITodoState, action: ITodoAction) => {
  const handler: Function = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
