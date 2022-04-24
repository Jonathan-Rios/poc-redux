import { createStore, applyMiddleware } from 'redux';
import {  composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { ICartState } from './modules/cart/types';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware(...middlewares) ) //o mesmo que applyMiddleware([sagaMiddleware, outroMiddle1, outroMiddle2])
);

sagaMiddleware.run(rootSaga);

export default store;
