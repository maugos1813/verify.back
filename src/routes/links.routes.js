import { Router } from 'express'
import { crearEnlace, delettingLink, gettingLinkById, gettingLinks, totalUpdattingLink, updattingPartialLink } from '../controllers/link.controller.js'

const router = Router()

router.post('/', crearEnlace)
router.get('/', gettingLinks)
router.get('/:id', gettingLinkById)
router.put('/:id', totalUpdattingLink)
router.patch('/:id', updattingPartialLink)
router.delete('/:id', delettingLink)

export default router
