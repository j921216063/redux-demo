import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers/counter';
import { Provider } from 'react-redux';

const store = createStore(reducer);

// Step1 使用 Provider 包覆 root 組件，並傳入 store 屬性
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);