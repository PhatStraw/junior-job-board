import React,{useState, useEffect} from 'react'


//Components 
import JobListings from './jobListing.js'
import FilterSearch from './filterSearch.js'

const mockJobs = [
    {"name": "google", "title": "FSE", "description": "3 yr ex"},
    {"name": "fb", "title": "FSE", "description": "3 yr ex"},
    {"name": "twitter", "title": "FSE", "description": "3 yr ex"}
]

export default function JobListingInterface(){
    const [jobs, setJobs] = useState([])
    //Fetch Junior Jobs from github jobs
    
    return(
        <>
            {/* <FilterSearch /> */}
            <JobListings jobs={jobs}/>
        </>
    )
}