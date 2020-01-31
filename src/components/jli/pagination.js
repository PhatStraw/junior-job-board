import React, {useState} from 'react'

export default function Pagination({jobsPerPage, totalJobs, paginate}){

    // const[activeStep, setActiveStep] = useState(0)

    const pageNum = [];

    for(let i = 1; i <= Math.ceil(totalJobs/ jobsPerPage); i++){
        pageNum.push(i)
    }
    return (
        <nav className='pagination'>
            <ul className="pagUl">
                {pageNum.map(num => (
                    <li key={num}>
                        <a onClick={() => paginate(num)} href="#" className='paginationLink'>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
