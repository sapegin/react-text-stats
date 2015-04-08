// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../react-extras');
let RestAttrsMixin = require('../react-extras').RestAttrsMixin;

describe('utils/react-extras', () => {

	it('RestAttrsMixin should exist', () => {
		expect(RestAttrsMixin.restAttrs).toBeDefined();
	});

	it('RestAttrsMixin should returns all props except listed in propTypes', () => {
		let obj = {
			constructor: {
				propTypes: {
					items: {},
					value: {},
					onChange: {}
				}
			},
			props: {
				items: [1, 2, 3],
				value: 2,
				id: 'wow',
				tabindex: 3
			}
		};
		let attrs = RestAttrsMixin.restAttrs.call(obj);
		expect(attrs).toEqual({ id: 'wow', tabindex: 3 });
	});

});
