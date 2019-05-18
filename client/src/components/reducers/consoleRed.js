export const CONSOLE_REDUX = 'CONSOLE_REDUX';
const INITIAL_STATE = {
  text: 'Helllooo'
};

export const consoleRed = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONSOLE_REDUX:
      return { ...state, text: 'Shalom' };
    default:
      return state;
  }
};
