import React, { Component, Fragment } from 'react'

export default class Two extends Component {
  state = {
    username: 'qq',
    name: ''
  }

  fn = (event) => {
    // this.setState({
    //   username: event.target.value
    // })
    let { value } = event.target;
    this.setState(old => {
      return {
        username: value
      }
    })
  }

  fn1 = (event) => {
    let { value } = event.target;
    this.setState(old => {
      return {
        name: value
      }
    })
  }

  fn2 = (event) => {
    let { value } = this.val;
    console.log(value)
  }


  render() {
    const { username, name } = this.state;
    return (
      <div>
        <input type="text" value={username} onChange={this.fn} />
        <select value={name} onChange={this.fn1}>
          <option value="小小">小小</option>
          <option value="小二">小二</option>
        </select>
        <input type="text" defaultValue="oo" ref={v => {
          this.val=v
        }} />
        <button onClick={this.fn2}>点击</button>
        <Fragment>
          <h1>小小</h1>
          <h1>小二</h1>
        </Fragment>
      </div>
    )
  }
}
