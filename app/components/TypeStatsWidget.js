// Author: Artem Sapegin, http://sapegin.me, 2015

import Block from 'bem-cn';
import { calculate, parseFontName } from '../utils/type-stats';
import EditableBox from './EditableBox';

let b = new Block('type-stats');
let PT = React.PropTypes;

export default React.createClass({
	displayName: 'TypeStatsWidget',
	propTypes: {
		onChange: PT.func.isRequired
	},

	_handleChange(text) {
		this.props.onChange({
			text: text
		});
	},

	_plural(number, ...forms) {
		return number === 1 ? forms[0] : forms[1];
	},

	render() {
		let { font, fontSize, maxWidth } = this.props.app;
		let { fontFamily, fontWeight } = parseFontName(font);
		let { width, lines, overflow } = calculate(this.props.app);

		return (
			<div className={b({overflow: overflow})}>
				<div className={b('preview')} style={{width: maxWidth}}>
					<div className={b('preview-ruler')} style={{left: width}}></div>
					<EditableBox className={b('preview-inner')} value={this.props.app.text} ref="text"
						onChange={this._handleChange}
						style={{fontFamily: fontFamily, fontWeight: fontWeight, fontSize: fontSize}}
					/>
				</div>
				<div className={b('stats')}>Required width: {width}px, {lines} {this._plural(lines, 'line', 'lines')}</div>
			</div>
		);
	}
});
