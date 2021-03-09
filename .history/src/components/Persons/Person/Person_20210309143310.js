import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import styles from './Person.module.css';

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...');
		return (
			<Auxiliary>
				<p key="pI1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p key="pI2">{this.props.children}</p>
				<input type="text" key="pI3" value={this.props.name} onChange={this.props.nameChange} />
			</Auxiliary>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	nameChange: PropTypes.func
};

export default withClass(Person, styles.Person);