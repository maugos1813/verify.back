import express from 'express'
import { PORT } from './config/config.js'
import morgan from 'morgan'
import enlacesRouter from './routes/links.routes.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/links', enlacesRouter)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
