import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from "./events/events-list.component"
import { EventDetailsComponent } from "./events/event-details.component"
import { EventDetailsByIdComponent } from "./events/event-details-by-id.component"
import { CreateEventComponent } from "./events/create-event.component"
import { NavBarComponent } from "./nav/navbar.component"
import { Error404Component } from "./errors/404.component"
import { CreateSessionComponent } from "./events/create-session.component"
import { SessionListComponent } from "./events/session-list.component"
import { appRoutes } from './routes'
import { EventService } from './events/events.service'
import { RouterModule } from '@angular/router';
import { UserModule } from './users/user.module';
import { DurationPipeComponent } from './shared/duration.pipe'
import { EventsActivatorService } from './events/events-activator.service';
import { AuthService } from './users/authentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IToastr, TOASTR_TOKEN } from './shared/toastr.service'

declare let toastr:IToastr;
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    EventDetailsByIdComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, 
              EventsActivatorService,
            {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState},
            {provide: TOASTR_TOKEN, useValue: toastr},
            AuthService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm("Do you really want to cancel without saving this event?")
  }

  return true
}