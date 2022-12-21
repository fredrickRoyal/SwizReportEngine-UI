import { Component, OnInit } from "@angular/core";

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

    constructor() {

        setInterval(() => {
            //console.log("The time is going so fast:");
            this.time = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        }, this.timeout);

    }

    onClickAvator() {
        console.log("loading context menu");
        this.created = !this.created;

    }

    ngOnInit(): void {

    }
}