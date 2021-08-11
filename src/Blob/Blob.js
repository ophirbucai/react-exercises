import React from 'react';
import logo from './logo.svg';
import './Blob.css';

function Blob({showLogo}) {
	return (
		<div className="Blob">
			Add a `showLogo` prop into the `Blob` component that determines whether or not to display the logo.<br />
			{showLogo && <img src={logo} className="Blob__logo" alt="logo"/>}
		</div>
	);
}

export default Blob;
