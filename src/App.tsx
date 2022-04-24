import React from 'react';
import GlobalStyle from './styles/global';

import { Provider } from 'react-redux';

import  store from './store';

import Catalog from './components/Catalog'
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
