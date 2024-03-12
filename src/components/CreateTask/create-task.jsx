import { CreateTaskLayout } from './create-task-layout.jsx';
import { handleSubmit } from '../../actions/index.js';
import { useRef } from 'react';

export const CreateTask = (props) => {
	const inputRef = useRef(null);
	return (
		<CreateTaskLayout
			handleSubmit={(event) => handleSubmit(event, inputRef, { ...props })}
			handleInputRef={inputRef}
			{...props}
		/>
	);
};
