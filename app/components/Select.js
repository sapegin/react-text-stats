// Author: Artem Sapegin http://sapegin.me, 2015

import Block from 'bem-cn';
import { RestAttrsMixin } from '../utils/react-extras';

let PT = React.PropTypes;
let b = new Block('select');

export default React.createClass({
	displayName: 'Select',
	propTypes: {
		items: PT.oneOfType([PT.object, PT.array]),
		value: PT.any,
		onChange: PT.func
	},
	mixins: [
		RestAttrsMixin
	],

	getDefaultProps() {
		return {
			items: {},
			value: ''
		};
	},

	getInitialState() {
		let items = this._prepareItems(this.props.items);
		let firstValue = items[Object.keys(items)[0]];
		return {
			items: items,
			value: this.props.value || firstValue,
			isFocused: false
		};
	},

	componentWillReceiveProps(nextProps) {
		this.setState({
			items: this._prepareItems(nextProps.items)
		});
	},

	getElement() {
		return React.findDOMNode(this.refs.select);
	},

	getValue() {
		return this.getElement().value;
	},

	_handleChange(event) {
		let { value } = event.target;
		this.setState({
			value: value
		});
		this._emitChange(value);
	},

	_emitChange(newValue) {
		if (this.props.onChange) {
			this.props.onChange(newValue);
		}
	},

	_handleFocus() {
		this.setState({
			isFocused: true
		});
	},

	_handleBlur() {
		this.setState({
			isFocused: false
		});
	},

	_prepareItems(items) {
		if (Array.isArray(items)) {
			return items.reduce((obj, item) => {
				obj[item] = item;
				return obj;
			}, {});
		}
		else {
			return items;
		}
	},

	_getNameByValue(needleValue) {
		let items = this.state.items;
		for (let name in items) {
			let value = items[name];
			if (String(value) === String(needleValue)) {
				return name;
			}
		}
	},

	render() {
		let { items, value, isFocused } = this.state;

		let options = Object.keys(items).map(function(val) {
			return (
				<option value={val} key={val}>{items[val]}</option>
			);
		});

		return (
			<div className={b.state({focused: isFocused})}>
				<div className={b('box')}>{this._getNameByValue(value)}</div>
				<select ref="select" className={b('select')} defaultValue={value}
					onChange={this._handleChange}
					onFocus={this._handleFocus}
					onBlur={this._handleBlur}
					{...this.restAttrs()}
				>
					{options}
				</select>
			</div>
		);
	}
});
