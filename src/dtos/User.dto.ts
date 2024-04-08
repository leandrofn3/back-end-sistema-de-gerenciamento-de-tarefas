export interface CreateUserDto {
    name: string;
    email: string;
    password: string;
}

export interface updateUserDto {
    id: string;
    name?: string;
    email?: string;
    password?: string;
}