import { repository } from "../database/prisma.database";
import { CreateUserDto, updateUserDto } from "../dtos/User.dto";
import { ResponseDto } from "../dtos/response.dto";
import { UserModel } from "../models/user.models";

class UserService {
    public async findAll(): Promise<ResponseDto> {
        const data = await repository.user.findMany();

        return {
            code: 200,
            message: "Users successfully listed",
            data: data
        }
    };

    public async create(data: CreateUserDto) {
        const user = new UserModel(data.name, data.email, data.password);

        const createUser = await repository.user.create({
            data: {
                idUser: user.idUser,
                name: user.name,
                email: user.email,
                password: user.password
            },
        });

        return {
            code: 200,
            message: "User successfully created",
            data: createUser
        };
    };

    public async update(data: updateUserDto): Promise<ResponseDto> {
        const user = await repository.user.findUnique({
            where: {
                idUser: data.id
            },
        });

        if (!user) {
            return {
                code: 404,
                message: "User not found"
            };
        };

        const updateUser = await repository.user.update({
            where: {
                idUser: data.id
            },
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });

        return {
            code: 200,
            message: "User successfully update",
            data: updateUser
        };

    };

    public async delete(idUser: string): Promise<ResponseDto> {
        const user = await repository.user.findUnique({
            where: {
                idUser
            },
        });

        if (!user) {
            return {
                code: 404,
                message: "User not found"
            };
        };

        await repository.user.delete({
            where: {
                idUser
            }
        });

        return {
            code: 200,
            message: "User successfully deleted"
        };

    };
};

export default new UserService();