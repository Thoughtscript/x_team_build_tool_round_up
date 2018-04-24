'use strict'

import { dummy, DUMMY_ACTION } from './Actions'

export const DummyStorage = (state = {}, action) => {
  switch (action['cmd']) {
    case DUMMY_ACTION:
      state[action['key']] = action['value']
      return state
    default:
      return state
  }
}