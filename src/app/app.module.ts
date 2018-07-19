import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HighlightDirective } from './highlight.directive';

import { CityDirective } from './city.directive';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import {Service1Service} from './service1.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ReactiveComponent,
    HighlightDirective,
    CityDirective,
    Comp3Component,
    Comp4Component,
    Comp5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
   HttpClientModule
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
