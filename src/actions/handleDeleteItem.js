export const handleDeleteItem = ({ target }, todos, setTodos) => {
	const deletedIndex = todos.findIndex((todo) => todo.id === Number(target.id));
	setTodos(todos.toSpliced(deletedIndex, 1));
	alert('Задача успешно удалена!');
};
