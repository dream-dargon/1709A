import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import axios from 'axios'
import One from '@/One'
import Two from '@/Two'
import './style.less'
@Form.create({
  mapPropsToFields (props) {
    return {
      username: Form.createFormField({
        value:props.username
      }),
      password: Form.createFormField({
        value:props.password
      })
    }
  }
})
class NormalLoginForm extends React.Component {
  state = {
    name:''
  }

  componentDidMount () {
    this.setState( old => ({
      name:this.props.username
    }))
  }

  componentWillReceiveProps (nextProps) {
    this.setState( old => ({
      name:nextProps.username
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render() {
    // 双向绑定
    const { getFieldDecorator } = this.props.form;
    const { name } = this.state;
    console.log('render')
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {required: true, message: '请写用户名!'}
            ],
          })(
            <Input prefix={<Icon type="user" />} placeholder="Username" />,
          )}
        </Form.Item>

        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {required: true, message: '请填写密码!'},
              {max: 5, message: '长度不大于5!'}
            ],
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          {name}
        </Form.Item>
      </Form>
    )
  }

  shouldComponentUpdate (nextProps,nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate (nextProps,nextState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props);
    console.log('constructor')
    this.state = {
      username: '2',
      password: '2',
      isBool: false,
    }
  }
  
  

  onClick = () => {
    axios.get('/api/Home/Apis/listWithPage').then(res => {
      console.log(res.data)
      this.setState({
        username:1,
        password:1
      })
    })
  }

  fn = () => {
    this.props.history.replace('/')
  }

  fn1 = () => {
    this.props.history.go(-1);
  }

  render () {
    console.log('render')
    const { username, password, isBool } = this.state
    return (
      <div>
        <NormalLoginForm  username={username} password={password} />
        <Button onClick={this.onClick}>点击</Button>
        <div>{ isBool ? <i>小白</i> : <b>小花</b> }</div>
        <One />
        <Two />
        <button onClick={this.fn}>跳转</button>
        <button onClick={this.fn1}>返回</button>
      </div>
    )
  }

  componentDidMount () {
    console.log('componentDidMount')
  }


}