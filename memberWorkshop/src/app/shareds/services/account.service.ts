import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/login.interface';
@Injectable()
export class AccountService {

    mockUserItem: IAccount[] = [
        {
            id: 1,
            firstname: 'sir',
            lastname: 'slowbs',
            email: 'sirslowbs@mail.com',
            username: 'slowbs',
            password: '123456',
            position: 'shitDeveloper',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            created: new Date(),
            updated: new Date()
        }
    ];


    onLogin(model: ILogin) {
        //console.log(model)
        return new Promise((resolve, reject) => {
            // resolve(model);
            // const userLogin = this.mockUserItem.filter(item => item.username == model.username && item.password == model.password)
            // // console.log(userLogin)
            // if (userLogin.length == 0) return reject({Message:'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'})
            const userLogin = this.mockUserItem.find(item => item.username == model.username && item.password == model.password)
            // console.log(userLogin)
            if (!userLogin) return reject({Message:'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'})
            resolve(userLogin)
        })
    }

    onRegister(model: IRegister) {
        //console.log(model)
        return new Promise((resolve, reject ) => {
            model['id'] = Math.random();
            this.mockUserItem.push(model);
            resolve(model);
            // reject({Message:'Error from Server'});
        });
    }
}

export interface IAccount {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    id?: any;
    position?: string;
    image?: string;
    created?: Date;
    updated?: Date;
}