import { combineReducers } from 'redux'
import counter2 from './counter2'
import counter from './counter'
import codedojo from './codedojo'
import friendlist from './friendlist'

export default combineReducers({
  counter2,
  counter,
  codedojo,
  friendlist
})
