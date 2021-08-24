import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from '../utility/actionTypes';

export default function reducer(
  state = {
    fetching: false,
    getPostPayload: null,
  },
  action,
) {
  switch (action.type) {
    case GET_POST_REQUEST: {
      return {
        ...state,
        fetching: true,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        fetching: false,
        getPostPayload: action.getPostPayload,
      };
    }
    case GET_POST_FAIL: {
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
