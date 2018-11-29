import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from "react-router-dom"

import Navbar from './components/Navbar'
import  ClientList from './pages/clientList/ClientList'
import  CreateClient from './pages/createClient/CreateClient'
import  UpdateClient from './pages/updateClient/UpdateClient'

class Root extends Component {
  render = () => {
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from='/' to='/clientes' />
          <Route path='/clientes' component={ClientList} />
          <Route path='/create' component={CreateClient} />
          <Route path='/update' component={UpdateClient} />
        </Switch>
      </div>
    )
  }
}


export default Root