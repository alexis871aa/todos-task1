import { useState } from 'react';

export const useHandleChangeChecked = (todos, setTodos) => {
	const [, setChecked] = useState(false);

	const handleChangeChecked = ({ target }) => {
		setChecked(target.checked);
		setTodos(
			todos.toSpliced(target.id - 1, 1, {
				...todos[target.id - 1],
				completed: target.checked,
			}),
		);
	};

	return {
		handleChangeChecked,
	};
};
