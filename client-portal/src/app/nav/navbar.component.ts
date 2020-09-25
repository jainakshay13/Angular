import {Component} from "@angular/core"
import { Router } from '@angular/router';
import {AuthService} from '../users/authentication.service'
import { LoginComponent } from '../users/login.component';
@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [`
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
    `]
})

export class NavBarComponent {
    constructor(public authService: AuthService, private router: Router) {

    }

    isNavBarEnabled() {
        return this.authService.isAuthenticated();
    }

    logout() {
        this.router.navigate(['/user/login'])
    }
}