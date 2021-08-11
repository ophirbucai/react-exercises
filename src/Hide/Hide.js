import React, {useState} from 'react';
import './Hide.css';

function Hide() {
	const [isShown, setIsShown] = useState(true);

	return (
		<div className="Hide">
			<button onClick={() => setIsShown(false)}>Hide text now!</button>
			{isShown && <p>
				You can read this text,
				but if you click the button it should disappear. Forever.
			</p>}
		</div>
	);
}

export default Hide;
