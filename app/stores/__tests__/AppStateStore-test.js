// Author: Artem Sapegin http://sapegin.me, 2015

// jest.dontMock('../AppStateStore');
// jest.dontMock('../../actions/AppActions');
import alt from '../../alt';
import { AppStateStore } from '../AppStateStore';
import AppActions from '../../actions/AppActions';

describe('stores/AppStateStore', () => {

	beforeEach(() => {
		localStorage.clear();
		alt.stores = {};
	});

	it('AppStateStore should exist', () => {
		expect(AppStateStore).toBeDefined();
	});

	it('AppStateStore should has default state', () => {
		const defaultState = {
			font: 'Helvetica Regular',
			fontSize: 16,
			maxWidth: 150,
			text: 'The quick brown fox jumps over the lazy dog.'
		};
		let store = alt.createStore(AppStateStore);
		expect(store.getState()).toEqual(defaultState);
	});

	it('updateAppState should update internal state and localStorage', () => {
		const newFont = 'Helvetica Bold';
		let store = alt.createStore(AppStateStore);
		AppActions.updateAppState({font: newFont});
		expect(store.getState().font).toEqual(newFont);
		expect(JSON.parse(localStorage.getItem('TypeStatsAppStateStore')).font).toEqual(newFont);
	});

});
