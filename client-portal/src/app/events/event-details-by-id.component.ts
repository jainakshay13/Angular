import {Component, Input, OnInit} from "@angular/core"
import { EventService } from "./events.service"
import {ActivatedRoute} from "@angular/router"

@Component({
    selector: 'event-details-by-id',
    templateUrl: './event-details-by-id.component.html'
})

export class EventDetailsByIdComponent implements OnInit{

    event:any;

    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
                                                //+ is used to cast from string to number
        this.event = this.eventService.getEvent(+this.activeRoute.snapshot.params['id']);
    }

}