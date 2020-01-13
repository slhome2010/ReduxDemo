import * as types from './ActionTypes';

let t;

export function incrementAction() {
  console.log({type: types.INCREMENT_COUNTER})
  return {
    type: types.INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: types.DECREMENT_COUNTER
  };
}

export function autoIncrement(delay = 10) {
  return dispatch => {
    if (t) {
      clearInterval(t);
      t = undefined;
      return;
    }
    t = setInterval(() => {
      dispatch(incrementAction());
    }, delay);
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementAction());
    }, delay);
  };
}
