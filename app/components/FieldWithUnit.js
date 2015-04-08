// Author: Artem Sapegin, http://sapegin.me, 2015

import Block from 'bem-cn';
import { RestAttrsMixin } from '../utils/react-extras';

let PT = React.PropTypes;
let b = new Block('field-with-unit');

export default React.createClass({
	displayName: 'FieldWithUnit',
	propTypes: {
		id: PT.string.isRequired,
		value: PT.any.isRequired,
		unit: PT.string.isRequired
	},
	mixins: [
		RestAttrsMixin
	],

	getElement() {
		return this.refs.field.getDOMNode();
	},

	getValue() {
		return this.getElement().value;
	},

	render() {
		let { id, value, unit } = this.props;
		return (
			<div className={b}>
				<label htmlFor={id} className={b('unit')}>{unit}</label>
				<input id={id} type="number" defaultValue={value} className={b('field').mix('field')} ref="field" {...this.restAttrs()}/>
			</div>
		);
	}
});
