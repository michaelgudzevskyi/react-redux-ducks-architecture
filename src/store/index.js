import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';

import { reducers } from './ducks';
import history from '~/routes/history';

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = [thunk, routerMiddleware(history)];
const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
