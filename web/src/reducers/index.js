import { actions as authActions } from './auth';

export { default as auth } from './auth';

export const actions = {
	...authActions
}