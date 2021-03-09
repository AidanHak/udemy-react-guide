import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import styles from './Person.module.css';

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	componentDidMount() {
		//this.inputElement.focus();
		this.inputElementRef.current.focus();
	}

	render() {
		console.log('[Person.js] rendering...');
		return (
			<Auxiliary>
				{this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
				<p key="pI1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p key="pI2">{this.props.children}</p>
				<input 
					key="pI3" 
					//ref={(inputEl) => {this.inputElement = inputEl}}
					ref={this.inputElementRef}
					type="text" 
					value={this.props.name} 
					onChange={this.props.nameChange} 
				/>
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