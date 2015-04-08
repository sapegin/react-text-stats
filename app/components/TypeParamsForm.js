// Author: Artem Sapegin, http://sapegin.me, 2015

import _ from 'lodash';
import Block from 'bem-cn';
import newId from '../utils/newid';
import FontSelect from './FontSelect';
import PixelField from './PixelField';

let b = new Block('form');
let PT = React.PropTypes;

export default React.createClass({
	displayName: 'TypeParamsForm',
	propTypes: {
		onChange: PT.func.isRequired
	},
	throttleDelay: 50,

	componentWillMount() {
		this._handleChangeDelayed = _.throttle(this._handleChange, this.throttleDelay);
	},

	_handleChange() {
		this.props.onChange({
			font: this.refs.font.getValue(),
			fontSize: this.refs.fontSize.getValue(),
			maxWidth: this.refs.maxWidth.getValue()
		});
	},

	render() {
		let fontId = newId();
		let fontSizeId = newId();
		let maxWidthId = newId();
		let { font, fontSize, maxWidth } = this.props.app;

		return (
			<form className={b.mix('type-params-form')}>
				<div className={b('row')}>
					<label className={b('label')} htmlFor={fontId}>Font</label>
					<div className={b('widget')}>
						<FontSelect id={fontId} value={font} ref="font" onChange={this._handleChangeDelayed}/>
					</div>
				</div>
				<div className={b('row')}>
					<label className={b('label')} htmlFor={fontSizeId}>Font size</label>
					<div className={b('widget')}>
						<PixelField id={fontSizeId} value={fontSize} ref="fontSize" onInput={this._handleChangeDelayed}/>
					</div>
				</div>
				<div className={b('row')}>
					<label className={b('label')} htmlFor={maxWidthId}>Max width</label>
					<div className={b('widget')}>
						<PixelField id={maxWidthId} value={maxWidth} ref="maxWidth" onInput={this._handleChangeDelayed}/>
					</div>
				</div>
			</form>
		);
	}
});
