import { CONSOLE_REDUX } from '../reducers/consoleRed';
export const addChallange = () => {
  return {
    type: 'ADD_CHALLANGE'
  };
};

export const consoleRed = () => {
  return { type: CONSOLE_REDUX };
};
