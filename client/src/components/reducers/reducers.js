import { CREATE_CHALLANGE_NAME } from '../actions/actions';
export const CONSOLE_REDUX = 'CONSOLE_REDUX';

const INITIAL_STATE = {
  challange: '',
  repsAmountTotal: null,
  repsInOneSet: null
};

export default (state = INITIAL_STATE.challange, action) => {
  switch (action.type) {
    case CREATE_CHALLANGE_NAME:
      return {
        ...state,
        challange: action.payload.title,
        repsAmountTotal: action.payload.description
      };
    default:
      return state;
  }
};
