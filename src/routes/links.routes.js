import { Router } from 'express'
import { crearEnlace } from '../controllers/link.controller.js'

const router = Router()

router.post('/', crearEnlace)

export default router
