import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as CounterActions from '../actions/counterActions';
import { bindActionCreators } from "redux";

class Counter extends Component {
  constructor(props) {
    super(props);
   
    /* this.state = { counter: 0 }; */
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.autoIncrement = this.autoIncrement.bind(this);

    console.log(this.props);
  }

  /* componentWillMount() {
    
      this.unsubscribe = this.store.subscribe();
   
  }

  componentWillUnmount() {
    
      this.unsubscribe(); // Use if you have other subscribers from other components.
     
    } */
  
    componentDidMount() {
    
      this.props.store.subscribe(() => {
        console.log(this.props)
        this.forceUpdate();
      });
   
  }

increment(){      
  this.props.store.dispatch(CounterActions.incrementAction());
    let counter = this.props.store.getState().counter;
    console.log('increment', counter)
  }

  decrement(){      
    this.props.store.dispatch(CounterActions.decrement());      
  }

incrementAsync(){      
  this.props.store.dispatch(CounterActions.incrementAsync());      
  }

 autoIncrement(){      
  this.props.store.dispatch(CounterActions.autoIncrement());      
  }

  render() {
      
    return (
      <p>
        Clicked: {this.props.store.getState().counter} times
        {' '}
        <button onClick={this.increment}>+</button>
        {' '}
        <button onClick={this.decrement}>-</button>
        {' '}
        <button onClick={this.incrementAsync}>Increment async</button>
        {' '}
        <button onClick={this.autoIncrement}>Auto increment</button>
      </p>
    );
  }
}

/* Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  autoIncrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}; */

export default Counter;
