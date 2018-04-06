import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
// import { persistStore, autoRehydrate } from 'redux-persist'
// import { AsyncStorage } from 'react-native'
import { createLogger } from 'redux-logger'
// import devTools from 'remote-redux-devtools'
import * as reducers from './reducers'

const logger = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combineReducers(reducers),
  {},
  // composeEnhancers(autoRehydrate(), applyMiddleware(logger))
  composeEnhancers(applyMiddleware(logger))
)

// persistStore(store, {  storage: AsyncStorage  }, () => {
//   // console.log('restored')
// })

export default store
