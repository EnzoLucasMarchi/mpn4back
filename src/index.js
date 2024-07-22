import express from 'express'
import authRoutes from './routes/auth.routes.js'
import morgan from 'morgan'
import { PORT } from './config/config.js'
import { corsAuth } from './middlewares/auth.middleware.js'

const app = express()

app.use(express.json())
app.use(corsAuth)
app.use(morgan('dev'))

app.get('/test', (req, res) => {
    res.json({ message: 'CORS funciona' })
  })
app.use(authRoutes)

app.listen(3000, () => console.log(`Server on http://localhost:${PORT}`))
