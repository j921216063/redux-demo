import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

const logger = store => next => action => {
  console.log('logger middleware: dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

// Step1 定義一個 error middleware，用來抓取錯誤
const error = store => next => action => {
  try {
    console.log('error middleware: dispatching', action);
    next(action);
  } catch (e) {
    console.log(e);
  }
}
// Step2 使用 applyMiddleware 加入 error
const store = createStore(reducer, {}, applyMiddleware(logger, error));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);