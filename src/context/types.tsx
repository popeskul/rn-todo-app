import { ITodo } from '../interfaces';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';

type actionTodoTypes = 'ADD_TODO' | 'UPDATE_TODO' | 'REMOVE_TODO';

export interface ITodoState {
  todos: ITodo[];
}

export interface ITodoAction {
  type: actionTodoTypes;
  id?: number | string;
  title?: string;
  payload?: any;
}

export interface IScreenState {
  id: number;
}

export interface IScreenAction {
  type: 'CHANGE_SCREEN';
  payload: number | null;
}
