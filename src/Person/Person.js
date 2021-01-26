import React from 'react';
import './Person.css';

const person = (props) => {
	return (
		<div className="Person">
			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.nameChange} />
		</div>
	);
}

export default person;