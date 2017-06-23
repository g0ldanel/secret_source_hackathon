import React, { Component } from 'react';

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

