import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/user.routes.js";

import { swaggerUi, swaggerSpec } from './swagger.js'

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('<h1>Backend here!</h1>')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/api/users", userRoutes);

export default app
