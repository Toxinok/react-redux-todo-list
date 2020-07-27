import { todoApi } from '../api/api';

const SET_TODO_COMPLETED = 'SET_TODO_COMPLETED';
const REMOVE_TODO = 'REMOVE_TODO';
const ADD_TODO = 'ADD_TODO';
const SET_TODOS_COUNT = 'SET_TODOS_COUNT';

const SET_TODOS = 'SET_TODOS';
const SET_LOAD_TODOS_PAGE = 'SET_LOAD_TODOS_PAGE';

const SET_IS_FIRST_FETCHING = 'SET_IS_FIRST_FETCHING';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
	todos: [],
	todosCount: 0,
	loadTodosCount: 5,
	loadTodosPage: 1,
	isFirstFetching: false,
	isFetching: false,
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODO_COMPLETED:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.todoId) {
						return { ...todo, completed: !todo.completed };
					}

					return todo;
				}),
			};

		case REMOVE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.todoId),
			};

		case SET_TODOS:
			return {
				...state,
				todos: [...state.todos, ...action.todos],
			};

		case SET_TODOS_COUNT:
			return {
				...state,
				todosCount: state.todosCount + action.count,
			};

		case SET_LOAD_TODOS_PAGE:
			return {
				...state,
				loadTodosPage: action.page + 1,
			};

		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{ id: state.todosCount + 1, title: action.todoText, completed: false },
				],
				todosCount: state.todosCount + 1,
			};

		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};

		case SET_IS_FIRST_FETCHING:
			return {
				...state,
				isFirstFetching: action.isFirstFetching,
			};

		default:
			return state;
	}
};

export const setTodoCompleted = (todoId) => {
	return { type: SET_TODO_COMPLETED, todoId };
};

export const removeTodo = (todoId) => {
	return { type: REMOVE_TODO, todoId };
};

export const addTodo = (todoText) => {
	return { type: ADD_TODO, todoText };
};

export const setTodos = (todos) => {
	return { type: SET_TODOS, todos };
};

export const setTodosCount = (count) => {
	return { type: SET_TODOS_COUNT, count };
};

export const setLoadTodosPage = (page) => {
	return { type: SET_LOAD_TODOS_PAGE, page };
};

export const setIsFetching = (isFetching) => {
	return { type: SET_IS_FETCHING, isFetching };
};

export const setIsFirstFetching = (isFirstFetching) => {
	return { type: SET_IS_FIRST_FETCHING, isFirstFetching };
};

export const requestTodos = (limit, page) => async (dispatch) => {
	page === 1 ? dispatch(setIsFirstFetching(true)) : dispatch(setIsFetching(true));

	setTimeout(async () => {
		const todos = await todoApi.getTodos(limit, page);
		page === 1 ? dispatch(setIsFirstFetching(false)) : dispatch(setIsFetching(false));

		dispatch(setTodos(todos));
		dispatch(setTodosCount(limit));
		dispatch(setLoadTodosPage(page));
	}, 500);
};

export default todoReducer;
