import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  ITodoState,
  ITodoAction,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  CLEAR_ERROR,
  FETCH_TODO,
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
  [UPDATE_TODO]: (state: ITodoState, { id, title }: any) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }),
  }),
  [SHOW_LOADER]: (state: { loading: ITodoState }) => ({
    ...state,
    loading: true,
  }),
  [HIDE_LOADER]: (state: { loading: ITodoState }) => ({
    ...state,
    loading: false,
  }),
  [SHOW_ERROR]: (state: ITodoState, { error }: ITodoState) => ({
    ...state,
    error,
  }),
  [CLEAR_ERROR]: (state: { error: ITodoState }) => ({ ...state, error: null }),
  [FETCH_TODO]: (state: ITodoState, todo: ITodoState) => ({
    ...state,
    todo,
  }),
  DEFAULT: (state: ITodoState) => state,
};

export const todoReducer = (state: ITodoState, action: ITodoAction) => {
  const handler: Function = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
