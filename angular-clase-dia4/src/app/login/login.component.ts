import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../models/dto/login.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto = new LoginDto();
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
  });

  constructor() { }

  ngOnInit(): void {

  }

  login() {
    let email = this.loginForm.controls['email'].value;
    let pass = this.loginForm.controls['pass'].value;

    if(this.loginForm.valid) {
      console.log('Válido');
    } else {
      console.log('Falta algún campo en el formulario');
    }
  }

}
