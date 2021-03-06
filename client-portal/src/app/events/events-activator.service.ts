import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { EventService } from "./events.service"
import { Injectable } from '@angular/core';

@Injectable()
export class EventsActivatorService implements CanActivate {

    constructor(private eventService: EventService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if(!eventExists) {
            this.router.navigate(["/404"]);
        }

        return eventExists;
    }    
    

}