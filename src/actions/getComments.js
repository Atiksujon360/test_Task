import {fetchErrorMessage} from '../utility/helper';
import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAIL,
} from '../utility/actionTypes';
import {GET_COMMENT} from '../utility/apis';
import {httpGet} from '../utility/http';

export function getComments(postId) {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({
        type: GET_COMMENT_REQUEST,
      });
      httpGet(`${GET_COMMENT}`.replace('postId',postId ))
        .then(response => {
          dispatch({
            getCommentPayload: response,
            type: GET_COMMENT_SUCCESS,
          });
          resolve(response);
        })
        .catch(error => {
          const message = fetchErrorMessage(error);
          dispatch({
            error: message,
            type: GET_COMMENT_FAIL,
          });
          reject(message);
        });
    });
}
