import React, { Component } from "react";
import { createStore, bindActionCreators } from "redux";
import reducer from './reducers/index'
import { clickAction } from "./actions/counter2Action";
import Counter from "./components/Counter"
import CodeDojo from "./components/CodeDojo"
/* import * as CounterActions from './actions/counterActions'; */

const initialState = { count : 0, counter: 0}

const store = createStore(
  reducer,/*  initialState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function dispatchBtnAction(e) {
  const id = e.target.id;
  switch (id){
    case "mybutton":
      store.dispatch(clickAction())
      break
    case "mybutton2":
      store.dispatch(clickAction(10))
      break
    case "mybutton3":
      store.dispatch(clickAction(5,2))
      break
      default:
        break
  }
  
}
store.subscribe(function(){
  let text = store.getState()
console.log(text);
})

/* function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
} */

function App() {
  return (
    <div className="App">
      <h1 id="count">count</h1>
      <button id="mybutton" onClick={dispatchBtnAction} >Add by 1</button>
      <button id="mybutton2" onClick={dispatchBtnAction} >Add by 10</button>
      <button id="mybutton3" onClick={dispatchBtnAction} >Delay 2 second and add by 5</button>
      <Counter store={store}/>
      <CodeDojo store={store}/>
    </div>
  );
}

/* let button = document.getElementById('mybutton');
let button2 = document.getElementById('mybutton2');
let button3 = document.getElementById('mybutton3');
let text = document.getElementById('count');

button.addEventListener('click', () => {
  store.dispatch(clickAction());
});
button2.addEventListener('click',() => {
  store.dispatch(clickAction(10));
});
button3.addEventListener('click',() => {
  store.dispatch(clickAction(5, 2));
})
 */
export default App;
