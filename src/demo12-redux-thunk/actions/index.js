import { DECREMENT, INCREMENT } from '../constants';

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

// Step2 新增一個函數的 action 
export const asyncIncrement = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increment());
  }, 2000);
}