import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import { persistStore } from 'redux-persist'

import Root from './Root.jsx'
import reducers from './reducers'

const appHistory = createBrowserHistory({basename: '/'})
const reduxRouterMiddleware = routerMiddleware(appHistory)

const middleware = applyMiddleware(reduxRouterMiddleware, thunk, createLogger())
const store = createStore(reducers,undefined, middleware)

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rehydrated: false
    }
  }

  componentWillMount = () => {
    persistStore(store, {}, () => this.setState({rehydrated: true}))
  }

  render = () => {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <Root />
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
