import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'//可以让action以异步的方式写
import thunk from 'redux-thunk'//action 以函数方式写
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import practive from '@/reducer/practive'

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['practive'],  
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    practive,
  }
))

const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(promise,thunk))
)

export { store }