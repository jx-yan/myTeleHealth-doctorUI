import { createStore } from "vuex";

import { auth } from "../firebase/config";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";

import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
});

const store = createStore({
	state: {
		user: null,
		id: null,
		authIsReady: false,
	},
	mutations: {
		setUser(state, payload) {
			if (payload !== null) {
				state.user = payload;
				state.id = payload.uid
			} else {
				state.user = payload
			}
			// console.log('user state changed:', state.user)
		},
		setAuthIsReady(state, payload) {
			state.authIsReady = payload;
		},
	},
	actions: {
		async login(context, { email, password }) {
			const res = await signInWithEmailAndPassword(auth, email, password);
			if (res) {
				context.commit("setUser", res.user);
			} else {
				throw new Error("Login Failed");
			}
		},
		async logout(context) {
			await signOut(auth);
			context.commit("setUser", null);
		}
	},
	plugins: [vuexLocal.plugin],
});

const unsub = onAuthStateChanged(auth, (user) => {
	store.commit("setAuthIsReady", true);
	store.commit("setUser", user);
	unsub();
});

export default store;