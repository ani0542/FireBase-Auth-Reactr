import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'


const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
              {/* <ProjectSummary/>
              <ProjectSummary/>
              <ProjectSummary/>
              <ProjectSummary/> */}

              {
                projects && projects.map((value)=>{
                  return(
                    <Link to={`/project/${value.id}`}>
                             <ProjectSummary value={value} key={value.id}/>
                    </Link>
                  )
                })
              }
    </div>
  )
}

export default ProjectList
