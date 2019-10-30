import { FormGroup } from '@angular/forms';

export interface IRegisterComponent {
    form: FormGroup
    Url: any;
    onSubmit();

}

export interface IRegister {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    cpassword: string;
}