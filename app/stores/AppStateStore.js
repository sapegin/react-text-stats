// Author: Artem Sapegin, http://sapegin.me, 2015

const STORE_ID = 'TypeStatsAppStateStore';

import alt from '../alt';
import _ from 'lodash';
import AppActions from '../actions/AppActions';

export class AppStateStore {
	constructor() {
		this.bindActions(AppActions);
		this._load();
	}

	updateAppState(newProps) {
		_.merge(this, newProps);
		this._save();
	}

	_getDefaultState() {
		return {
			font: 'Helvetica Regular',
			fontSize: 16,
			maxWidth: 150,
			text: 'The quick brown fox jumps over the lazy dog.'
		};
	}

	_load() {
		_.merge(this, this._getDefaultState(), JSON.parse(localStorage.getItem(STORE_ID)));
	}

	_save() {
		localStorage.setItem(STORE_ID, JSON.stringify(this));
	}
}

export default alt.createStore(AppStateStore, STORE_ID);
