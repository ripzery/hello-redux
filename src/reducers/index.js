/**
 * Created by ripzery on 3/1/17.
 */
import {combineReducers} from 'redux'
import counterReducer from './counter'

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer