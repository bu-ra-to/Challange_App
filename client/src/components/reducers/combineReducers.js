import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createChallangeName from '../reducers/reducers';

export default combineReducers({
  createChallangeName,
  form: formReducer
});
