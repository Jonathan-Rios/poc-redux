/*
  Notes de mudança do 'redux' para o '@reduxjs/toolkit'.
  Não é necessário passar mais o applyMiddleware
  import { createStore, applyMiddleware } from 'redux';

  Agora como toolkit já é adicionado o devtools.
  import {  composeWithDevTools } from 'redux-devtools-extension';
*/
import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import { ICartState } from './modules/cart/types';

import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

/* Notes de mudança do 'redux' para o '@reduxjs/toolkit'.
Método antigo: composeWithDevTools( applyMiddleware(...middlewares) ) //onde se usava o 'redux-devtools-extension'
Método novo: middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares) */

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares), // "...middlewares" é igual: [sagaMiddleware, outroMiddle1, outroMiddle2])
});

sagaMiddleware.run(rootSaga);

export default store;
