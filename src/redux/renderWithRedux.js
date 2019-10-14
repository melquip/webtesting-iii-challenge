import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

export const renderWithRedux = (
	ui, { initialState, store = createStore(combineReducers({ gate: reducer }), initialState) } = {}
) => {
	return {
		...render(<Provider store={store}>{ui}</Provider>),
	}
}

// actions
export const TOGGLE_LOCKED = 'TOGGLE_LOCKED';
export const TOGGLE_CLOSED = 'TOGGLE_CLOSED';
// reducer
export const initialState = {
	locked: false,
	closed: false,
}

export function reducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_LOCKED:
			return {
				...state,
				locked: !state.locked
			}
		case TOGGLE_CLOSED:
			return {
				...state,
				closed: !state.closed
			}
		default:
			return state
	}
}