import { DECREMENT, INCREMENT } from '../constants';

// Step2 定義 action creator (回傳一個 action 物件)
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
