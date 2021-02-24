import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
	const assignedClasses = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = styles.Red;
	}

	if (props.persons.length <= 1) {
		assignedClasses.push(styles.red);
	}
	if (props.persons.length === 0) {
		assignedClasses.push(styles.bold);
	}
	
	return (
		<div className={styles.Cockpit}>
			<h1>Hi, I'm a React App</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button
				//style={style}
				//altStyle={this.state.showPersons}
				className={btnClass}
				onClick={props.clicked}>Toggle Persons
			</button>
		</div>
	);
};

export default cockpit;