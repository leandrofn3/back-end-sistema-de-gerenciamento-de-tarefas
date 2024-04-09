export interface CreateTaskDto {
    title: string;
    description: string;
}

export interface UpdateTaskDto {
    id: string;
    title?: string;
    description?: string;
}