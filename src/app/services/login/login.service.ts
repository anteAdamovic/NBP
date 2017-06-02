import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    public userLoggedIn(): boolean {
        return localStorage.getItem('user') ? true : false;
    }

    public checkUserSessionValidity(): boolean {
        let sessionTime = new Date(JSON.parse(localStorage.getItem('user')).time).getTime();
        let currentTime = (new Date()).getTime();

        return sessionTime > currentTime ? true : false;
    }
}