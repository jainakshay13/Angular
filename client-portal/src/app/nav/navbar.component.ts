import {Component} from "@angular/core"

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styles: [`
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
    `]
})

export class NavBarComponent {

}