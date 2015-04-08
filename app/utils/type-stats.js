// Author: Artem Sapegin, http://sapegin.me, 2015

import _ from 'lodash';

let _getCanvasContext = _.memoize(function() {
	return document.createElement('canvas').getContext('2d');
});

function _calculate({ font, fontSize, maxWidth, text } = {}) {
	let context = _getCanvasContext();

	let { fontFamily, fontWeight } = parseFontName(font);
	context.font = `${fontWeight === 'bold' ? 'bold ' : ''}${fontSize}px ${fontFamily}`;

	let words = text.split(/\s+/);
	let line = '';
	let lines = 0;
	let wordsInLine = 1;
	let prevWidth = 0;
	let realWidth = 0;

	for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
		let word = words[wordIdx];
		let testLine = line ? `${line} ${word}` : word;
		let testWidth = Math.ceil(context.measureText(testLine).width);
		let owerflow = testWidth >= maxWidth;

		if (!owerflow && prevWidth >= realWidth) {
			realWidth = prevWidth;
		}
		else if (owerflow && wordsInLine === 1) {
			testWidth = Math.ceil(context.measureText(words[wordIdx === 0 ? 0 : wordIdx - 1]).width);
			if (testWidth >= realWidth) {
				realWidth = testWidth;
			}
		}
		if (owerflow) {
			line = word;
			wordsInLine = 1;
			lines++;
		}
		else {
			prevWidth = testWidth;
			line = testLine;
			wordsInLine++;
		}
	}
	if (prevWidth > realWidth) {
		realWidth = prevWidth;
	}

	return {
		width: realWidth,
		lines: lines + 1,
		overflow: realWidth > maxWidth
	};
}

export let calculate = _.memoize(_calculate, (params) => JSON.stringify(params));

export function parseFontName(font) {
	let m = font.match(/^(.*?)\s*(Regular|Bold)$/);
	return {
		fontFamily: m[1],
		fontWeight: m[2] === 'Bold' ? 'bold' : 'normal'
	};
}
