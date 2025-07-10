import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/user.routes.js";

const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('<h1>Backend here!</h1>')
})
app.use("/api/users", userRoutes);

export default app
