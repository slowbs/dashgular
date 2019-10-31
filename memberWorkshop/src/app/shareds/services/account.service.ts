import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { ILogin } from 'src/app/components/login/login.interface';
@Injectable()
export class AccountService {

    onLogin(model: ILogin) {
        //console.log(model)
        return new Promise((resolve, reject) => {
            resolve(model);
        })
    }

    onRegister(model: IRegister) {
        //console.log(model)
        return new Promise((resolve, reject ) => {
            resolve(model);
            // reject({Message:'Error from Server'});
        });
    }
}