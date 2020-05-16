import React from 'react'
import Loadable from '@@/Loadable'
const App = Loadable(() => import('@/pages/app'))
const Home = Loadable(() => import('@/pages/home'))
const Detail = Loadable(() => import('@/pages/detail'))
const Practive = Loadable(() => import('@/pages/practive'))
const Login = Loadable(() => <h1>Login</h1>)
export {
    App,
    Home,
    Login,
    Detail,
    Practive,
}