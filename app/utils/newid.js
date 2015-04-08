// Author: Artem Sapegin http://sapegin.me, 2015

let lastId = 0;

export default function(prefix='id') {
	lastId++;
	return `${prefix}${lastId}`;
}
