import React, { Component } from 'react';
//import styled from 'styled-components';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
		let btnClass = '';

		if (this.state.showPersons) {
			persons = (
				<div>
					{
						this.state.persons.map((person, index) => {
							return <ErrorBoundary key={person.id}>
								<Person 
								click={() => this.deletePersonHandler(index)}
								name={person.name} 
								age={person.age}
								//key={person.id}
								nameChange={(event) => this.nameChangedHandler(event, person.id)} />
							</ErrorBoundary>
						})
					}
				</div>
			);

			//style.backgroundColor = 'red';
			btnClass = 'Red';
		}

		const assignedClasses = [];
		if (this.state.persons.length <= 1) {
			assignedClasses.push(styles.red);
		}
		if (this.state.persons.length === 0) {
			assignedClasses.push(styles.bold);
		}

		return (
			<div className={styles.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button
					//style={style}
					//altStyle={this.state.showPersons}
					className={btnClass}
					onClick={this.togglePersonsHandler}>Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
	//	return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default App;
