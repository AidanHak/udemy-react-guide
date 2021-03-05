import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		// Imitate an HTTP request
		setTimeout(() => {
			alert('Saved data to the cloud!');
		}, 1000);
	}, [props.person]);

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
			<h1>{props.title}</h1>
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