import React, { Component } from 'react';

class CousineOption extends Component {
    render() {
	return (
	    <option value="{this.props.cousine}">{this.props.cousine}</option>
    );
  }
}

export default CousineOption;
