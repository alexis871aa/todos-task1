import { useGetTodos, useHandleInput, useHandleChangeChecked } from './hooks/index.js';
import { AppLayout } from './app-layout.jsx';

export const App = () => {
	const { todos, setTodos, isLoading } = useGetTodos();
	const { value, error, isError, handleChangeValue, handleOnBlur } = useHandleInput();
	const { handleChangeChecked } = useHandleChangeChecked(todos, setTodos);

	return (
		<AppLayout
			value={value}
			handleChangeValue={handleChangeValue}
			handleOnBlur={(event) => handleOnBlur(event, todos)}
			todos={todos}
			setTodos={setTodos}
			handleChangeChecked={handleChangeChecked}
			isLoading={isLoading}
			error={error}
			isError={isError}
		/>
	);
};
