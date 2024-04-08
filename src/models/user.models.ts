import { v4 as createUuid } from "uuid"

export class UserModel {
    private _idUser: string

    constructor(private _name: string, private _email: string, private _password: string) {
        this._idUser = createUuid()
    }

    public get idUser() {
        return this._idUser;
    };

    public get name() {
        return this._name;
    };

    public get email() {
        return this._email;
    };

    public get password() {
        return this._password;
    };

    public get toJson(){
        return ({
            id: this._idUser,
            name: this._name,
            email: this.email,
            password: this.password
        });
    };
}