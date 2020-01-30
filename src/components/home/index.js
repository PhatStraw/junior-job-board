import React from 'react'


//Components
import Nav from '../nav/'
import JobListingInterface from '../jli/'

export default function Home(){
    return(
        <div>
            <Nav />
            <JobListingInterface />
        </div>
    )
}