import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// User routes
router.post('/users', new CreateUserController().handle)
router.get('/users', isAuthenticated, new DetailUserController().handle)
router.post('/login', new AuthUserController().handle)

export { router };