require('dotenv-flow').config({ default_node_env: 'development' });


module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 8080,
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5002',
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    DB_URL: process.env.DB_URL,
}