import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:5000/api/auth/';
helper = new JwtHelperService();
decodedtoken: any;
constructor(private http: HttpClient) {
}
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).
      pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedtoken = this.helper.decodeToken(user.token);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  tokenCheck() {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }
}