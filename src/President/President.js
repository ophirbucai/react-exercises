import React, {useState} from 'react';
import './President.css';
const { isEqual } = require('lodash');

function President() {
	const [selectedName, setSelectedName] = useState();
	const [presidents] = useState([
		{
			firstName: 'Bill',
			lastName: 'Clinton',
			image: 'bill.jpeg'
		},
		{
			firstName: 'George',
			lastName: 'Bush',
			image: 'george.jpeg'
		},
		{
			firstName: 'Barack',
			lastName: 'Obama',
			image: 'barack.jpeg'
		}
	]);

	return (
		<div className="President">
			<p>When clicking on a president, display his <strong>full</strong> name below.</p>
			<div className="President__list">
				{presidents.map((president, index) => {
					return <img
						key={index}
						src={require('./images/' + president.image).default}
						onClick={() => setSelectedName(presidents[index])}
						style={selectedName && isEqual(president, selectedName) ? {boxShadow: "0 0 0 3px #34a853"} : {}}
						alt=""
					/>
				})}
			</div>
			<div>
				<strong>You selected: </strong>
				{selectedName && <h2 className="President__selected">{selectedName.firstName + " " + selectedName.lastName}</h2>}
			</div>
		</div>
	);
}

export default President;
