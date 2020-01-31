import React, {useState} from 'react'

//Components
import Job from './job.js'
import Pagination from './pagination.js'

export default function JobListing({jobs}){
    const [currentPage, setCurrentPage] = useState(1)
    const jobsPerPage = 40

    // Get current Posts
    const indexOfLastPost = currentPage * jobsPerPage;
    const indexOFirstPost = indexOfLastPost - jobsPerPage
    const jobsOnPage = jobs.slice(indexOFirstPost, indexOfLastPost)

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <>
            {jobsOnPage.map((job, i) => <Job key={i} job={job}/>)}
            <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate}/>
        </>
    )
}