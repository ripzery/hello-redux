import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import Counter from './containers/Counter'
import './style.css'

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <Counter label="I'm a counter"/>
  </Provider>,
  document.getElementById('react-root')
);
