const admin = require('firebase-admin')
const functions = require('firebase-functions');
const createUser = require('./createUser.js')
const serviceAccount = require('./service_account.json')
const requestOneTimePassword = require('./request_one_time_password.js')
const verifyOneTimePassword = require('./verify_one_time_password.js')

// twillion phone number +17062142762
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-e53b5.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
