import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { IRegisterComponent } from './register.interface';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { alertService } from 'src/app/shareds/services/alert.service';
declare let $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {

  constructor(
    private builder: FormBuilder,
    private alert: alertService
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
    console.log(this.form.value);
  }

  // สร้างฟอร์ม
  private initialCreateFormData() {
    this.form = this.builder.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
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
