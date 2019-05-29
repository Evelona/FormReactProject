import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './reducer'


const initialState = {
	users: {}
}

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware()
);

export let store = createStore(
	reducer,
	initialState,
	enhancer,
)
