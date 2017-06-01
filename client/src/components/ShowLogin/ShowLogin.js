// auth_project/client/src/components/ShowLogin/ShowLogin.js

import React from 'react';
import {Link} from 'react-router';

const ShowLogin = (props) => {
  return(
   <div>
    <h1>You Successfully Logged In!</h1>
    <Link className="btn btn-default" to={`/user/${props.user_id}`}>User Page</Link>
   </div>
  )
}

export default ShowLogin
