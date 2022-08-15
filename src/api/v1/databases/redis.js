import {createClient} from 'redis';

import redisConfig from '../../../config/redis'

const config = redisConfig[process.env.NODE_ENV]

const client = createClient(config.host, config.port);

async function connectRedis() {
    try {
        client.on('error', (err) => console.log('Redis Client Error', err));

        await client.connect();

        console.log("Connected to redis client")
    } catch (err) {
        
        console.log(err);
        process.exit()

    }
}

export {
    connectRedis, client
}