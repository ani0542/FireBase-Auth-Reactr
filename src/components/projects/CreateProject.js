import React, { Component } from 'react'
// import {createProject} from '../../actions/projectAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {createProject} from '../../actions/projectAction'



class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    console.log(this.props)
    this.props.createProject(this.state)
    this.props.history.push('/');
  }
  render() {

    const {auth} = this.props;

    if(!auth.uid) return <Redirect to='/signin'/>


    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}





const mapStateToProps = (state) => {
  console.log(state);
  return {
    // projects: state.firestore.ordered.projects,
    // projects: state.project.projects
    auth:state.firebase.auth
  }
}





const mapDispatchToProps = {
  createProject:createProject
}


// export default connect(null,{createProject})(CreateProject)



export default connect(mapStateToProps,{createProject})(CreateProject)