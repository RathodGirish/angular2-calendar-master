/**
 * App Component.
 */
import { Component, EventEmitter, AfterViewInit, Renderer } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
    providers: [
    ],
    selector: 'calendar',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
	constructor() {

  	}

	ngAfterViewInit(): void {
	}
}