const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3001;



//Hello world Quest
app.get('/', (req, res) => res.send('Hello World!'))
const time = Date();
const accountSid = 'XXXXXXXXXXXXXX'; // Account SID from www.twilio.com/console
const authToken = 'XXXXXXXXXXXXXXX';   //  Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);



//Date time Quest
client.messages.create({
      body: `Greetings! The current time is ${time} Z01BEUHS59GS023`,
    to: '+12092104311',  // Text this number
        from: '+1XXXXXXXXXX' // From a valid Twilio number
})
.then((message) => console.log(message.sid, time));
