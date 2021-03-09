import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
	const toggleBtnRef = useRef(null);
	toggleBtnRef.current.click();

	// useEffect can be used more than once (with different dependencies)
	useEffect(() => {
		console.log('[Cockpit.js] useEffect');

		// Imitate an HTTP request
		setTimeout(() => {
			alert('Saved data to the cloud!');
		}, 1000);

		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		}
	}, []); // useEffect only executes when values in array change (i.e. `props.persons`)

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		}
	});

	const assignedClasses = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = styles.Red;
	}

	if (props.personsLength <= 1) {
		assignedClasses.push(styles.red);
	}
	if (props.personsLength === 0) {
		assignedClasses.push(styles.bold);
	}
	
	return (
		<div className={styles.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button
				//style={style}
				//altStyle={this.state.showPersons}
				ref={toggleBtnRef}
				className={btnClass}
				onClick={props.clicked}
			>
				Toggle Persons
			</button>
		</div>
	);
};

export default React.memo(cockpit);