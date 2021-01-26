import React, { Component } from 'react';
import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
	state = {
		inputText: ''
	}

	updateStr = (event) => {
		const newStr = event.target.value;
		this.setState({
			inputText: newStr
		})
	}

	deleteChar = (index) => {
		const text = this.state.inputText.split('');
		text.splice(index, 1);
		const newStr = text.join('');
		this.setState({
			inputText: newStr
		})
	}

	render() {
		let characters = null;

		if (this.state.inputText.length > 0) {
			characters = this.state.inputText.split('').map((char, index) => {
				return <Char 
					character={char} 
					key={index} 
					clicked={() => this.deleteChar(index)}
					/>
			});
		}

		return (
		  <div className="App">
			  <input type="text" value={this.state.inputText} onChange={(event) => this.updateStr(event)} />
			  <p>Input string length: {this.state.inputText.length} characters</p>
			  <Validation strLength={this.state.inputText.length} />
			  {characters}
		  </div>
		);
	}
}

export default App;
