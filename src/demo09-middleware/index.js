import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

// Step1 新增一個 middleware
const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}
// ES5 寫法
// const logger = function (store) {
//   return function (next) {
//     return function (action) {
//       console.log('dispatching', action);
//       let result = next(action);
//       console.log('next state', store.getState());
//       return result;
//     }
//   }
// }

// Step2 使用 applyMiddleware 加入 logger
const store = createStore(reducer, {}, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);