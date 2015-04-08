// Author: Artem Sapegin, http://sapegin.me, 2015

import AltContainer from 'alt/components/AltContainer'
import AppStateStore from '../stores/AppStateStore';
import AppActions from '../actions/AppActions';
import TypeParamsForm from './TypeParamsForm';
import TypeStatsWidget from './TypeStatsWidget';

export default React.createClass({
	displayName: 'TypeStatsContainer',

	render() {
		return (
			<AltContainer stores={{app: AppStateStore}}>
				<TypeParamsForm onChange={AppActions.updateAppState}/>
				<TypeStatsWidget onChange={AppActions.updateAppState}/>
			</AltContainer>
		);
	}
});
