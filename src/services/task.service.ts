import { title } from "process";
import { repository } from "../database/prisma.database";
import { CreateTaskDto, UpdateTaskDto } from "../dtos/Task.dto";
import { ResponseDto } from "../dtos/response.dto";
import { TaskModel } from "../models/task.models";

class TaskService {
    public async findAll(): Promise<ResponseDto> {
        const data = await repository.task.findMany();

        return {
            code: 200,
            message: "Task successfully listed!",
            data: data
        };
    };

    public async create(data: CreateTaskDto) {
        const task = new TaskModel(data.title, data.description);

        if(data.title === "" || data.description === "" || !data.title || !data.description){
            return {
                code: 400,
                message: "All data must be passed!",
            }
        }

        const createTask = await repository.task.create({
            data: {
                idTask: task.idTask,
                title: task.title,
                description: task.description,
            },
        });

        return {
            code: 200,
            message: "Task successfully created!",
            data: createTask
        };
    };

    public async update(data: UpdateTaskDto): Promise<ResponseDto> {
        const task = await repository.task.findUnique({
            where: {
                idTask: data.id
            }
        });

        if (!task) {
            return {
                code: 404,
                message: "Task not found!"
            };
        };

        const updateTask = await repository.task.update({
            where: {
                idTask: data.id
            },
            data: {
                title: data.title,
                description: data.description,
            }
        });

        return {
            code: 200,
            message: "User successfully updated!",
            data: updateTask
        };
    };

    public async delete(idTask: string) {
        const task = await repository.task.findUnique({
            where: {
                idTask
            }
        });

        if (!task) {
            return {
                code: 404,
                message: "User not found!"
            };
        };

        await repository.task.delete({
            where: {
                idTask
            }
        });

        return {
            code: 200,
            message: "Task successfully deleted!"
        };
    };
};

export default new TaskService();