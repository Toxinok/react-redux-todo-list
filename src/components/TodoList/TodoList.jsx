import React from 'react';
import './TodoList.scss';
import TodoItem from '../TodoItem/TodoItem';
import TodoAddForm from '../TodoAddForm/TodoAddForm';
import Preloader from '../Preloader/Preloader';

function TodoList({
	todos,
	setTodoCompleted,
	removeTodo,
	addTodo,
	isFetching,
	loadMoreTodos,
	...props
}) {
	return (
		<div className={'todo-list'}>
			<TodoAddForm addTodo={addTodo} />

			{todos.map((todo, i) => (
				<TodoItem
					key={todo.id}
					index={i + 1}
					{...todo}
					setTodoCompleted={setTodoCompleted}
					removeTodo={removeTodo}
				/>
			))}

			{isFetching ? (
				<Preloader />
			) : (
				<button onClick={loadMoreTodos} className={'todo-list__load'}>
					Load more todos
				</button>
			)}
		</div>
	);
}

export default TodoList;
