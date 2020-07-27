import React from 'react';
import './App.scss';
import TodoListContainer from './components/TodoList/TodoListContainer';

function App() {
	return (
		<div className={'wrapper'}>
			<h1>Todo list</h1>
			<TodoListContainer />
		</div>
	);
}

export default App;
