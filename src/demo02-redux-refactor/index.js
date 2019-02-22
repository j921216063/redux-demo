import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers/counter';
import { increment, decrement } from './actions';

const store = createStore(reducer);

// 1. 測試 store api

console.log('Current state', store.getState());

// subscribe 綁定函數 listener store state 發生改變會執行
// subscribe 函數執行後回傳一個撤銷綁定函數 
const listener = () => console.log('State updated', store.getState());
const unsubscribe = store.subscribe(listener);

store.dispatch({
  type: 'INCREMENT'
})

// 解除綁定
unsubscribe();

store.dispatch(increment())

// 2. 使用 reudx 來綁定 react component

// Step3 dispatch 由 action creator 產生的 action
const render = () => {
  ReactDOM.render(
    <App
      onIncrement={() => store.dispatch(increment())}
      onDecrement={() => store.dispatch(decrement())}
      value={store.getState()}
    />, document.getElementById('root'));
}

store.subscribe(render);

render();