import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HarcodedAuthenticationService} from '../service/harcoded-authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = 'jhonny';
    password = 'dummy';
    errorMessage = 'Invalid Credentials';
    invalidLogin = false;

    // Router

    constructor(private router: Router,
                public hardcodedAuthenticationService: HarcodedAuthenticationService) {
    }

    ngOnInit() {
    }

    handleLogin() {
        console.log(this.username);
        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
        } else {
            this.invalidLogin = true;
        }
    }

}
