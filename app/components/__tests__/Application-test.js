// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../Application');
let Application = require('../Application');

describe('components/Application', () => {

	let render = () => {
		return TestUtils.renderIntoDocument(
			<Application/>
		);
	};

	it('should be component of type Application', () => {
		let element = render();
		let isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(element, Application);
		expect(isCompositeComponentOfType).toBe(true);
	});

});
