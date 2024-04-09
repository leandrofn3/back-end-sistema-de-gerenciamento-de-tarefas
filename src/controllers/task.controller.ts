import { Request, Response } from "express";
import taskService from "../services/task.service"

export class TaskController {
    public async index(req: Request, res: Response) {
        try {
            const task = await taskService.findAll();

            return res.status(task.code).send(task);

        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            })
        };
    };

    public async create(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            const result = await taskService.create({
                title,
                description,
            });

            return res.status(result.code).send(result);

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
            const { title, description } = req.body;

            const result = await taskService.update({
                id,
                title,
                description,
            });

            return res.status(result.code).send(result);

        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            })
        };
    };

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const result = await taskService.delete(id);

            return res.status(result.code).send(result);

        } catch (error: any) {
            res.status(500).send({
                ok: false,
                message: error.toString()
            });
        };
    };
};