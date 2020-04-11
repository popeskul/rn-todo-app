import { CHANGE_SCREEN, IScreenState, IScreenAction } from '../types';

const handlers = {
  [CHANGE_SCREEN]: (state: number, payload: number | null) => payload,
  DEFAULT: (state: IScreenState) => state,
};

export const screenReducer = (state: number, action: IScreenAction) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.payload);
};
