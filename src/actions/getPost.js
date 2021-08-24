import {fetchErrorMessage} from '../utility/helper';
import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from '../utility/actionTypes';
import {GET_POST} from '../utility/apis';
import {httpGet} from '../utility/http';

export function getPost() {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({
        type: GET_POST_REQUEST,
      });
      httpGet(`${GET_POST}`)
        .then(response => {
          dispatch({
            getPostPayload: response,
            type: GET_POST_SUCCESS,
          });
          resolve(response);
        })
        .catch(error => {
          const message = fetchErrorMessage(error);
          dispatch({
            error: message,
            type: GET_POST_FAIL,
          });
          reject(message);
        });
    });
}
