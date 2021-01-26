import React from 'react';

const UserOutput = (props) => {
	const style = {
		width: '25%',
		padding:'5px',
		margin: '10px auto',
		boxShadow: '0 2px 3px #ccc'
	}

	return (
		<div className="UserOutput" style={style}>
			<h1>{props.username}</h1>
			<p>This is my first paragraph.</p>
			<p>This is my second paragraph.</p>
		</div>
	)
}

export default UserOutput;