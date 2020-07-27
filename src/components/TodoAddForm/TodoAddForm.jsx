import React, { useState } from 'react';
import './TodoAddForm.scss';

function TodoAddForm(props) {
	const [inputText, setInputText] = useState('');

	const addTodo = (e) => {
		e.preventDefault();

		if (inputText) {
			props.addTodo(inputText);
			setInputText('');
		}
	};

	return (
		<form onSubmit={(e) => addTodo(e)} className={'todo-form'}>
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				className={'todo-form__input'}
			/>
			<button className={'todo-form__add'}>Add todo</button>
		</form>
	);
}

export default TodoAddForm;
