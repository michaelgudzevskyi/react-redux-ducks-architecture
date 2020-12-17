import { combineReducers } from 'redux';

import authenticateReducer from './authenticate';

export const reducers = combineReducers({
  authenticateReducer,
});
