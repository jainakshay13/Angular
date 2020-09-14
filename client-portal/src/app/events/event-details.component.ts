import {Component, Input} from "@angular/core"

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html'
})

export class EventDetailsComponent {

    @Input() eventDetail:any;

}