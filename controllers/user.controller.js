import UserDAO from "../dao/user.dao.js"
import User from "../models/user.model.js"
export default class UserController {
  static async createUser(req, res) {
    try {
      const user = new User(req.body)
      const result = await UserDAO.createUser(user)
      res.json({ success: true, insertedId: result.insertedId })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async getUsers(req, res) {
    const users = await UserDAO.getUsers()
    res.json(users)
  }
  static async getUserById(req, res) {
    try {
      const user = await UserDAO.getUserById(req.params.id)
      if (!user) return res.status(404).json({ error: "User not found" })
      res.json(user)
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async updateUser(req, res) {
    try {
      const result = await UserDAO.updateUser(req.params.id,
        req.body)
      res.json({ success: result.modifiedCount > 0 })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async deleteUser(req, res) {
    try {
      const result = await UserDAO.deleteUser(req.params.id)
      res.json({ success: result.deletedCount > 0 })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }
}