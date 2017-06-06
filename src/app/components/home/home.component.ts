/**
 * Home Page Component.
 */
import { Component, ViewChild, NgModule, OnInit, Output, AfterViewInit, EventEmitter, OnDestroy, ElementRef, NgZone, Renderer, Directive } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CommonAppService } from '../../services/index';

import { AppComponent } from '../../app.component';

@Component({
  providers: [
    CommonAppService
  ],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
  public visible = false;
  public visibleAnimate = false;
  calendarOptions: Object = {
    height: 'parent',
    fixedWeekCount: false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public renderer: Renderer,

  ) {

  }

  public openModal() {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hideModal(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public ngOnInit() {

  }

  public ngAfterViewInit() {
    //this.setMapAndListSize(window.screen.height);
  }

  public goToPage(page: any){
    window.location.href = '/' + page;
  }

}