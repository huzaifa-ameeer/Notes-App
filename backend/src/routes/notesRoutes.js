import express from 'express'

const router = express.Router()

router.get('/getNotes', (req, res)=>{
    router.send("Notes fetched successfully !")
})

export default router