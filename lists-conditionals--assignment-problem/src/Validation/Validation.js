import React from 'react';

const validation = props => {
	let strValidation = 'Text too short';

	if (props.strLength >= 6) {
		strValidation = 'Text long enough';
	}

	return <div className="Validation">
			<p>{strValidation}</p>
		</div>;
};

export default validation;