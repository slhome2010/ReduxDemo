import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/ActionTypes';

export default function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    console.log(state, action)
    return state + 1;
  case DECREMENT_COUNTER:
    return state - 1;
  default:
    return state;
  }
}
