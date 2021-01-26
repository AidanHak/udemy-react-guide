import React from 'react';

const validationComponent = (props) => {
	let strValidation = 'Text too short';
	if (props.strLength >= 6) {
		strValidation = 'Text long enough';
	}
	return (
		<div className="ValidationComponent">
			<p>{strValidation}</p>
		</div>
	);
}

export default validationComponent;