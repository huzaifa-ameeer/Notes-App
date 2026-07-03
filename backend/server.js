import express from "express"
import dotenv from 'dotenv'
import connectDb from "./src/config/db.js";
import notesRoutes from "./src/routes/notesRoutes.js";

const app = express();
dotenv.config()
connectDb()

app.use(express.json())
app.use('/api/notes', notesRoutes)

app.listen (5001, () => {
    console.log("Server is running on PORT 5001")
})