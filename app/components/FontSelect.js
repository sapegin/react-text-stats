// Author: Artem Sapegin http://sapegin.me, 2015

import Select from './Select';

export default React.createClass({
	displayName: 'FontSelect',

	getDefaultProps() {
		return {
			items: [
				'Courier New Regular',
				'Courier New Bold',
				'Georgia Regular',
				'Georgia Bold',
				'Helvetica Regular',
				'Helvetica Bold',
				'Tahoma Regular',
				'Tahoma Bold',
				'Times New Roman Regular',
				'Times New Roman Bold',
				'Trebuchet MS Regular',
				'Trebuchet MS Bold',
				'Verdana Regular',
				'Verdana Bold'
			]
		};
	},

	getValue() {
		return this.refs.select.getValue();
	},

	render() {
		return (
			<Select ref="select" {...this.props}/>
		);
	}
});
