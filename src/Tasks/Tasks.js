import React, {useState} from 'react';
import './Tasks.css';
import Task from './Task/Task'

function Tasks() {

	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (!task.trim().length) {
			return;
		}
		setTasks([...tasks, task]);
		setTask('');
	}
	return (
		<div className="Tasks">
			<h3>Tasks:</h3>
			<p>Make a Todo list (add only):</p>
			<form onSubmit={onSubmit}>
				<input placeholder="Your task..." onChange={(e) => setTask(e.target.value)} value={task} /> <button>Add task</button>
			</form>
			<ul>
				{tasks.map((task, i) => <Task key={i}>{task}</Task>)}
			</ul>
		</div>
	);
}

export default Tasks;
