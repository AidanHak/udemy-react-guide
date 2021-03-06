import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
	background-color:green;
	color:white;
	font:inherit;
	border:1px solid blue;
	padding:8px;
	cursor:pointer;
	&:hover {
		background-color:lightgreen;
		color:black;
	}
`;

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
					{
						this.state.persons.map((person, index) => {
							return <Person 
								click={() => this.deletePersonHandler(index)}
								name={person.name} 
								age={person.age}
								key={person.id}
								nameChange={(event) => this.nameChangedHandler(event, person.id)} />
						})
					}
				</div>
			);

			//style.backgroundColor = 'red';
		}

		const classes = [];
		if (this.state.persons.length <= 1) {
			classes.push('red');
		}
		if (this.state.persons.length === 0) {
			classes.push('bold');
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<StyledButton 
					//style={style}
					onClick={this.togglePersonsHandler}>Toggle Persons
				</StyledButton>
				{persons}
			</div>
		);
	}
	//	return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
}

export default App;
