import { useState } from 'react';

export const useHandleInput = () => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const [isError, setIsError] = useState(true);

	const handleChangeValue = ({ target }) => {
		setValue(target.value);
		let message = '';
		if (target.value.length > 50) {
			message =
				'Вы ввели больше 50 символов, задача должна содержать меньшее количество символов';
		}
		if (message !== '') {
			setIsError(true);
		} else {
			setIsError(false);
		}
		setError(message);
	};

	const handleOnBlur = ({ target }, todos) => {
		let message = '';
		if (todos.find((todo) => todo.title === target.value)) {
			message = 'Такая задача существует, введите еще раз';
			setValue('');
		}
		if (target.value.length <= 5) {
			message =
				'Вы ввели меньше 5 символов, задача должна содержать больше 5 символов, продолжайте набирать';
		}
		if (message !== '') {
			setIsError(true);
		} else {
			setIsError(false);
		}
		setError(message);
	};

	return {
		value,
		error,
		isError,
		handleChangeValue,
		handleOnBlur,
	};
};
