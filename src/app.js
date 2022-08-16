import 'dotenv/config'
import express, {json} from 'express';
import { connectRedis } from './api/v1/databases/redis';
import {router} from './api/v1/routes'

const app = express();

// connectRedis()

let vol = 0;

app.get('/', (req, res) => {
    vol++;
    console.log({vol});
    res.status(200).send({message: vol})
})

app.use('/api/v1', router)

app.use(json());

export default app;


