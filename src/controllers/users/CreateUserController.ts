import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, document, address } = req.body;

        if (!name || !email || !password) {
            throw new Error('Some information is missing.')
        }

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, password, document, address });

        return res.json(user);
    }
}

export { CreateUserController };