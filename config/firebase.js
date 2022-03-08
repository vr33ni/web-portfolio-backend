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

console.log("svc acc", `${config.DB_URL}`, `${config.TYPE}`);

  var serviceAccount = {
    "type": `${config.TYPE}`,
    "project_id": `${config.FB_PROJECT_ID}`,
    "private_key_id": `${config.PRIV_KEY_ID}`,
    "private_key": `${config.PRIV_KEY}`,
    "client_email": `${config.CLIENT_EMAIL}`,
    "client_id": `${config.CLIENT_ID}`,
    "auth_uri": `${config.AUTH_URI}`,
    "token_uri": `${config.TOKEN_URI}`,
    "auth_provider_x509_cert_url": `${config.AUTH_PROVIDER_X509_CERT_URL}`,
    "client_x509_cert_url": `${config.CLIENT_X509_CERT_URL}`,
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

module.exports=admin