import {Component} from "@angular/core"

@Component({
    template: `
        <h1>Assigned Roles </h1>
        <div class="container">
            <div class="col-md-6">
                Roles To be Assigned: <input type="checkbox" name="roleType" value="Admin"> Admin
                <input type="checkbox" name="roleType" value="User"> User
                <br/><br/>
                <button type="button" class="btn btn-primary">Assign</button>
                <button type="button" class="btn btn-info">Cancel</button>
            </div>
        </div>
    `
})
export class RolesComponent {

}