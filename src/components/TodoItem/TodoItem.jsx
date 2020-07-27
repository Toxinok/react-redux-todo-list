import React from 'react';
import './TodoItem.scss';

function TodoItem({ id, completed, title, setTodoCompleted, removeTodo, index }) {
	return (
		<div className={'todo-item'}>
			<div>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => setTodoCompleted(id)}
					className={'todo-item__checkbox'}
				/>
				<span className={'todo-item__number'}>{index}</span>
				<span className={`todo-item__title ${completed && 'todo-item__title--crossed'}`}>
					{title}
				</span>
			</div>

			<button onClick={() => removeTodo(id)} className={'todo-item__remove'}>
				&times;
			</button>
		</div>
	);
}

export default TodoItem;
