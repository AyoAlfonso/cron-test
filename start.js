// Dependencies
var express = require('express');
var CronJob = require('cron').CronJob;
var cronReport = require('./controller/cron');
// App definition
var app = express();

//The crone job
cronReport.createCroneJob();

var portNum = 3000;

app.listen(3000, function () {
    console.log('Making some pancakes on port:', portNum);
});

