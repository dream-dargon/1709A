import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { home, detail, practive } from '@/reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 创建 store createStore(reduce)
const store = createStore(
  combineReducers({
    home,
    detail,
    practive,
  }),
   composeEnhancers(applyMiddleware(promise, thunk))
);

// document.body.addEventListener('click', () => {
//   store.dispatch(action)
//   console.log(store.getState(), 333)
// })

// console.log(store,111)
export { store }