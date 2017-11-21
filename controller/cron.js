
const express = require('express');
var CronJob = require('cron').CronJob;


module.exports = {

createCroneJob: function () {
new CronJob('* * * * * *', function() {
    
		    console.log('Hello puppies!')

		}, null, true, 'America/Los_Angeles');

	}


};
