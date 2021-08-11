import React, {useState} from 'react';
import './Remover.css';

function Remover() {
	const removeStudent = (key) => {
		setStudents(students.filter((student, index) => index !== key));
	}

	const [students, setStudents] = useState([
		'Abby Mecoil',
		'Toni Zuck',
		'Peter Hanshfield',
		'Rose Tobernak'
	]);

	return (
		<div className="Remover">
			<h3>Remover:</h3>
			<p>Add a delete button for each student to remove it from the list.</p>
			<ul className="Remover__list">
				{students.map((student, index) => {
					return <li key={index}>{student} <span onClick={() => removeStudent(index)}>X</span></li>;
				})}
			</ul>
			<div className="Remover__reset">
				<button onClick={() => setStudents([
					'Abby Mecoil',
					'Toni Zuck',
					'Peter Hanshfield',
					'Rose Tobernak'
				])}>Reset</button>
			</div>
		</div>
	);
}

export default Remover;
