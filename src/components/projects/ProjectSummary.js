import React from 'react'
import moment from 'moment';


function ProjectSummary({value}) {
    return (
        <div>
                <div className="card z-depth-0 project-summary">
                        <div className="card-content grey-text text-darken-3">
                                    <h3 className="card-title ">{value.title}</h3>
                                 {/* <p>Posted by Animesh Awasthi</p> */}
                                        <p>Posted by {value.authorFirstName} {value.authorLastName}</p>
                                               <p className="grey-text">{moment(value.createdAt.toDate()).calendar()}</p>
                        </div>
               </div>
        </div>
    )
}

export default ProjectSummary
