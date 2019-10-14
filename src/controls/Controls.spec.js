// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

let wrapper;

afterEach(rtl.cleanup);
beforeEach(() => {
	wrapper = rtl.render(<Controls />);
});

describe('Controls', () => {
	it('works', () => {

	});
});