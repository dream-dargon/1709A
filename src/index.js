import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import axios from 'axios'
import Router from '@/router'
// import { store } from './store'
import { store } from './stores'//练习使用
import './index.less';

const url = 'https://blogs.zdldove.top/Home/Apis/listWithPage';

async function fn () {
  const res0 = await axios.post(url)
  console.log(1);
  const res1 = await axios.post(url);
  console.log(res0,res1)
}
fn ()

const fn0 = () => {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
const fn1 = () => {
  return new Promise((resolve, reject) => {
    resolve('success')
  })
}
async function fn3 () {
  const res0 = await fn0().catch(err => {})
  const res1 = await fn1();
  return [res0, res1]
}
fn3 ()
  .then(res => console.log(res, 'suces'))
  .catch(err => console.log(err, 'error'))

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
