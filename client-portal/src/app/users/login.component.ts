import {Component} from "@angular/core"
import { Router } from '@angular/router'
import { AuthService } from "./authentication.service"
@Component({
    templateUrl: './login.component.html',
    styles:['em { float:right; color: red}']
})

export class LoginComponent {
    username:string
    password:string
    errorMessage: string

    constructor(private authService: AuthService, private router: Router) {

    }

    login() {
        let isAuthenticated = this.authService.authenticateUser(this.username, this.password)
        if(isAuthenticated) 
            this.router.navigate(['/events'])
        else {
            this.errorMessage="Please enter valid credentials"
            this.router.navigate(['/user/login'])
        }
    }
}