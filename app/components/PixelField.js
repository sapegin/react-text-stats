// Author: Artem Sapegin, http://sapegin.me, 2015

import FieldWithUnit from './FieldWithUnit';

let PT = React.PropTypes;

export default React.createClass({
	displayName: 'PixelField',
	propTypes: {
		id: PT.string.isRequired,
		value: PT.any.isRequired
	},

	getElement() {
		return this.refs.field.getElement();
	},

	getValue() {
		return this.getElement().value;
	},

	render() {
		return (
			<FieldWithUnit unit="px" pattern="\d*" ref="field" {...this.props}/>
		);
	}
});
