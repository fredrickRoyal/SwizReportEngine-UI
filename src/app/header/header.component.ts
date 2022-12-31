import { Component, OnInit } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { KeycloakService } from 'keycloak-angular'
import { authConfig } from "../config/Auth.config";

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

    constructor(private oauthService: OAuthService) {

        this.configure();

        setInterval(() => {
            //console.log("The time is going so fast:");
            this.time = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        }, this.timeout);

    }


    private configure() {
        this.oauthService.configure(authConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        //this.login();
    }

    onClickAvator() {
        console.log("loading context menu");
        this.created = !this.created;

    }

    login() {
        this.oauthService.initCodeFlow();
    }

    logout() {
        console.log("Logout out");
        this.oauthService.logOut();

    }

    ngOnInit(): void {

    }
}