import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props) {
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[Persons.js] shouldComponentUpdate');
		return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked; // if persons prop doesn't change, don't update the component (saves performance on re-rendering the component) - ONLY COMPARES THE POINTER!!!!!
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return <ErrorBoundary key={person.id}>
				<Person 
				click={() => this.props.clicked(index)}
				name={person.name} 
				age={person.age}
				//key={person.id}
				nameChange={(event) => this.props.changed(event, person.id)} />
			</ErrorBoundary>
		});
	}
}

export default Persons;