import express from "express"
import UserController from "../controllers/user.controller.js"
const router = express.Router()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lấy danh sách tất cả người dùng
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Danh sách người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *       500:
 *         description: Lỗi server
 */
router.get("/", UserController.getUsers)

export default router
