import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../../services/example/example.service';
import { LoginService } from '../../services/login/login.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class Login implements OnInit {
    private sessionLength: number = 2700000; // 45 mins
    public username: string;

    constructor(private router: Router, private exampleService: ExampleService, private loginService: LoginService) { }

    ngOnInit() {
        if (this.loginService.userLoggedIn() && this.loginService.checkUserSessionValidity()) {
            this.navigateToExamples();
        } else if (this.loginService.userLoggedIn() && !this.loginService.checkUserSessionValidity()) {
            // this.notificationService.show('Session expired please log in again.');
            localStorage.clear();
        }
    }

    public login() {
        if (this.username) {
            localStorage.setItem('user', JSON.stringify({
                username: this.username,
                time: (new Date()).getTime() + this.sessionLength
            }));
            this.navigateToExamples();
        }
    }

    private navigateToExamples() {
        this.exampleService.getFirst().subscribe(
            (firstExample: any) => {
                this.router.navigate(['examples', firstExample.id]);
            }
        );
    }
}