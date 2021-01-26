import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
	return (
		<div className="UserInput">
			<input type="text" value={props.username} onChange={props.usernameChange} />
		</div>
	)
}

export default UserInput;