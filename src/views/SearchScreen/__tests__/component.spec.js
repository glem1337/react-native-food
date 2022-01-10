import React from 'react';
import renderer from 'react-test-renderer';

import SearchScreen from '../component'

describe('SearchScreen component tests', () => {
	const component = renderer.create(<SearchScreen />).toJSON();

	it('matches snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('test', () => {
		expect(1 + 1).toBe(2)
	});
});
