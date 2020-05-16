import { post } from '@/utils/request'
import api from '@/services/api'
export function getName (options) {
  //type 大写  
  return {type: 'HOME_NAME', payload: post(api.listWithPage)}
}

export function setAge (options) {
  return {type: 'HOME_AGE', payload: options}
}