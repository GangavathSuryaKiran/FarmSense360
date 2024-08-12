import axios from 'axios';
import { ADD_QUESTION, GET_INFOS, ADD_INFO, INFOS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const addQuestion = (questionData) => (dispatch, getState) => {
  axios
    .post('/api/questions', questionData, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_QUESTION,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getInfos = () => (dispatch) => {
  dispatch(setItemsLoading);
  axios
    .get('/api/infos')
    .then((res) =>
      dispatch({
        type: GET_INFOS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addInfo = (info) => (dispatch, getState) => {
  axios
    .post('/api/infos', info, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_INFO,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// export const deleteItem = (id) => (dispatch, getState) => {
//   axios.delete(`/api/items/${id}`, tokenConfig(getState))
//    .then(res => dispatch({
//       type: DELETE_ITEM,
//       payload: id
//    })
//   )
//   .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// };

export const setItemsLoading = () => {
  return {
    type: INFOS_LOADING,
  };
};
