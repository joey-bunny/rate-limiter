import express from 'express'
import { TokenRouter } from '../routes/Token'

const router = express.Router()

router.use('/token', TokenRouter)

export {router}