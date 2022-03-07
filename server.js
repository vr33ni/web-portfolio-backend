const config=require('./config/config.js')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require("./config/firebase.js")
const routes = require('./routes')
const app = express()
let mode=''


const corsOptions = {
    origin: config.CORS_ORIGIN
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

app.listen(config.PORT, () => console.log(`Nodejs backend listening on port ${config.PORT}!`));