import { useEffect, useState } from 'react';

export const useGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos) || [])
			.finally(() => setIsLoading(false));
	}, []);

	return {
		todos,
		setTodos,
		isLoading,
	};
};
