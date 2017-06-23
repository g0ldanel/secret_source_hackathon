import React, { Component } from 'react';
import Button from './Button';

class MainButtons extends Component {
    render() {
	var buttons_names = ['Create dinner','Join dinner', 'See results'];
	
	return (<div><p>Hello! Choose an option:</p> {buttons_names.map(function (i) { return <Button name={i} />; })} </div>);
	       //</div>
         //);


    };
}

export default MainButtons;
