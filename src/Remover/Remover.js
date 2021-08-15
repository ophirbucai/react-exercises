import React, {useState} from 'react';
import './Remover.css';

function Remover() {

	const [students, setStudents] = useState([
		'Abby Mecoil',
		'Toni Zuck',
		'Peter Hanshfield',
		'Rose Tobernak'
	]);

	const removeStudent = (key) => {
		let tempStudents = [...students]; // O(n) duplicate the students array
		tempStudents[key] = tempStudents[tempStudents.length - 1]; // O(1)
		tempStudents.length--; // O(1)
		setStudents(tempStudents); // O(1)
		// setStudents(students.filter((student, index) => index !== key));
	}

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
