
export default function codedojo(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state, action)
            return { count: state.count + action.amount };
        case 'DECREMENT':
            return { count: state.count - action.amount };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}