import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";

const router = Router();

// User routes
router.post('/users', new CreateUserController().handle)
router.get('/users', new DetailUserController().handle)

export { router };