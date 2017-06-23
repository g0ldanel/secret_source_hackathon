import React, { Component } from 'react';
//import Button from './Button';

class MainButtons extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    estado: 0,
	    people: [{
		name: 'Jose',
		food: 'Pizza'
	    }
		    ],
	    name: '',
	    food: ''
	    
	};
	this.create_dinner = this.create_dinner.bind(this);
	this.send_proposal = this.send_proposal.bind(this);
    }
    
    create_dinner() {
	this.setState({
	    estado: 1
	});
    }

    send_proposal() {
	var newPerson = {name: this.state.name, food: this.state.food};
	var newPeople = this.state.people;
	newPeople.push(newPerson);
	this.setState({
	    estado:0,
	    people: newPeople
	});
	    
    }

    handleEmailChange(e) {
	this.setState({name: e.target.value});
    }
    
    handlePasswordChange(e) {
	this.setState({food: e.target.value});
    }
    
    render() {
	if (this.state.estado === 0) {
	    var buttons_names = ['Create dinner','Join dinner', 'See results'];
	    var create_dinner = this.create_dinner;
	    var send_proposal = this.send_proposal;
	    return (<div>
		    <p>Hello! Choose an option:</p>
		    <button type='button' onClick={create_dinner} >{buttons_names[0]}</button>
		    </div>);
	}
	else if (this.state.estado === 1) {
	    for (var i = 0; i < this.state.people.length; i++) {
		console.log(this.state.people[i]);
	    }
	    return (<div><input type='text' name='user' placeholder='Your Name' value={this.state.name} onChange={this.handleEmailChange}/><input type='text' onChange={this.handlePasswordChange} name='food' placeholder='Food' value={this.state.food}/><button onClick={send_proposal} type='button'>Send Proposal</button></div>);
	}

    }
}

export default MainButtons;
