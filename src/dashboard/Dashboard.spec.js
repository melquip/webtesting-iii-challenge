import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import * as redux from '../redux/renderWithRedux';

let wrapper;

afterEach(rtl.cleanup);
beforeEach(() => {
	wrapper = redux.renderWithRedux(<Dashboard />);
});

describe('Dashboard', () => {
	it('shows the controls and display', () => {
		expect(wrapper.queryByText(/Close Gate/i)).toBeInTheDocument();
		expect(wrapper.queryByText(/Open/i)).toBeInTheDocument();
		expect(wrapper.queryByText(/Lock Gate/i)).toBeInTheDocument();
		expect(wrapper.queryByText(/Unlocked/i)).toBeInTheDocument();
	});
	it('cannot be closed or opened if it is locked', () => {
		let toggleLockedBtn = wrapper.getByTestId('toggleLocked');
		let toggleClosedBtn = wrapper.getByTestId('toggleClosed');
		rtl.fireEvent.click(toggleClosedBtn);
		rtl.fireEvent.click(toggleLockedBtn);
		wrapper.debug();
		expect(toggleLockedBtn).toBeEnabled();
		expect(toggleClosedBtn).toBeDisabled();
	});
	it('buttons change text on click', () => {
		let toggleLockedBtn = wrapper.getByTestId('toggleLocked');
		let toggleClosedBtn = wrapper.getByTestId('toggleClosed');
		rtl.fireEvent.click(toggleClosedBtn);
		expect(toggleClosedBtn).toHaveTextContent(/open gate/i);
		rtl.fireEvent.click(toggleLockedBtn);
		expect(toggleLockedBtn).toHaveTextContent(/unlock gate/i);
	});
});