// Author: Artem Sapegin, http://sapegin.me, 2015

import Block from 'bem-cn';

let b = new Block('header');

export default React.createClass({
	displayName: 'Header',

	render() {
		return (
			<header className={b}>
				<h1 className={b('title')}>Text Statistics</h1>
			</header>
		);
	}
});
