import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
	const style = {
		margin:'5px auto'
	}

	return (
		<div className="UserInput" style={style}>
			<input type="text" value={props.username} onChange={props.usernameChange} />
		</div>
	)
}

export default UserInput;