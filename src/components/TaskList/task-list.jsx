import { TaskListLayout } from './task-list-layout.jsx';
import { handleDeleteItem } from '../../actions/index.js';

export const TaskList = (props) => {
	return (
		<TaskListLayout
			handleDeleteItem={(event) =>
				handleDeleteItem(event, props.todos, props.setTodos)
			}
			{...props}
		/>
	);
};
