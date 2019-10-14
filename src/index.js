import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as redux from './redux/renderWithRedux';

import './index.css';

import Dashboard from './dashboard/Dashboard';

ReactDOM.render(
	<Provider store={createStore(combineReducers({
		gate: redux.reducer
	}))}>
		<Dashboard />
	</Provider>,
	document.getElementById('root')
);
