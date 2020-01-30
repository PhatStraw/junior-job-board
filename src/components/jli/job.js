import React from 'react'

export default function Job({job}){
    return (
        <div className="jobCard">
            <h1>{job.name}</h1>
            <div>{job.title}</div>
            <div>{job.description}</div>
        </div>
    )
}