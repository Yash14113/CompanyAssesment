import { DeleteUser, GetUsers, Registration, UpdateUser, Usersignup } from "../controller/usercontroller.js";
import express from "express";

const router=express.Router();

router.post('/signup',Usersignup);
router.post('/registration',Registration)
router.get('/users',GetUsers);
router.put('/users/:id', UpdateUser);
router.delete('/users/:id',DeleteUser)



export default router