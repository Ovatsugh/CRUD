import express from "express";
import UserController from '../controllers/UserController.js'
export const UserRouter = express.Router()

UserRouter.get('/', UserController.showUsers)
UserRouter.post('/create', UserController.createUser)
UserRouter.put('/edit/:id', UserController.editUser)
UserRouter.delete('/:id', UserController.deleteUser)
UserRouter.get('/:id', UserController.showOneUser)

