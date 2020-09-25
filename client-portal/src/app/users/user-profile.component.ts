import { Component, OnInit, Inject } from "@angular/core"
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './authentication.service'
import { TOASTR_TOKEN, IToastr} from '../shared/toastr.service'

@Component({
    templateUrl: './user-profile.component.html',
    styles: [`
        em {float: right; color: red; padding-left: 10px}
        .error input {background-color:#E3C3C5;},
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder {color: #999;}
    `]
})

export class UserProfileComponent implements OnInit{
    firstName: FormControl
    lastName: FormControl
    profileForm: FormGroup

    constructor(private authService: AuthService, private router: Router,
                @Inject(TOASTR_TOKEN) private toastr: IToastr) {

    }

    ngOnInit() {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[A-Za-z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName,Validators.required)
        this.profileForm = new FormGroup({
            firstName : this.firstName,
            lastName : this.lastName
        })
    }

    saveProfile(profileFormValue) {
        if(this.profileForm.valid) {
            this.authService.updateCurrentUser(profileFormValue)
            this.toastr.success('Profile updated successfully', 'User Created')
            this.router.navigate(['events'])
        }
    }

    cancel() {
        this.router.navigate(['/events'])
    }

    validateFirstName() {
        return this.firstName.invalid || this.firstName.touched
    }

    validateLastName() {
        return this.lastName.invalid || this.lastName.touched
    }
}