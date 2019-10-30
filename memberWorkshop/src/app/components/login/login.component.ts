import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { ILoginComponent } from './login.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { alertService } from 'src/app/shareds/services/alert.service';
import { Router } from '@angular/router';
import { AuthURL } from 'src/app/authentication/authentication.url';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {
    constructor(
        private builder: FormBuilder,
        private alert: alertService,
        private router: Router
    ) {
        this.initialCreateFormData();
    }

    Url = AppURL;
    form: import("@angular/forms").FormGroup;

    //เข้าสู่ระบบ
    onSubmit() {
        //throw new Error("Method not implemented.");
        if (this.form.invalid)
            return this.alert.something_wrong();
        this.router.navigate(['/', AppURL.Authen, AuthURL.Dashboard])
        //console.log(this.form.value)
    }
    void: any;

    //สร้างฟอร์ม
    private initialCreateFormData() {
        this.form = this.builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            remember: [true]
        })
    }

}
