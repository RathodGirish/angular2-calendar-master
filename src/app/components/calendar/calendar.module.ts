/**
 * Home page modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Multiselect, FilterPipe } from '../custom/multiselect/multiselect.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
// import { CalendarModule } from 'angular-calendar';
// import { CalendarHeatmap } from 'angular2-calendar-heatmap';
// import {DayPilot} from "daypilot-pro-angular";
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from "./calendar-routing.module";
// import {ScheduleModule} from 'primeng/primeng';
import { CalendarModule } from 'angular-calendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        CalendarRoutingModule,
        FormsModule, 
        ReactiveFormsModule,
        // ScheduleModule
        NgbModule.forRoot(),
        CalendarModule.forRoot(),
        // BrowserAnimationsModule
    ],
    declarations: [
        CalendarComponent,
        
        // CalendarHeatmap
        // CalendarComponent
    ]
})
export class CalendarCustomModule {
}