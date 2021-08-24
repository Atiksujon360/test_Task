import {
    GET_COMMENT_REQUEST,
    GET_COMMENT_SUCCESS,
    GET_COMMENT_FAIL,
  } from '../utility/actionTypes';
  
  export default function reducer(
    state = {
      fetching: false,
      commentPayload: null,
    },
    action,
  ) {
    switch (action.type) {
      case GET_COMMENT_REQUEST: {
        return {
          ...state,
          fetching: true,
        };
      }
      case GET_COMMENT_SUCCESS: {
        return {
          ...state,
          fetching: false,
          commentPayload: action.commentPayload,
        };
      }
      case GET_COMMENT_FAIL: {
        return {
          ...state,
          fetching: false,
          error: action.error,
        };
      }
      default: {
        return state;
      }
    }
  }
  