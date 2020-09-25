import { Component, Input, OnChanges } from "@angular/core"
import { Router } from '@angular/router';
import { ISession } from "./sessions"
@Component({
    selector:'session-list',
    templateUrl: './session-list.component.html',
    styles: [
        `
            #filterButtons {
               padding-top: 15px; 
               padding-bottom: 10px;
            }
        `
    ]
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    filteredSessions: ISession[]
    filterBy:string = 'all';
    sortBy:string = "name";

    constructor(private router: Router) {

    }
    
    ngOnInit() {
        console.log(this.sessions)
    }

    back() {
        this.router.navigate(['/events']);
    }

    ngOnChanges() {
        if(this.sessions) {
            this.filterBySession();
            this.filteredSessions.sort(this.sortBy==='name' ? this.sortByNameAsc : this.sortByVotersAsc);
        }
    }

    sortSessions(sortType) {
        this.filteredSessions.sort(sortType==='name' ? this.sortByNameAsc : this.sortByVotersAsc);
    }

    filterBySession(){
        if(this.filterBy === 'all') {
            this.filteredSessions=this.sessions
        }else {
            this.filteredSessions = this.sessions.filter(session=>{return session.level.toLowerCase() === this.filterBy})
        }
    }

    sortByNameAsc(s1: ISession, s2: ISession) {
        if(s1.name > s2.name) return 1;
        else if(s1.name < s2.name) return -1;
        else if(s1.name === s2.name) return 0;
    }
    
    sortByVotersAsc(s1: ISession, s2: ISession) {
        return s2.voters.length - s1.voters.length;
    }
}