import express from 'express'
import { createNotes, deleteNotes, getNotes, updateNotes } from '../controllers/notes.controller.js' 

const router = express.Router()

router.get('/getNotes', getNotes)
router.post('/createNotes', createNotes)
router.put('/updateNotes/:id', updateNotes)
router.delete('/deleteNotes/:id', deleteNotes)

export default router