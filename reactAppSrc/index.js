'use strict'

/**
 *  Parcel Entry.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Router from './Components/Router'
import { DummyStorage } from './Components/DummyStorage'

ReactDOM.render(
  (<Provider store={createStore(DummyStorage)}>
    <Router/>
  </Provider>),
  document.getElementById('react_app_root')
)