import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { ISession } from './sessions'
import { EventService } from './events.service'
import { FormControl, FormGroup } from '@angular/forms'
@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html'
})

export class CreateSessionComponent implements OnInit{
    @Output() session = new EventEmitter<ISession>();
    @Output() cancelEvent = new EventEmitter();
    sessionFormGroup: FormGroup

    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit() {
        this.sessionFormGroup = new FormGroup({
            id: new FormControl(),
            name: new FormControl(),
            presenter: new FormControl(),
            duration: new FormControl(),
            level: new FormControl(),
            abstract: new FormControl(),
            voters: new FormControl()
        })
    }

    saveSession(session) {
        this.session.emit(session);

    }

    cancel() {
        this.cancelEvent.emit();
    }

}