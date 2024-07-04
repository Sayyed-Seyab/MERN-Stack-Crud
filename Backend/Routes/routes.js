import express from 'express';
import {CreateUser,DeleteUser,GetUser, UpdateUser } from '../controller/UserController.js';
const routers = express.Router()

routers.post('/CreateUser', CreateUser)
routers.get('/GetUser',GetUser)
routers.put('/UpdateUser/:id', UpdateUser);
routers.delete('/DeleteUser/:id', DeleteUser)

export default routers