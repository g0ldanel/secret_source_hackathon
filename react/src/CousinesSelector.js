import React, { Component } from 'react';
//import './Form.css';
import CousineOption from './CousineOption';

class CousinesSelector extends Component {
    render() {
	var cousines = ['japanese','italian', 'spanish'];
	
	return (
	    <select>
		{cousines.map(function (i) {
		    return <CousineOption cousine={i} />;
		})}

	    </select>

    );
  }

}


export default CousinesSelector;

