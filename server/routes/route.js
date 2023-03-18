import express from "express";
import { adduser } from "../controllers/user-controller.js";

const route = express.Router()

route.post('/add',adduser)

export default route