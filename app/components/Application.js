// Author: Artem Sapegin, http://sapegin.me, 2015

import Header from './Header';
import Footer from './Footer';
import TypeStatsContainer from './TypeStatsContainer';

export default React.createClass({
	displayName: 'Application',

	render() {
		return (
			<div>
				<Header/>
				<TypeStatsContainer/>
				<Footer/>
			</div>
		);
	}
});
