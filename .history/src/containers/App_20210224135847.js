import React, { Component } from 'react';
//import styled from 'styled-components';
import styles from './App.module.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// const StyledButton = styled.button`
// 	background-color:${props => props.altStyle ? 'red' : 'green'};
// 	color:white;
// 	font:inherit;
// 	border:1px solid blue;
// 	padding:8px;
// 	cursor:pointer;
// 	&:hover {
// 		background-color:${props => props.altStyle ? 'salmon' : 'lightgreen'};
// 		color:black;
// 	}
// `;

class App extends Component {
	state = {
		persons: [
			{ id: 'sfsdkf', name: 'Max', age: 28},
			{ id: 'kdlsd', name: 'Manu', age: 20}
		],
		showPersons: false
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons
		})
	}

	deletePersonHandler = (personIndex) => {
		//const persons = this.state.persons.slice();
		// ABOVE IS SAME AS BELOW
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({
			persons: persons
		})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		})
	}

	render() {
		// const style = {
		// 	backgroundColor: 'green',
		// 	color: 'white',
		// 	font: 'inherit',
		// 	border: '1px solid blue',
		// 	padding: '8px',
		// 	cursor: 'pointer'
		// }

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons 
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler} />
				</div>
			);
		}

		return (
			<div className={styles.App}>
				{persons}
			</div>
		);
	}
	//	return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default App;
