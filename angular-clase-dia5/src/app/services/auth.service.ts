import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAllTweets() {
    let url = `${environment.apiUrl}/tweets/all`;
  }

  doLogin() {

  }
}
