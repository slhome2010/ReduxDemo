import * as types from './ActionTypes';

export function clickAction(count = 1, delay = 0) {
    return{
        type: types.CLICKEVENT,
        count,
        delay
    };
}