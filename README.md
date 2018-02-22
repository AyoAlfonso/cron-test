# cron-automate
An Express Application using the Node-Cron module to handle automated tasks


**Run Locally:**

```
git clone https://github.com/AyoAlfonso/cron-automate
cd cron-automate
npm install 
node start.js
```


**To Test Various Time Periods**
  
```
    '* * * * * *' - runs every second
      '*/5 * * * * *' - runs every 5 seconds
     '10,20,30 * * * * *' - run at 10th, 20th and 30th second of every minute
    '0 * * * * *' - runs every minute
    '0 0 * * * *' - runs every hour (at 0 minutes and 0 seconds)

    
```

**What A Basic job Function Looks Like**

```js
createTestJob: function() {
      new CronJob('* * * * * *', function() {
         console.log('You will see this message every second');
       }, null, true, 'Europe/London');

```
