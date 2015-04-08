// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../EditableBox');
let EditableBox = require('../EditableBox');

describe('components/EditableBox', () => {

	const defaultProps = {
		value: 'The quick brown hamster'
	};

	let render = (props=defaultProps) => {
		return TestUtils.renderIntoDocument(
			<EditableBox {...props}/>
		);
	};

	it('should be component of type EditableBox', () => {
		let element = render();
		let isCompositeComponentOfType = TestUtils.isCompositeComponentWithType(element, EditableBox);
		expect(isCompositeComponentOfType).toBe(true);
	});

});
