import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import Home from './pages/Home'

const history = createHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="react-app">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default App
