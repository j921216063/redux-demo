import { INCREMENT, DECREMENT } from '../constants';

const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      // // Step3 定義一個 Error 
      throw new Error('error in INCREMENT');
    case DECREMENT:
      return state - 1;
    default: return state;
  }
}
export default counter;