import React, {useState} from 'react';
import './RandomNumber.css';

function RandomNumber() {

	const [number, setNumber] = useState();

	return (
		<div className="RandomNumber">
			<p className="RandomNumber__explanation">
				When clicking on the button, make a random number (between 1-100) to appear in the box.
			</p>

			<button onClick={() => setNumber(Math.round(Math.random() * 100))}>Generate number!</button>
			<div className="box">
				{number}
			</div>
		</div>
	);
}

export default RandomNumber;
