import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
	console.log('[Person.js] rendering...');
	return (
		//<div className="Person" style={style}>
		<div className={styles.Person}>
			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.nameChange} />
		</div>
	);
}

export default person;