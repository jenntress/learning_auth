import React, {Component} from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import {SignUp} from '../../components';

class SignUpContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  updateField = this.updateField.bind(this)
  updateField(field, value) {
    const newState = {};
    newState[field] = value;
    this.setState(newState); //new state is an object that we just created
}

  handleSubmit = this.handleSubmit.bind(this) //bind functions FIRST so that you don't forget
  handleSubmit(event){ //this is  function
    event.preventDefault();//this is a method (not a property of an object)
    console.log('STATE IS NOW: ', this.state);
    const local = {email: this.state.email, password: this.state.password};
    $.ajax({
      url: '/api/signup',
      method: 'POST',
      data: local
    }).done((response) => (response._id) ? //users have to go back to the login page
                          browserHistory.push('/login') :
                          browserHistory.push(`/err/${response.message}`));
  }

  render () { //pass stuff to your component (if you pass in directly, it would be this.state...)
    return (
      <div>
        <SignUp updateField={this.updateField}  handleSubmit={this.handleSubmit} />
      </div>
    )
  }//this closes the render
}// this ends the SignUpContainer class

export default SignUpContainer
