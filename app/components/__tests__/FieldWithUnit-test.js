// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../FieldWithUnit');
let FieldWithUnit = require('../FieldWithUnit');

describe('components/FieldWithUnit', () => {

	const defaultProps = {
		id: 'pony',
		value: '20',
		unit: 'px'
	};

	let render = (props=defaultProps) => {
		return TestUtils.renderIntoDocument(
			<FieldWithUnit {...props}/>
		);
	};

	it('should be component of type FieldWithUnit', () => {
		let element = render();
		let isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(element, FieldWithUnit);
		expect(isCompositeComponentOfType).toBe(true);
	});

	it('getValue() should return default value', () => {
		let element = render();
		let value = element.getValue();
		expect(value).toEqual(defaultProps.value);
	});

});
