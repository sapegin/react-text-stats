// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../FontSelect');
jest.dontMock('../Select');
let FontSelect = require('../FontSelect');

describe('components/FontSelect', () => {

	let render = () => {
		return TestUtils.renderIntoDocument(
			<FontSelect/>
		);
	};

	it('should be component of type FontSelect', () => {
		let element = render();
		let isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(element, FontSelect);
		expect(isCompositeComponentOfType).toBe(true);
	});

	it('getValue() should return default value', () => {
		let element = render();
		let value = element.getValue();
		expect(value).toEqual('Courier New Regular');
	});

});
