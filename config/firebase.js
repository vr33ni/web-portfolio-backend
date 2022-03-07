const admin = require("firebase-admin");
const config=require('./config.js')

// const firebaseConfig = {
//     apiKey: `${config.API_KEY}`,
//     authDomain: `${config.AUTH_DOMAIN}`,
//     projectId: `${config.PROJECT_ID}`,
//     storageBucket: `${config.STORAGE_BUCKET}`,
//     messagingSenderId: `${config.MESSAGING_SENDER_ID}`,
//     appId: `${config.APP_ID}`,
//     measurementId: `${config.MEASUREMENT_ID}`,
//     databaseURL: `${config.DB_URL}`,
//   };

 var serviceAccount = require("./service-acc-key.json");


try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `${config.DB_URL}`,
    storageBucket: `${config.STORAGE_BUCKET}`
  });} catch(error) {
  //TODO: ignoring until firebase-functions fix released
  console.log(error)
}

module.exports=admin