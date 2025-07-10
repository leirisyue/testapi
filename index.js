import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import UserDAO from "./dao/user.dao.js"

async function main() {
  dotenv.config()

  const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI)
  const port = process.env.PORT || 5000
  const hostName = process.env.HOST_NAME || "http://localhost"
  try {
    await client.connect()
    
    await UserDAO.injectDB(client)

    app.listen(port, () => {
      console.log(`Server is running on port ${hostName}:${port}`)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}
main().catch(console.error) 