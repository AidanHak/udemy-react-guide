import React from 'react';

const ValidationComponent = (strLength) => {
	let strValidation = 'Text too short'
	if (strLength >= 6) {
		strValidation = 'Text long enough';
	}
	return (
		<p>strValidation</p>
	);
}

export default ValidationComponent;