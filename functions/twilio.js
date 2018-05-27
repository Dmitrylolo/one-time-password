const twilio = require('twilio');

const accountSid = 'AC948b9a71639c5c3d4407164cbe974c03';
const authToken = '3b98367a294bdf8667c2a3a293e9fc02';

module.exports = new twilio.Twilio(accountSid, authToken);

// twillion phone number +17062142762