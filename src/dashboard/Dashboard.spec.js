// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

let wrapper;

afterEach(rtl.cleanup);
beforeEach(() => {
	wrapper = rtl.render(<Dashboard />);
});

describe('Dashboard', () => {
	it('works', () => {

	});
});