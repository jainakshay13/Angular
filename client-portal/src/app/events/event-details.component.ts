import {Component, Input} from "@angular/core"
import { IEvent } from './events';

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html'
})

export class EventDetailsComponent {

    @Input() eventDetail:IEvent;
    

}