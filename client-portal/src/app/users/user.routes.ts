import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile.component"
import {LoginComponent} from "./login.component"

export const routes:Routes = [
    {path: 'profile', component:UserProfileComponent},
    {path: 'login', component: LoginComponent}
]