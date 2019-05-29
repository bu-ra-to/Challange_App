import history from '../../helpers/history';
export const CREATE_CHALLANGE_NAME = 'CREATE_CHALLANGE_NAME';
export const createChallangeName = vals => async dispatch => {
  console.log('Hello');
  dispatch({
    type: CREATE_CHALLANGE_NAME,
    payload: vals
  });
  history.push('/');
};
