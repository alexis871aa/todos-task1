export const handleSubmit = (event, handleInputRef, { todos, setTodos }) => {
	event.preventDefault();
	const newArray = todos.slice();
	newArray.push({
		userId: 10,
		id: Date.now(),
		title: handleInputRef.current.value,
		completed: false,
	});
	setTodos(newArray);
	alert('Новая задача была успешно добавлена!');
};
