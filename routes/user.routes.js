import express from "express"
import UserController from "../controllers/user.controller.js"
const router = express.Router()

router.route("/")
  .get(UserController.getUsers)
  .post(UserController.createUser)
  
router.route("/:id")
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)

export default router