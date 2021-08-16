import React, {useRef, useCallback, useState, useEffect} from 'react';
import './Timer.css';
import TimerValue from "./TimerValue/TimerValue";

function Timer() {
	const timerFunction = useRef(null);
	const [isStarted, setIsStarted] = useState(false);
	const [secondsElapsed, setSecondsElapsed] = useState(0);

	const pauseTimer = useCallback(() => {
		clearInterval(timerFunction.current);
		timerFunction.current = null;
		setIsStarted(false);
	}, []);

	const resetTimer = useCallback(() => {
		pauseTimer();
		setSecondsElapsed(0);
	}, [pauseTimer]);

	const startTimer = useCallback(() => {
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
				{!isStarted ? <button onClick={startTimer}>{secondsElapsed === 0 ? "Play" : "Resume"}</button>
							: <button onClick={pauseTimer}>Pause</button>}
				<button onClick={resetTimer}>Reset</button>
			</div>
			<TimerValue secondsElapsed={secondsElapsed} />
		</div>
	);
}

export default Timer;
