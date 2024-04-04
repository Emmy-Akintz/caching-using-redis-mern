const redis = require('redis')
console.log(`Attempting to connect to redis...`);
require('dotenv').config()

const client = redis.createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

//! connect to redis
client.on('connect', () => {
    console.log('Connected to Redis');
})
client.on('error', (e) => {
    console.log('Redis error', e);
})

client.connect()

module.exports = client