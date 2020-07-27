import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { setTodoCompleted, removeTodo, requestTodos, addTodo } from 'redux/todo-reducer';
import Preloader from '../Preloader/Preloader';

function TodoListContainer(props) {
	const loadTodos = () => {
		props.requestTodos(props.loadTodosCount, props.loadTodosPage);
	};

	useEffect(loadTodos, []);

	return (
		<div>
			{props.isFirstFetching ? (
				<Preloader />
			) : (
				<TodoList {...props} loadMoreTodos={loadTodos} addTodo={props.addTodo} />
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		todos: state.todo.todos,
		loadTodosCount: state.todo.loadTodosCount,
		loadTodosPage: state.todo.loadTodosPage,
		isFirstFetching: state.todo.isFirstFetching,
		isFetching: state.todo.isFetching,
	};
};

const mapDispatchToProps = {
	setTodoCompleted,
	removeTodo,
	addTodo,
	requestTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
