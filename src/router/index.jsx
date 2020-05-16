
import React, { Component } from 'react'
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { App, Home, Login, Detail, Practive } from './assembly'
import User from '@/pages/user'
import PropTypes from 'prop-types'
class Person extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  }
  render () {
    const { name } = this.props
    return (
      <h1>子组件----{name}</h1>
    )
  }
}
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Person name='x' />
        <User />
        <h1><NavLink to="/" exact activeClassName="ab">app</NavLink></h1>
        {/*<h1><NavLink to="/home?name=xx&age=12">home</NavLink></h1>*/}
        <h1><NavLink to="/home/11" exact activeClassName="ab">home-1</NavLink></h1>
        <h1><NavLink to="/detail" exact activeClassName="ab">detail</NavLink></h1>
        <h1><NavLink to="/home" exact activeClassName="ab">home-3</NavLink></h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/practive" component={Practive} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}
