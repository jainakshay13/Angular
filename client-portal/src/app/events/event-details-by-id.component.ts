import {Component, Input, OnInit} from "@angular/core"
import { EventService } from "./events.service"
import {ActivatedRoute} from "@angular/router"
import { IEvent } from './events';
import { ISession } from './sessions';

@Component({
    selector: 'event-details-by-id',
    templateUrl: './event-details-by-id.component.html',
    styles:[`
        a {cursor: pointer;
        color:orange;
        text-decoration: underline;
        float: right;}
    `]
})

export class EventDetailsByIdComponent implements OnInit{

    event:IEvent;
    addSessionMode: boolean;

    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
                                                //+ is used to cast from string to number
        this.event = this.eventService.getEvent(+this.activeRoute.snapshot.params['id']);
    }

    
    addSession() {
        this.addSessionMode=true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id))
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addSessionMode=false;
    }
    
    cancel() {
        this.addSessionMode=false;
    }

}