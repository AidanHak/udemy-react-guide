import React, { Component } from 'react';
import styles from './Person.module.css';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return (
			//<div className="Person" style={style}>
			<div className={styles.Person}>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input type="text" value={this.props.name} onChange={this.props.nameChange} />
			</div>
		);
	}
}

export default person;