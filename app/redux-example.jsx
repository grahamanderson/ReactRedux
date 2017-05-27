var redux = require('redux')
console.log('Starting todo redux example')


// Name reducer and action generator
// ----------------------------
const nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME' :
      return action.name
    default:
      return state
  }
}

const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// Hobby reducer and action generator
// ----------------------------
let nextHobbyId = 1
const hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY' :
      return [
          ...state,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
      ]
      case 'REMOVE_HOBBY':
        return state.filter((hobby)=>hobby.id !== action.id)
    default:
      return state
  }
}

const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}



// Movie reducer and action generator
// ----------------------------
let nextMovieId = 1
const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE' :
      return [
          ...state,
          {
            id: nextMovieId++,
            hobby: action.movie
          }
      ]
      case 'REMOVE_MOVIE':
        return state.filter((movie)=>movie.id !== action.id)
    default:
      return state
  }
}

const addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
}

const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}


// Combining Reducers
//------------------------------
const reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f =>f
))

// Subscribe to changes
const subscribe = store.subscribe(() => {
  var state = store.getState()

  console.log('Name is', state.name)
  document.getElementById('app').innerHTML = state.name

  console.log('New state', store.getState())
})

var  currentState = store.getState()
console.log('curentState', currentState)


// Dispatches
// -----------------------------------

store.dispatch(changeName('Andrew'))

store.dispatch(addHobby('Running'))

store.dispatch(addHobby('Walking'))

store.dispatch(removeHobby(2))

store.dispatch(addMovie('tales of hoffman', 'opera'))

store.dispatch(changeName('Emily'))

store.dispatch(removeMovie(1))

store.dispatch(addMovie('asteroids', 'action'))
