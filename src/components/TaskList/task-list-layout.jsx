import styles from '../TaskList/task-list-layout.module.css';
import { Loader } from '../Loader/loader.jsx';

export const TaskListLayout = (props) => {
	return (
		<>
			{props.isLoading ? (
				<Loader />
			) : (
				props.todos.map((todo) => {
					return (
						<div key={todo.id} className={styles.taskItem}>
							<div className={styles.mainContainer}>
								<div className={styles.mainContent}>
									<form>
										<input
											className={styles.checkboxFormCheckbox}
											type="checkbox"
											id={todo.id}
											checked={todo.completed}
											onChange={props.handleChangeChecked}
										/>
										<label htmlFor={todo.id}></label>
									</form>
									<span className={styles.taskItemText}>
										{todo.title}
									</span>
								</div>
								<button
									className={styles.deleteButton}
									id={todo.id}
									onClick={props.handleDeleteItem}
								>
									Удалить
								</button>
							</div>
						</div>
					);
				})
			)}
		</>
	);
};
