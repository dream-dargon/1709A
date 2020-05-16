import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { listData, loginData } from '@/actions/practive'
import timg from '@/assets/timg.jpg'

const moment = require('moment')

const setTimes = str => {
  return () => {
    str -= 1000
    const time = moment(str)
    return {
      hour: time.format('H'),
      minute: time.format('m'),
      seconds: time.format('s'),
    }
  }
}

const times = moment().hour(17).minute(30).seconds(30).valueOf();
const fn = setTimes(times);
const id = setInterval(() => {
  console.log(fn())
},1000);

export default @withRouter 

@connect(state => {
  return {}
},{
  listData, 
  loginData
})



class User extends Component {
  clickFn = () => {
    console.log(this.props)
  }

  onClick = () => {
    this.props.loginData({
      userName: 'wwwwwwww',
      passWord: 'wwwwwwww',
    })
  }

  onClick2 = () => {
    this.props.listData({
    })
  }

  render() {
    return (
      <div onClick={this.clickFn}>
        我是user
        <img src={timg} title="哪吒" alt="资源错误" />
        <Button onClick={this.onClick}>登录</Button>
        <Button onClick={this.onClick2}>获取数据</Button>
      </div>
    )
  }
}
