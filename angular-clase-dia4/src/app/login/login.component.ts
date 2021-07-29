import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../models/dto/login.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDto = new LoginDto();
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)])
  });

  constructor(private service: AuthService) { }

  ngOnInit(): void {

  }

  login() {
    this.loginDto.email = this.loginForm.controls['email'].value;
    this.loginDto.password = this.loginForm.controls['pass'].value;

    if(this.loginForm.valid) {
      this.service.doLogin(this.loginDto).subscribe(
        data => {
          console.log(data);
          alert('Login correcto');
        },
        error => {
          if(error.status == 400) {
            alert('Datos de login incorrectos');
          } else {
            alert('Error del servidor');
          }
          console.log(error);
        }
      );
    } else {
      console.log('Falta algún campo en el formulario');
    }
  }

  checkError(controlName: string) {
    return this.loginForm.controls[controlName].errors 
    && this.loginForm.controls[controlName].dirty;
  }

}
