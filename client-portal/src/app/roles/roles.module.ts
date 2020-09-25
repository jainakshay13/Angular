import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { RolesComponent } from "./roles.component";

export const rolesRoutes: Routes = [
    {path: 'assignRole', component: RolesComponent}
]

@NgModule({
    declarations: [
        RolesComponent
    ],
    imports:[
        RouterModule.forChild(rolesRoutes),
        CommonModule
    ],
    providers:[

    ]
})

export class RoleModule {

}