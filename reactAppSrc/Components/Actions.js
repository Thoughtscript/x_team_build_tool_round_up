/**
 *  Dummy actions.
 */

export const DUMMY_ACTION = 'UNSAFE_SAVE'

export const dummy = (key, value) => { return {cmd: DUMMY_ACTION, key: key, value: value}}