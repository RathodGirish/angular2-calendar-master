/**
 * App Modules.
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, EventEmitter, Renderer } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule{
}