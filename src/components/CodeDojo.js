import React, { Component } from 'react';

const incrementAction = { type: 'INCREMENT', amount: 1 }
const decrementAction = { type: 'DECREMENT', amount: 1 }
const resetAction = { type: 'RESET' }

class CodeDojo extends Component {
    constructor(props) {
        super(props);
        /* this.state = { count: 0 }; */
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            console.log(this.props)
            this.forceUpdate();
        });

    }

    increment() {
        this.props.store.dispatch(incrementAction);
        let count = this.props.store.getState().codedojo.count;
    console.log('increment dojo', count)
    }

    decrement() {
        this.props.store.dispatch(decrementAction);
    }

    reset() {
        this.props.store.dispatch(resetAction);
    }

    render() {

        return (
            <div className='counter'>
                <span className='count'>{this.props.store.getState().codedojo.count}</span>
                <div className='buttons'>
                    <button className='decrement' onClick={this.decrement}>-</button>
                    <button className='reset' onClick={this.reset}>R</button>
                    <button className='increment' onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}


export default CodeDojo;