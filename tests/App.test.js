import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
	it('renders', () => {
		const app = shallow(<App />);

		expect(app).toMatchSnapshot();
	});
});