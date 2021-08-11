import React, {useRef, useCallback, useState, useEffect} from 'react';
import './Timer.css';
import TimerValue from "./TimerValue/TimerValue";

function Timer() {
	const timerFunction = useRef(null);
	const [isStarted, setIsStarted] = useState(false);
	const [secondsElapsed, setSecondsElapsed] = useState(0);

	const stopCounting = useCallback(() => {
		clearInterval(timerFunction.current);
		timerFunction.current = null;
		setIsStarted(false);
	}, []);

	const pauseHandler = useCallback(() => {
		stopCounting();
	}, [stopCounting]);

	const stopHandler = useCallback(() => {
		stopCounting();
		setSecondsElapsed(0);
	}, [stopCounting]);

	const startHandler = useCallback(() => {
		setIsStarted(true);
	}, []);

	useEffect(() => {
		clearInterval(timerFunction.current);
	}, [secondsElapsed]);

	useEffect(() => {
		if (isStarted) {
			timerFunction.current = setInterval(function() {
				setSecondsElapsed(oldElapsed => oldElapsed + 1);
			}, 1000)
		}
	}, [isStarted, secondsElapsed]);

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<ul className="Timer__explanation">
				<li><b>Play:</b> the timer should count the seconds and keep updating</li>
				<li><b>Pause:</b> the timer freeze the timer</li>
				<li><b>Reset:</b> should set the timer to 0</li>
			</ul>
			<div className="Timer__actions">
				{!isStarted ? <button onClick={startHandler}>{secondsElapsed === 0 ? "Play" : "Resume"}</button>
							: <button onClick={pauseHandler}>Pause</button>}
				<button onClick={stopHandler}>Reset</button>
			</div>
			<TimerValue secondsElapsed={secondsElapsed} />
		</div>
	);
}

export default Timer;
