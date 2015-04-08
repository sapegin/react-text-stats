// Author: Artem Sapegin http://sapegin.me, 2015

jest.dontMock('../newid');
let newId = require('../newid');

describe('utils/newId', () => {

	it('should exist', () => {
		expect(newId).toBeDefined();
	});

	it('should use default prefix', () => {
		let id = newId();
		expect(id).toMatch(/^id\d+$/);
	});

	it('should be able to change prefix', () => {
		let id = newId('wow');
		expect(id).toMatch(/^wow\d+$/);
	});

	it('should generate successive ids', () => {
		let id1 = Number(newId(''));
		let id2 = Number(newId(''));
		expect(id2).toEqual(id1 + 1);
	});

});
