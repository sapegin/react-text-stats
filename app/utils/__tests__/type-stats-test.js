// Author: Artem Sapegin http://sapegin.me, 2015

// jest.dontMock('../type-stats');
import { calculate, parseFontName } from '../type-stats';

// Fake canvas
const textWidths = {
	'24px Helvetica': {
		'The': 42,
		'The quick': 105,
		'quick brown': 129,
		'quick': 57,
		'brown fox': 105,
		'brown': 66,
		'fox': 33,
	},
	'bold 24px Helvetica': {
		'The': 43,
		'The quick': 113,
		'quick brown': 142,
		'quick': 63,
		'brown fox': 115,
		'brown': 72,
		'fox': 36,
	}
};
let canvasFont;

describe('utils/type-stats', () => {

	let _document;

	beforeEach(() => {
		_document = global.document;
		global.document = {
			createElement() {
				return {
					getContext() {
						let _canvasFont;
						return {
							set font(font) {
								_canvasFont = font;
							},
							measureText(text) {
								return {
									width: textWidths[_canvasFont][text]
								}
							}
						};
					}
				};
			}
		};
	});

	afterEach(() => {
		global.document = _document;
	});

	it('parseFontName() should exist', () => {
		expect(parseFontName).toBeDefined();
	});

	it('parseFontName() should return font-family and font-weight', () => {
		expect(parseFontName('Georgia Regular')).toEqual({fontFamily: 'Georgia', fontWeight: 'normal'});
		expect(parseFontName('Georgia Bold')).toEqual({fontFamily: 'Georgia', fontWeight: 'bold'});
		expect(parseFontName('Times New Roman Regular')).toEqual({fontFamily: 'Times New Roman', fontWeight: 'normal'});
		expect(parseFontName('Times New Roman Bold')).toEqual({fontFamily: 'Times New Roman', fontWeight: 'bold'});
	});

	it('calculate() should exist', () => {
		expect(calculate).toBeDefined();
	});

	it('calculate() should calculate text statistics', () => {
		expect(calculate({
			font: 'Helvetica Regular',
			fontSize: 24,
			maxWidth: 100,
			text: 'The quick brown fox'
		})).toEqual({
			width: 66,
			lines: 4,
			overflow: false
		});
	});

	it('calculate() should calculate text statistics (bold)', () => {
		expect(calculate({
			font: 'Helvetica Bold',
			fontSize: 24,
			maxWidth: 100,
			text: 'The quick brown fox'
		})).toEqual({
			width: 72,
			lines: 4,
			overflow: false
		});
	});

	it('calculate() should set overflow flag', () => {
		expect(calculate({
			font: 'Helvetica Bold',
			fontSize: 24,
			maxWidth: 50,
			text: 'The quick brown fox'
		})).toEqual({
			width: 72,
			lines: 4,
			overflow: true
		});
	});

});
