import React from 'react'

export default function Job({job}){
    return (
        <div className="jobCard">
            <h1>{job.title}</h1>
            <div>{job.company}</div>
            <div>{job.location}</div>
        </div>
    )
}