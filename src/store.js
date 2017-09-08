import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import sortBy from './ducks/sort.duck'
import filter from './ducks/filter.duck'
import employmentHistory_byId from './ducks/employment-history.duck'

const reducer = combineReducers({
  sortBy,
  filter,
  employmentHistory_byId
})

export default function configureStore(initialState) {
  return createStore(reducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));
}

const stateDefault = {
  "sortBy": "name",
  "filter": "",
  "employmentHistory_byId": {}  
}

export const store = configureStore(stateDefault)