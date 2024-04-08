import { v4 as createUuid } from "uuid"

export class TaskModel {
    private _idTask: string

    constructor(private _title: string, private _description: string, private _idUser: string) {
        this._idTask = createUuid()
    }

    public get idTask() {
        return this._idTask;
    };

    public get title() {
        return this._title;
    };

    public get description() {
        return this._description;
    };

    public get idUser() {
        return this._idUser;
    };

    public get toJson() {
        return({
            id: this.idTask,
            title: this.title,
            description: this.description,
            idUser: this.idUser
        });
    };
}