import { post } from '@/utils/request'
import api from '@/services/api'
import { PRACTIVE_CHANGE } from '@/constants/actionTypes'

export function changeObj(options) {
  return {type: 'PRACTIVE_CHANGE', payload: options}
}

export function changeData(options) {
  return {
    type: 'PRACTIVE_CHANGE_DATA', 
    payload: post(api.listWithPage,options)
  }
}

export function loginData(options) {
  return {
    type: 'PRACTIVE_LOGIN_DATA', 
    payload: post(api.login,options)
  }
}

export function listData(options) {
  return {
    type: 'PRACTIVE_LIST_DATA', 
    payload: post(api.sampleList,options)
  }
}