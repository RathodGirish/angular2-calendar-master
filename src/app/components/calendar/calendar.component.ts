/**
 * Calendar Page Component.
 */
import { Component, ViewChild, NgModule, OnInit, Output, AfterViewInit, EventEmitter, OnDestroy, ElementRef, NgZone, Renderer, Directive } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CoolLocalStorage } from 'angular2-cool-storage';

import { CommonAppService } from '../../services/index';

import { AppComponent } from '../../app.component';

export var iconUrl: string = "assets/public/img/pin-purple.png";

import * as $ from 'jquery';

@Component({
  providers: [
    CommonAppService
  ],
  styleUrls: ['./calendar.component.css'],
  templateUrl: './calendar.component.html'
})

export class CalendarComponent implements OnInit, AfterViewInit {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public renderer: Renderer,
  ) {

  }

  public ngOnInit() {

  }

  public ngAfterViewInit() {
    //this.setMapAndListSize(window.screen.height);
  }

  public goToPage(){
    window.location.href = '/';
  }

}