import React, { Fragment } from 'react'
import {
  Switch,
  Route,
  Router,
} from 'react-router-dom'

import {
  createGenerateClassName,
  StylesProvider,
} from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
})

const App = ({ history, onSignIn }) => (
  <Fragment>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path='/auth/signin'>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  </Fragment>
)

export default App
