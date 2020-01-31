import React,{useState, useEffect} from 'react'


//Components 
import JobListings from './jobListing.js'
import FilterSearch from './filterSearch.js'

const JobApiUrl = 'http://localhost:3001/jobs';


async function fetchJobs(setJobsList){
    const res = await fetch(JobApiUrl);
    const json = await res.json();
    setJobsList(json)
    console.log({json})

}

export default function JobListingInterface(){
    const [jobsList, setJobsList] = useState([]);
    //Fetch Junior Jobs from github jobs
    useEffect(()=>{
        fetchJobs(setJobsList)
    }, [])

    return(
        <>
            {/* <FilterSearch /> */}
            <JobListings jobs={jobsList}/>
        </>
    )
}