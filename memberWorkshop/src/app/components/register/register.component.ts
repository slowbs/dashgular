import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { IRegisterComponent } from './register.interface';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { alertService } from 'src/app/shareds/services/alert.service';
import { AccountService } from 'src/app/shareds/services/account.service';
import { RouterLink, Router } from '@angular/router';
declare let $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {

  constructor(
    private builder: FormBuilder,
    private alert: alertService,
    private account: AccountService,
    private router: Router
  ) {
    this.initialCreateFormData();
  }

  Url = AppURL;
  form: import("@angular/forms").FormGroup;

  // ลงทะเบียน
  onSubmit() {
    //throw new Error("Method not implemented.");
    //console.log(this.form.valid);
    if (this.form.invalid) {
      // return this.alert.notify('ทดสอบ');
      return this.alert.something_wrong();
    }
    // return alert('ข้อมูลบางย่างไม่ถูกต้อง กรุณาลอกอีกครั้ง');
    // console.log(this.form.value);
    this.account.onRegister(this.form.value)
    //.then(res => console.log(res))
    .then(res => {
      this.alert.notify('ลงทะเบียนสำเร็จ', 'info')
      this.router.navigate(['/', AppURL.Login])
    })
    .catch(err => this.alert.notify(err.Message));
  }

  // สร้างฟอร์ม
  private initialCreateFormData() {
    this.form = this.builder.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.pattern(/^[A-z0-9]{6,15}$/)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required, this.comparePassword('password')]]
    });
  }

  // สร้าง Validator Cpassword
  private comparePassword(passwordField: string) {
    return function (confirm_password: AbstractControl) {
      if (!confirm_password.parent) return;
      const password = confirm_password.parent.get(passwordField);
      const passwordSubscribe = password.valueChanges.subscribe(() => {
        confirm_password.updateValueAndValidity();
        passwordSubscribe.unsubscribe();
      });
      if (confirm_password.value === password.value)
        return;
      return {
        compare: true
      }
    }
  }
}
