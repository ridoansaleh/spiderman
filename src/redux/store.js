import { createStore, applyMiddleware, compose } from 'redux';
import todosReducer from './todosReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(todosReducer, enhancer);
