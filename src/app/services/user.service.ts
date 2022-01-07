import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User} from '../User'
import { UserLogin} from '../UserLogin'
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  getUserInfo(){
    const token = localStorage.getItem('token')
    return jwt_decode(token!)
  }


  addUser(u:User): Observable<any> {
    return this.http.post('http://localhost:3000/users',u);
  }
  authenticateUser(u:UserLogin): Observable<any> {
    return this.http.post('http://localhost:3000/users/authenticate',u)
  }
  getAuthenticatedUserInfo() {
    return JSON.parse(localStorage.getItem('authUserInfo')!)
  }
}
