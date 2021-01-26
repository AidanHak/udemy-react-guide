import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
	const [ personsState, setPersonsState ] = useState({
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Manu', age: 20}
		]
	});

	const switchNameHandler = () => {
		//console.log('Was clicked');
		// DON'T DO THIS: state.persons[0].name = 'Aidan';
		this.setState({
			persons: [
				{ name: 'Max', age: 28},
				{ name: 'Aidan', age: 23}
			]
		})
	}

	return (
		<div className="App">
			<h1>Hi, I'm a React App</h1>
			<p>This is really working!</p>
			<button onClick={this.switchNameHandler}>Switch Name</button>
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Gaming</Person>
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
		</div>
	);
	//	return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default app;
