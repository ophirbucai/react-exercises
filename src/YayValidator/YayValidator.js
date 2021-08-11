import React, {useState} from 'react';
import './YayValidator.css';

function YayValidator() {
	const [isYay, setIsYay] = useState(false);

	const checkYay = (e) => {
		setIsYay(e.target.value === "yay");
	}

	return (
		<div className="YayValidator">
			<p>
				When the input contains the value "yay",
				change the input's background color to <span className="YayValidator__sample">green</span>:
			</p>
			<input type="text" className="text-box" onChange={checkYay} style={{background: isYay ? 'green' : ''}} />
		</div>
	);
}

export default YayValidator;
