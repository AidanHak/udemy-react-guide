import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const persons = (props) => {
	console.log('[Persons.js] rendering...');
	return props.persons.map((person, index) => {
		return <ErrorBoundary key={person.id}>
			<Person 
			click={() => props.clicked(index)}
			name={person.name} 
			age={person.age}
			//key={person.id}
			nameChange={(event) => props.changed(event, person.id)} />
		</ErrorBoundary>
	});
}

export default persons;