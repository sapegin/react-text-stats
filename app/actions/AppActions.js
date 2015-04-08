// Author: Artem Sapegin, http://sapegin.me, 2015

import alt from '../alt';

class AppActions {
	constructor() {
		this.generateActions(
			'updateAppState'
		);
	}
}

export default alt.createActions(AppActions);
