import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login.component';
import { UserProfileComponent } from "./user-profile.component";
import { routes } from "./user.routes";

@NgModule({
    declarations:[
        UserProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class UserModule {

}   