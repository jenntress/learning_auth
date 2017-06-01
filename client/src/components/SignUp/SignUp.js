// auth_project/client/src/components/SignUp/SignUp.js

import React from 'react';
import {Link} from 'react-router';

const SignUp = (props) => {
  return (//the email down there checks that they enter a valid email
    <div className="container">
     <h3>Sign Up</h3>
          <div>
            <label>Email</label>
             <input type='email' onChange={(event) =>
              props.updateField('email', event.target.value)}/>
            <label>Password</label>
             <input type='password' onChange={(event) =>
                props.updateField('password', event.target.value)}/>
          </div>

          <button type="button" className="btn btn-primary"
          onClick={(event) => props.handleSubmit(event)}>Go!</button>
          <Link className="btn btn-default" to={'/login'}>Returning User? Login</Link>

    </div>
  )
}


export default SignUp
