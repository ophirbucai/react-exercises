import React, {useState} from 'react';
import './Filter.css';

function Filter() {
	const [items] = useState([
		'Big fox',
		'Small elephant',
		'Big ant',
		'Small dinosaur',
		'Medium dog'
	]);
	const [filteredItems, setFilteredItems] = useState(items);

	const filterItems = (e) => {
		const searchTerm = new RegExp(e.target.value, "gi")
		setFilteredItems(items.filter(item => item.match(searchTerm)));
	}

	return (
		<div className="Filter">
			<p>Filter the list as you type.</p>
			<input placeholder="Search..." className="Filter__textbox" onChange={filterItems} />
			<ul>
				{filteredItems.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	)
}

export default Filter;
