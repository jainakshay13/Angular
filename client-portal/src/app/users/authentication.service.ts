import {Injectable} from "@angular/core"
import { Router } from '@angular/router';
import { IUser } from './user.model'
@Injectable()
export class AuthService {
    updateCurrentUser(profileFormValue: any) {
        this.currentUser.firstName = profileFormValue?.firstName;
        this.currentUser.lastName = profileFormValue?.lastName;
    }
    currentUser: IUser;

    constructor(private router: Router) {

    }

    isAuthenticated(): boolean{
        return !!this.currentUser;
    }

    authenticateUser(username: string, password: string) {
        if(username=='Akshay' && password == '1234') {
            this.currentUser = { 
                id: 1,
                userName: 'Akshay',
                firstName: 'Akshay',
                lastName: 'Jain'
            }
            return true;
        }else {
            return false;
        }
        
    }
}