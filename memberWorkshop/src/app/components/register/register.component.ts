import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';
import { IRegisterComponent } from './register.interface';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRegisterComponent {

  constructor (
    private builder: FormBuilder
  ) { 
    this.initialCreateFormData();
  }
  
  Url = AppURL;
  form: import("@angular/forms").FormGroup;

  // ลงทะเบียน
  onSubmit() {
    //throw new Error("Method not implemented.");
    console.log(this.form.value);
  }

  // สร้างฟอร์ม
  private initialCreateFormData(){
    this.form = this.builder.group({
      username: [],
      firstname: [],
      lastname: [],
      password: [],
      cpassword: []
    });
  }

}
