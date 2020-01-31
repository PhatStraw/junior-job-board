import React from 'react'

export default function Job({job}){
    return (
        <div className="jobCard">
            <div>
                <h1>{job.title}</h1>
                <h3>Company: {job.company}</h3>
                <h4>Location: {job.location}</h4> 
            </div>
            <div>
                <div>Created At: {job.created_at.split(' ').slice(0,3).join(' ')}</div>
            </div>
        </div>
        
    )
}