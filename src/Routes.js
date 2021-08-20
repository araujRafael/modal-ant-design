import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import { ModalContextProvider } from './context/Modal.context'

function Routes() {
  return (
    <Router>
      <ModalContextProvider>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </ModalContextProvider>
    </Router>
  )
}

export default Routes
