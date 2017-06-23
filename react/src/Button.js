import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {    
    render() {
	return (
		<button type='button'>
               {this.props.name}
		</button>
	);
    }
}

export default Button;

