import React from 'react'


//Components 
import JobListings from './jobListing.js'
import FilterSearch from './filterSearch.js'
import JobDescription from './jobDescription.js'

const mockJobs = [
    {"name": "google", "title": "FSE", "description": "3 yr ex"}
]

export default function JobListingInterface(){
    return(
        <>
            {/* <FilterSearch /> */}
            <JobListings jobs={mockJobs}/>
            {/* <JobDescription /> */}
        </>
    )
}