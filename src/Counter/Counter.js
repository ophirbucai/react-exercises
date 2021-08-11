import React, {useState} from 'react';
import './Counter.css';

function Counter() {
	const [count, setCount] = useState(0)

	return (
		<div className="Counter">
			<p>Make the button increase the value:</p>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<div className="Counter__value">{count}</div>
		</div>
	);
}

export default Counter;
