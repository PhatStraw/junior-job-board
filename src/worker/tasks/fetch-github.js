var fetch = require('node-fetch');

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub(){

    let resultCount = 1, pageCount = 0;

    const allJobs = []

    while(resultCount > 0){
        const res = await fetch(`${baseUrl}?page=${pageCount}`);
        const jobs = await res.json();
        resultCount = jobs.length;
        allJobs.push(...jobs);
        console.log('all jobs', resultCount)

        // console.log(jobs);
        pageCount++ ;
    }
    console.log('alljobs', allJobs.length)
}

fetchGithub()

module.exports = fetchGithub;
