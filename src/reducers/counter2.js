import * as types from '../actions/ActionTypes';

let initialState = {
    clickCount: 0
  };
  
  export default function clickReducer (state = 0, action) {
    switch (action.type) {
        case types.CLICKEVENT:
            state += action.count;
            return state ;
        default:
            return state;
    }
  }