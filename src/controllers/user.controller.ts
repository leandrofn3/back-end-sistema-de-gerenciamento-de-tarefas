import { Request, Response } from "express";
import userService from "../services/user.service";

export class UserController {

    public async index(req: Request, res: Response) {
        try {
            const user = await userService.findAll()

            return res.status(user.code).send(user)
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            })
        }
    };

    public async create(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            const result = await userService.create({
                name, email, password
            });

            return res.status(200).send(result);

        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            });
        };
    };

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;

            const result = await userService.update({
                id,
                name,
                email,
                password
            });

            return res.status(result.code).send(result);
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            });
        };
    };

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const result = await userService.delete(id);

            return res.status(result.code).send(result);

        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            })
        }

    };
};