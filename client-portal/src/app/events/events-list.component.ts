import {Component, OnInit} from "@angular/core"
import { IEvent } from './events';
import {EventService} from "./events.service"

@Component({
    selector:"events-list",
    templateUrl: "./events-list.component.html"
})

export class EventsListComponent implements OnInit{
  events : IEvent[];
  constructor(private eventService: EventService) {

  }
  
  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }
    
}