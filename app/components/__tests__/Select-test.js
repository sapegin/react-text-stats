// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../Select');
let Select = require('../Select');

describe('components/Select', () => {

	const defaultProps = {
		items: {
			1: 'one',
			2: 'two',
			3: 'three'
		},
		value: '1'
	};

	let render = (props=defaultProps) => {
		return TestUtils.renderIntoDocument(
			<Select {...props}/>
		);
	};

	it('should be component of type Select', () => {
		let element = render();
		let isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(element, Select);
		expect(isCompositeComponentOfType).toBe(true);
	});

	it('should have <option> tag for every item', () => {
		let element = render();
		let numberOfOptions = element.getDOMNode().querySelectorAll('select option').length;
		expect(numberOfOptions).toEqual(Object.keys(defaultProps.items).length);
	});

	it('getValue() should return value of selected option', () => {
		let element = render();
		let value = element.getValue();
		expect(value).toEqual(defaultProps.value);
	});

});
