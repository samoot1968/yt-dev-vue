import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{ imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/800px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg', id: '1', title: 'Meetup in New York', date: '2018-01-28'},
			{ imageUrl: 'https://static1.eurocentres.com/cdn/farfuture/83ZTKH3XL9C4xe4PgBNQC23NFo5vn37MvZ_G4sDQ3Zk/mtime:1505483245/sites/default/files/styles/ec_slider_content_breakpoints_theme_ec_responsive_full_1_5x/public/par_eiffel_1400x650.jpg?itok=gCyXICEG&timestamp=1505483222', id: '2', title: 'Meetup in Paris', date: '2018-01-27'}
		],
		user: {
			id: '1',
			registeredMeetups: ['1']
		}
	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups (state) {
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters) {
			return getters.loadedMeetups.slice(0, 5);
		},
		loadedMeetup (state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		}
	}
})