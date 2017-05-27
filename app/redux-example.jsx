// var redux = require('redux')
import * as redux from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios'
import * as actions from './actions/index'

const store = require('./store/configureStore').configure()
// import store from './store/configureStore'

console.log('Starting todo redux example')

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }
});

var  currentState = store.getState()
console.log('curentState', currentState)

store.dispatch(actions.fetchLocation())
store.dispatch(actions.changeName('Andrew'))
store.dispatch(actions.addHobby('Running'))
store.dispatch(actions.addHobby('Walking'))
store.dispatch(actions.removeHobby(2))
store.dispatch(actions.addMovie('tales of hoffman', 'opera'))
store.dispatch(actions.changeName('Emily'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.addMovie('asteroids', 'action'))
