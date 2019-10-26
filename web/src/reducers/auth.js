import { createActions, handleActions, combineActions } from 'redux-actions';

const defaultState = {
	authorized: false
};

const {
	login,
	logout
} = createActions({
	LOGIN:  () => ({ authorized: true }),
	LOGOUT: () => ({ authorized: false })
});

export const actions = {
  login,
  logout,
};

export default handleActions({
	[combineActions(
		login,
		logout
	)]: (state, { payload }) => {
		const { authorized } = payload;
		return {
			...state,
			authorized
		}
	}
}, defaultState);

