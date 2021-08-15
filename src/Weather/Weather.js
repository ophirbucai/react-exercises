import React, {useEffect, useState} from 'react';
import './Weather.css';
import DayOfWeek from "./DayOfWeek/DayOfWeek";

function Weather() {
	const [weatherData, setWeatherData] = useState([]);
	const [hottestDay, setHottestDay] = useState({});
	const [coldestDay, setColdestDay] = useState({});

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
			.then(data => setWeatherData(data));
	}, [])

	useEffect(() => {
		setHottestDay(weatherData.reduce((day, hottestDay) => day.temperature > hottestDay.temperature ? day : hottestDay, {}));
		setColdestDay(weatherData.reduce((day, coldestDay) => day.temperature < coldestDay.temperature ? day : coldestDay, {}));
	}, [weatherData])

	return (
		<div className="Weather">
			<p>
				Use the following API to display the hottest and coldest days:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
			</p>
			<div className="Weather__stats">
				<strong>Hottest day is: <DayOfWeek day={hottestDay.day} /></strong>
			</div>
			<div className="Weather__stats">
				<strong>Coldest day is: <DayOfWeek day={coldestDay.day} /></strong>
			</div>
		</div>
	);
}

export default Weather;
