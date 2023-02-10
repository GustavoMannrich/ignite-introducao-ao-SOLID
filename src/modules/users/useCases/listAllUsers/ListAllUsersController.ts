/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        console.log(request.headers);
        const { user_id } = request.headers;

        try {
            const users = this.listAllUsersUseCase.execute({ user_id } as {
                user_id: string;
            });

            return response.json(users);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}

export { ListAllUsersController };
