import React, {useEffect, useState} from 'react';
import './Users.css';
import User from './User/User';

function Users() {
	const [usersData, setUsersData] = useState([]);

	useEffect(() => {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/users.json')
			.then(res => res.json())
			.then(data => setUsersData(data));

	}, [])

	return (
		<div className="Users">
			<h3>Users:</h3>
			<p>
				Use the following API to make a list of user names:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/users.json</code>
			</p>
			<ul>
				{usersData.map((user, i) => <User key={i}>{user.name}</User>)}
			</ul>
		</div>
	);
}

export default Users;
