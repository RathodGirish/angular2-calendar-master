/**
 * Home page modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Multiselect, FilterPipe } from '../custom/multiselect/multiselect.component';
// import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
// import { CalendarModule } from 'angular-calendar';
// import { CalendarHeatmap } from 'angular2-calendar-heatmap';
// import {DayPilot} from "daypilot-pro-angular";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule, 
        ReactiveFormsModule,
        // CalendarModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        
        // CalendarHeatmap
        // CalendarComponent
    ]
})
export class HomeModule {
}