import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NxtContext from './context/NxtContext'
import NotFound from './components/NotFound'

class App extends Component {
  state = {darkMode: false}

  toggleMode = () => {
    this.setState(prev => ({darkMode: !prev.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    return (
      <NxtContext.Provider
        value={{
          darkMode,
          toggleMode: this.toggleMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtContext.Provider>
    )
  }
}

export default App
