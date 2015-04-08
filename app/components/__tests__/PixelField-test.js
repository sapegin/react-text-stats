// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../PixelField');
jest.dontMock('../FieldWithUnit');
let PixelField = require('../PixelField');

describe('components/PixelField', () => {

	const defaultProps = {
		id: 'pony',
		value: '20'
	};

	let render = (props=defaultProps) => {
		return TestUtils.renderIntoDocument(
			<PixelField {...props}/>
		);
	};

	it('should be component of type PixelField', () => {
		let element = render();
		let isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(element, PixelField);
		expect(isCompositeComponentOfType).toBe(true);
	});

	it('getValue() should return default value', () => {
		let element = render();
		let value = element.getValue();
		expect(value).toEqual(defaultProps.value);
	});

});
