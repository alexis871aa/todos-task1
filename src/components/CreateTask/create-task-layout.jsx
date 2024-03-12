import styles from './create-task-layout.module.css';
import { Error } from '../Error/error.jsx';

export const CreateTaskLayout = (props) => {
	return (
		<form className={styles.formCreateTask} onSubmit={props.handleSubmit}>
			<input
				name="taskName"
				className={styles.inputCreateTask}
				type="text"
				placeholder="Создайте новую задачу"
				ref={props.handleInputRef}
				value={props.value}
				onChange={props.handleChangeValue}
				onBlur={props.handleOnBlur}
			/>
			<button
				type="submit"
				className={styles.inputCreateTaskButton}
				disabled={props.isError}
			>
				Создать
			</button>
			<Error {...props} />
		</form>
	);
};
