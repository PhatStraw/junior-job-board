import React from 'react'

//Components
import Job from './job.js'

export default function JobListing({jobs}){
    return (
        <>
            {jobs.map(job => <Job job={job}/>)}
        </>
    )
}