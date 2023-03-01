import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Product from './views/product'
import Orders from './views/orders'
import Payment from './views/payment'
import Register from './views/register'
import Account from './views/account'
import Login from './views/login'
import Search from './views/search'
import Home from './views/home'
import AccountDetails from './views/account-details'
import About from './views/about'
import Cart from './views/cart'
import Team from './views/team'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Product} exact path="/product" />
        <Route component={Orders} exact path="/orders" />
        <Route component={Payment} exact path="/payment" />
        <Route component={Register} exact path="/register" />
        <Route component={Account} exact path="/account" />
        <Route component={Login} exact path="/login" />
        <Route component={Search} exact path="/search" />
        <Route component={Home} exact path="/" />
        <Route component={AccountDetails} exact path="/account-details" />
        <Route component={About} exact path="/about" />
        <Route component={Cart} exact path="/cart" />
        <Route component={Team} exact path="/team" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
