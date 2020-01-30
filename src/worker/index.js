const fetchGithub = require('./tasks/fetch-github.js')

var CronJob = require('cron').CronJob;

//Fetch Github Jobs
var job = new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');
job.start();