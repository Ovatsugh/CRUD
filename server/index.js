import express from "express";
import { UserRouter } from './routes/UserRoutes.js'
import connf from './db/conf.js'
import cors from 'cors'
//configs
const app = express()
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//routes
app.use('/users', UserRouter)

app.listen(5000, () => {
    console.log("Ouvindo porta 3000")
})