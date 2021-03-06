import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons: [
			{ id: 'sfsdkf', name: 'Max', age: 28},
			{ id: 'kdlsd', name: 'Manu', age: 20}
		],
		showPersons: false,
		changeCounter: 0,
		authenticated: false
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
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

		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			}
		})
	}

	deletePersonHandler = (personIndex) => {
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

	loginHandler = () => {
		this.setState({ authenticated: true });
	};

	render() {
		console.log('[App.js] render');
		let persons = null;

		if (this.state.showPersons) {
			persons = <Persons 
				persons={this.state.persons} 
				clicked={this.deletePersonHandler} 
				changed={this.nameChangedHandler} 
				isAuthenticated={this.state.authenticated}
			/>;
		}

		return (
			<Auxiliary>
				<Cockpit 
					title={this.props.appTitle} 
					showPersons={this.state.showPersons} 
					personsLength={this.state.persons.length} 
					clicked={this.togglePersonsHandler} 
					login={this.loginHandler} 
				/>
				{persons}
			</Auxiliary>
		);
	}
}

export default withClass(App, styles.App);