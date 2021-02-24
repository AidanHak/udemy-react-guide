import React from 'react';
import Person from './Person/Person';

const persons = (props) => (
	props.persons.map((person, index) => {
		return <ErrorBoundary key={person.id}>
			<Person 
			click={() => this.deletePersonHandler(index)}
			name={person.name} 
			age={person.age}
			//key={person.id}
			nameChange={(event) => this.nameChangedHandler(event, person.id)} />
		</ErrorBoundary>
	})
);

export default Persons;