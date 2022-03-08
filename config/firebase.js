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


  var serviceAccount = {
    "type": `${config.FB_SVC_ACC_TYPE}`,
    "project_id": `${config.FB_SVC_ACC_PROJECT_ID}`,
    "private_key_id": `${config.FB_SVC_ACC_PRIVATE_KEY_ID}`,
    "private_key": `${config.FB_SVC_ACC_PRIVATE_KEY}`,
    "client_email": `${config.FB_SVC_ACC_CLIENT_EMAIL}`,
    "client_id": `${config.FB_SVC_ACC_CLIENT_ID}`,
    "auth_uri": `${config.FB_SVC_ACC_AUTH_URI}`,
    "token_uri": `${config.FB_SVC_ACC_TOKEN_URI}`,
    "auth_provider_x509_cert_url": `${config.FB_SVC_ACC_AUTH_PROVIDER_X509_CERT_URL}`,
    "client_x509_cert_url": `${config.FB_SVC_ACC_CLIENT_X509_CERT_URL}`,
}


try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `${config.DB_URL}`,
    storageBucket: `${config.STORAGE_BUCKET}`
  });} catch(error) {
  //TODO: ignoring until firebase-functions fix released
  console.log(error)
}

console.log("firebase loaded", admin);

module.exports=admin