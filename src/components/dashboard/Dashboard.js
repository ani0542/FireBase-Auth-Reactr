import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'


 class Dashboard extends Component {
   
    render() {

        const {projects,auth} = this.props;

        // console.log(this.props)

        if(!auth.uid) return <Redirect to='/signin'/>

        
        return (
            <div>
                    <div className="dashboard container">
                            <div className="row">
                            <div className="col s12 m6">
                               <ProjectList projects={projects}/>
                            </div>
                            <div className="col s12 m5 offset-m1">
                                <Notifications />
                            </div>
                            </div>
                   </div>
            </div>
        )
    }
}






const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    // projects: state.project.projects
    auth:state.firebase.auth
  }
}





export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)



