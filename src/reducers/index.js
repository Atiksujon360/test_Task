/**
 * Entry point for the reducers that will be used in the component.
 */
import {combineReducers} from 'redux';
import getPost from './getPost';
import getComments from './getComments';

/**
 * Method contains combineReducer for combining reducers used in the components.
 * @type {Reducer<S>}
 */
const AppReducer = combineReducers({
  getPost,
  getComments
});

export default AppReducer;
