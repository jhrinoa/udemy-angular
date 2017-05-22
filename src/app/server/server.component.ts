import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-server',
    templateUrl: 'server.component.html'
})

export class ServerComponent implements OnInit {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() { }

    ngOnInit() { }

    getServerStatus () {
        return this.serverStatus;
    }
}