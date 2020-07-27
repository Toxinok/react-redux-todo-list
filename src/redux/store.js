import todoReducer from './todo-reducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMW from 'redux-thunk';

const reducers = combineReducers({
	todo: todoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

export default store;
