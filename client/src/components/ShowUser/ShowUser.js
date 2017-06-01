// auth_project/client/src/components/ShowUser/ShowUser.js

import React from 'react';
import {Link} from 'react-router';

const ShowUser = (props) => {
  return(
    <div>
        <h1>User is:</h1>
        <p>{props.email}</p>
        <button type="button" className="btn btn-danger" 
          onClick={(event) => props.logout(event)}>Logout</button>
        <Link className="btn btn-default" to={'/show'}>Back to Main Page</Link>
    </div>
  )
}

export default ShowUser
