'use strict'

/**
 *  Router.
 */

import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import HelloWorld from './HelloWorld'

export default () =>
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={'/'} component={HelloWorld}/>
      </Switch>
    </div>
  </BrowserRouter>