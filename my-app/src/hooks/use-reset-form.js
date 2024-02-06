import { useEffect } from "react";
import { useStore } from "react-redux";

export const useResetForm = (reset) => {
	const store = useStore();
	useEffect(() => {
		let correntWasLogout = store.getState().app.wasLogout;

		return store.subscribe(() => {
			let previousWasLogout = correntWasLogout;
			correntWasLogout = store.getState().app.wasLogout;

			if (correntWasLogout !== previousWasLogout) {
				reset();
			}
		});
	}, [reset, store]);
};
