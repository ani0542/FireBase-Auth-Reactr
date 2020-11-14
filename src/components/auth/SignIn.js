import React, { Component } from 'react'
import {signIn} from '../../actions/authAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state)
    // this.props.history.push('/');
  }
  render() {

    const { authError,auth } = this.props;

    if(auth.uid) return <Redirect to='/'/>

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

// export default SignIn




// const mapStateToProps = state => ({
  
//   // projects: state.firestore.ordered.projects


//   authError: state.auth.authError
 
// });


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    authError: state.auth.authError,
    auth:state.firebase.auth
    // projects: state.project.projects
  }
}



const mapDispatchToProps = {
  signIn:signIn
}



// const mapDispatchToProps = (dispatch) => {
//   // console.log(dispatch)
//   return {
//     signIn: (creds) => dispatch(signIn(creds))
//   }
// }





export default connect(mapStateToProps,{signIn})( SignIn)
