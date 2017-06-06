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
  styleUrls: ['./responsive.component.css'],
  templateUrl: './responsive.component.html'
})

export class ResponsiveComponent implements OnInit, AfterViewInit {
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