var fetch = require('node-fetch');
var redis = require('redis'),
    client = redis.createClient()

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseUrl = 'https://jobs.github.com/positions.json';

async function fetchGithub(){

    let resultCount = 1, pageCount = 0;

    const allJobs = [];

    //Fetch Github Jobs
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

    //Junior Job Filter Algo
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();

        //algo Logic
        if(
            jobTitle.includes('sr.') ||
            jobTitle.includes('senior') ||
            jobTitle.includes('lead') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('architect')
        ) {
            return false
        }

        return true
    })

    console.log('Jrjobs', jrJobs.length)


    //set in redis
    const success = await setAsync('github', JSON.stringify(jrJobs) )
    console.log('success', {success})

}

module.exports = fetchGithub;
