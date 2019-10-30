import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
@Injectable()
export class AccountService {

    onRegister(model: IRegister) {
        //console.log(model)
        return new Promise((resolve, reject ) => {
            resolve(model);
            // reject({Message:'Error from Server'});
        });
    }
}