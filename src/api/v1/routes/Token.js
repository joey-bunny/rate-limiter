import express from 'express'
import { TokenController } from '../controllers/token'

const TokenRouter = express.Router()

TokenRouter.get('/:id', TokenController.get)

export { TokenRouter }