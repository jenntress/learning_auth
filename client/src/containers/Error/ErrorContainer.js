// learning-auth/auth_project/client/src/containers/Error/ErrorContainer.js

import React, {Component} from 'react';
import {Error} from '../../components';

class ErrorContainer extends Component {
  state = {
    error: this.props.params.error
  }
  render(){
    return(//the specfic way of referencing state is to use "this" so... this.state
      <Error error={this.state.error}/>
    )
  }
}

export default ErrorContainer
