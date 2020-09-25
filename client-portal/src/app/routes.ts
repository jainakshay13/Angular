import { Routes } from "@angular/router"
import { EventsAppComponent } from "./events-app.component"
import { EventDetailsComponent } from "./events/event-details.component"
import { EventDetailsByIdComponent } from "./events/event-details-by-id.component"
import { EventsListComponent } from './events/events-list.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventsActivatorService } from "./events/events-activator.service"
import { RoleModule} from "./roles/roles.module"
import { CreateSessionComponent } from './events/create-session.component'
export const appRoutes:Routes = [
    {path: 'events/create-event', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetailsByIdComponent, canActivate: [EventsActivatorService]},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/user/login', pathMatch: 'full'},
    { path: 'user', loadChildren: './users/user.module#UserModule'},
    { path: 'roles', loadChildren: './roles/roles.module#RoleModule'}

]