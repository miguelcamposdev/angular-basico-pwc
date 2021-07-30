import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/dto/login.dto';
import { AuthResponse } from '../models/interfaces/auth.interface';

const apiUrl = 'https://www.minitwitter.com:3001/apiv1';

const defaultHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'  
  })
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    console.log('Servicio instanciado');
  }

  doLogin(loginDto: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${apiUrl}/auth/login`, loginDto, defaultHeaders);
  }

  getAllTweets() {
    let token = localStorage.getItem('token');
    const authHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<AuthResponse>(`${apiUrl}/tweets/all`, authHeaders);

  }

}
