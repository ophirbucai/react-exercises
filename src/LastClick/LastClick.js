import React, {useState} from 'react';
import './LastClick.css';

function LastClick() {
	const [lastClick, setLastClick] = useState(null);

	return (
		<div className="LastClick">
			<p>
				There are <b>3</b> buttons.<br />
				Make the box show the number of the last clicked button.
			</p>
			<div className="LastClick__buttons">
				<button onClick={() => setLastClick(1)}>1</button>
				<button onClick={() => setLastClick(2)}>2</button>
				<button onClick={() => setLastClick(3)}>3</button>
			</div>
			<div className="LastClick__box">
				{lastClick}
			</div>
		</div>
	)
}

export default LastClick;
