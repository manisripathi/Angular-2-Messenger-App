import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {ErrorService} from "../errors/error.service";

@Injectable()
export class AuthService {
    
    private URL: string = 'http://Sample-env.xpcmvx6jb3.us-east-2.elasticbeanstalk.com/';

    constructor(private http: Http, private errorService: ErrorService) {}

    signup(user: User) {
      const body = JSON.stringify(user);
      const headers = new Headers({'Content-Type' : 'Application/json'});
      return this.http.post(this. URL + 'user', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
       });
    }

    signin(user: User) {
      const body = JSON.stringify(user);
      const headers = new Headers({'Content-Type' : 'Application/json'});
      return this.http.post(this.URL + 'user/signin', body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
       });
    }

    logout() {
      localStorage.clear();
    }

    isLoggedIn() {
      return localStorage.getItem('token') !== null;
    }
}
