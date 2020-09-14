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
import { appRoutes } from './routes'

import { EventService } from './events/events.service'
import { RouterModule } from '@angular/router';
import { EventsActivatorService } from './events/events-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    EventDetailsByIdComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, 
              EventsActivatorService,
            {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm("Do you really want to cancel without saving this event?")
  }

  return true
}