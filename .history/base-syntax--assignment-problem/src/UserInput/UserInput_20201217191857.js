import React from 'react';

const UserInput = (props) => {
	return (
		<div className="UserInput">
			<input type="text" onChange={props.usernameChange} />
		</div>
	)
}

export default UserInput;