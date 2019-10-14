import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

let wrapper;

afterEach(rtl.cleanup);

beforeEach(() => {
	wrapper = rtl.render(<Controls
		locked={false}
		closed={false}
	/>);
});

describe('Controls', () => {
	it('defaults gate to be open and unlocked', () => {
		expect(wrapper.queryByText(/Lock Gate/i)).toBeInTheDocument();
		expect(wrapper.queryByText(/Close Gate/i)).toBeInTheDocument();
	});
	it('provides buttons to toggle the closed and locked states', () => {
		let toggleLockedBtn = wrapper.getByTestId('toggleLocked');
		let toggleClosedBtn = wrapper.getByTestId('toggleClosed');
		expect(toggleLockedBtn).toBeInTheDocument();
		expect(toggleClosedBtn).toBeInTheDocument();
	});
	it('the closed toggle button is disabled if the gate is locked', () => {
		rtl.cleanup();
		wrapper = rtl.render(<Controls 
			locked={true}
			closed={true}
		/>);
		let toggleClosedBtn = wrapper.getByTestId('toggleClosed');
		expect(toggleClosedBtn).toBeDisabled();
	});
	it('the locked toggle button is disabled if the gate is open', () => {
		let toggleLockedBtn = wrapper.getByTestId('toggleLocked');
		expect(toggleLockedBtn).toBeDisabled();
	});
});