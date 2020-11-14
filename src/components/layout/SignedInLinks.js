
import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import {signOut} from '../../actions/authAction'   
import { connect } from 'react-redux'

const SignedInLinks = (props) => {
  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
          <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

// export default SignedInLinks





// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     authError: state.auth.authError
//     // projects: state.project.projects
//   }
// }



const mapDispatchToProps = {
  signOut:signOut
}







export default connect(null,{signOut})( SignedInLinks)