import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
		username: 'DPM'
	}

	changeUsernameHandler = (event) => {
		this.setState = {
			username: event.target.value
		}
	}

	render() {
		return (
		  <div className="App">
			  <UserOutput username={this.state.username}></UserOutput>
			  <UserOutput></UserOutput>
		  </div>
		);
	}
}

export default App;
