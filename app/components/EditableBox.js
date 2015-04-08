// Author: Artem Sapegin, http://sapegin.me, 2015

import _ from 'lodash';
import { RestAttrsMixin } from '../utils/react-extras';

let PT = React.PropTypes;

export default React.createClass({
	displayName: 'EditableBox',
	propTypes: {
		value: PT.string.isRequired,
		onChange: PT.func
	},
	mixins: [
		RestAttrsMixin
	],

	_handleKeydown(event) {
		// Disable formatting hotkeys
		if (event.ctrlKey || event.metaKey) {
			// B, I, U
			if (_.includes([66, 73, 85], event.keyCode)) {
				event.preventDefault();
			}
		}
	},

	_handleInput() {
		let text = React.findDOMNode(this.refs.text).textContent;

		// Normalize spaces
		text = text
			.replace(/&nbsp;/g, ' ')
			.replace(/\s+/g, ' ')
		;

		this._emitChange(text);
	},

	_emitChange(newValue) {
		if (this.props.onChange) {
			this.props.onChange(newValue);
		}
	},

	render() {
		return (
			<div contentEditable spellCheck="false" ref="text"
				onKeyDown={this._handleKeydown}
				onInput={this._handleInput}
				{...this.restAttrs()}
			>
				{this.props.value}
			</div>
		);
	}
});
