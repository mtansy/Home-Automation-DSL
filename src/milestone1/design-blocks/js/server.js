const twilio = require('twilio');

// Replace with your Twilio Account SID and Auth Token
const accountSid = 'xxx';
const authToken = 'xxx';
const client = require('twilio')(accountSid, authToken);

const express = require('express');
const cors = require('cors');
const app = express();

// Function to send an SMS using Twilio
// Function to send an SMS using Twilio
function sendTwilioSMS(to, body) {
    client.messages
        .create({
            body: body,
            from: '+xxx', // Replace with your Twilio phone number
            to: to
        })
        .then(message => console.log(message.sid))
}
// Enable CORS for requests from your application
app.use(cors());

app.use(express.json());

// Endpoint to handle SMS sending requests
app.post('/send-sms', (req, res) => {
    const { message } = req.body;
    sendTwilioSMS('+xxx', message); // Replace with your personal phone number
    res.send('SMS sent successfully');
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));