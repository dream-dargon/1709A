import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import qs from 'qs'
import Detail from '@/pages/detail'
import { getName, setAge } from '@/actions/home'
import './style.less'
export default @connect(state => {
  return {home: state.home}
},{
  getName,
  setAge,
})
class Home extends Component {

  constructor (props) {
    super(props);
    //console.log(this.props.match.params,1);
    this.state = {
      data:[
        {'title': 11, cid: 12 },
        {'title': 22, cid: 13 },
      ]
    }
    if(!localStorage.getItem('token')){
      this.props.history.push('/login')
    }
  }

  componentDidMount () {
    this.props.getName();
    this.props.setAge(12);
    const query=qs.parse(
      this.props.location.search,
       { ignoreQueryPrefix: true }
      );
    console.log(query,11)
  }
  
  componentWillReceiveProps (nextProps) {
    //console.log(nextProps.match.params,2)
  }

  fn = () => {
    this.props.history.push('/')
  }

  fn1 = () => {
    this.props.history.go(-1);
  }

  render() {
    const { data } = this.state;
    const { home } = this.props;
    console.log(home)
    return (
      <div className="pages-home">
        {home.age}
        {JSON.stringify(home.data)}
        <div>
          <ul>
            {
              data.map(v => {
                return (
                  <NavLink to={`/home/detail/${v.cid}`} key={v.cid}><li>{v.title}</li></NavLink>
                )
              })
            }
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/home/detail/:id" component={Detail} />
          </Switch>
        </div>
        {/*<button onClick={this.fn}>点击返回首页</button>
        <button onClick={this.fn1}>返回</button>*/}
      </div>
    )
  }
}
