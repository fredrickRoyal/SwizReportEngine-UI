import { Component, OnInit } from "@angular/core";
import { KeycloakService } from 'keycloak-angular'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    appName: string = 'SwizReport';
    appVerision: string = '1.0.0';
    time: string = "time is";
    timeout: number = 1000;
    created = false;

    redirectUri: string = "http://localhost:4200";

    constructor(private keycloakService: KeycloakService) {

        setInterval(() => {
            //console.log("The time is going so fast:");
            this.time = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        }, this.timeout);

    }

    onClickAvator() {
        console.log("loading context menu");
        this.created = !this.created;

    }

   async logout() {
        console.log("Logout out");

        await this.keycloakService.logout();
         
    }

    ngOnInit(): void {

    }
}